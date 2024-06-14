import { Container, VStack, Heading, Text, Box, Input, Button, FormControl, FormLabel, Textarea } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.md" py={10}>
      {/* Header */}
      <Box as="header" mb={10} textAlign="center">
        <Heading as="h1" size="2xl">PDF Sender Service</Heading>
        <Text fontSize="lg" color="gray.600">Send your PDF documents easily and securely</Text>
      </Box>

      {/* Main Section */}
      <Box as="main" mb={10}>
        <VStack spacing={5} align="stretch">
          <FormControl id="email">
            <FormLabel>Recipient Email</FormLabel>
            <Input type="email" placeholder="Enter recipient's email" />
          </FormControl>
          <FormControl id="message">
            <FormLabel>Message</FormLabel>
            <Textarea placeholder="Enter your message" />
          </FormControl>
          <FormControl id="pdf">
            <FormLabel>Upload PDF</FormLabel>
            <Input type="file" accept="application/pdf" />
          </FormControl>
          <Button colorScheme="blue" size="lg">Send PDF</Button>
        </VStack>
      </Box>

      {/* Footer */}
      <Box as="footer" textAlign="center" color="gray.600">
        <Text>Contact us at support@pdfsender.com</Text>
        <Text>&copy; 2023 PDF Sender Service</Text>
      </Box>
    </Container>
  );
};

export default Index;