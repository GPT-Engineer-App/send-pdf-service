const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/log', (req, res) => {
  const logEntry = {
    timestamp: new Date().toISOString(),
    pdfId: req.body.pdfId,
    userId: req.body.userId,
  };

  const logFilePath = path.join(__dirname, 'logs', 'pdf-view-log.json');

  fs.readFile(logFilePath, 'utf8', (err, data) => {
    if (err && err.code !== 'ENOENT') {
      return res.status(500).json({ error: 'Failed to read log file' });
    }

    const logs = data ? JSON.parse(data) : [];
    logs.push(logEntry);

    fs.writeFile(logFilePath, JSON.stringify(logs, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to write log file' });
      }

      res.status(200).json({ message: 'Log entry recorded' });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});