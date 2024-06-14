import { useState, useEffect } from 'react';
import { Container, Heading, Table, Thead, Tbody, Tr, Th, Td, Spinner, Alert, AlertIcon } from "@chakra-ui/react";
import axios from 'axios';

const ViewLog = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/logs');
        setLogs(response.data);
      } catch (err) {
        setError('Failed to fetch logs');
      } finally {
        setLoading(false);
      }
    };

    fetchLogs();
  }, []);

  if (loading) {
    return (
      <Container centerContent>
        <Spinner size="xl" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container centerContent>
        <Alert status="error">
          <AlertIcon />
          {error}
        </Alert>
      </Container>
    );
  }

  return (
    <Container maxW="container.lg" py={10}>
      <Heading as="h1" size="xl" mb={6}>PDF View Logs</Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>User ID</Th>
            <Th>PDF ID</Th>
            <Th>Timestamp</Th>
          </Tr>
        </Thead>
        <Tbody>
          {logs.map((log) => (
            <Tr key={log.id}>
              <Td>{log.userId}</Td>
              <Td>{log.pdfId}</Td>
              <Td>{new Date(log.timestamp).toLocaleString()}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Container>
  );
};

export default ViewLog;