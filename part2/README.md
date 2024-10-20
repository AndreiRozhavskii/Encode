
# IntelX API Integration

This is a Node.js application that integrates with the IntelX API to search for information based on a term and fetch details using a unique ID.

## Requirements

- Node.js (version 14 or higher)
- npm (Node Package Manager)

## Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install the dependencies**:
   ```bash
   npm install
   ```

3. **Set your API key**:
   Replace the API key in `models/intelxModel.js` with your own IntelX API key:
   ```javascript
   const apiKey = 'your-api-key-here';
   ```

## Running the Application

1. Start the server:
   ```bash
   node app.js
   ```
   The server will run on port 3000.

## Using the API

### Search for a Term

- **Endpoint**: `GET /intelx/search?term=<your-search-term>`
- **Example**:
  ```bash
  curl -X GET "http://localhost:3000/intelx/search?term=example.com"
  ```

### Get Details by ID

- **Endpoint**: `GET /intelx/details/:id`
- **Example**:
  ```bash
  curl -X GET "http://localhost:3000/intelx/details/<your-id>"
  ```

## Testing with Postman

You can test the API using Postman. Follow these steps:

1. Open Postman.
2. Create a new request.
3. For searching, set the method to `GET` and enter the URL: `http://localhost:3000/intelx/search?term=example.com`.
4. For details, set the method to `GET` and enter the URL: `http://localhost:3000/intelx/details/<your-id>`.
5. Click "Send" to see the results.


