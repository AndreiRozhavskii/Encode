# Zero Trust Score API

This project is a backend service for collecting data about the "Zero Trust Score." It is built using Node.js and PostgreSQL, with Knex to handle the database.

## Tech Stack
- Node.js
- Express
- PostgreSQL
- Knex
- dotenv

## Installation

1. **Clone the repository:**
   ```bash
   git clone <YOUR_REPOSITORY_URL>
   cd <YOUR_FOLDER>
   ```

2. **Install the dependencies:**
   ```bash
   npm install
   ```

3. **Create a `.env` file in the root folder of the project:**
   ```plaintext
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=<YOUR_USERNAME>
   DB_PASS=<YOUR_PASSWORD>
   DB_NAME=zero-trust-db
   ```

4. **Start the server:**
   ```bash
   node server.js
   ```

The server will be available at: `http://localhost:3000`.

## API Endpoints

### 1. Create a New Zero Trust Score

- **URL:** `/api/scores`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "averageShannonEntropyScore": 7.8,
    "firewallDetected": true,
    "DNSsecEnabled": true,
    "tlsVersion": "1.2",
    "certificateBitStrength": 2048,
    "securityHeadersImplemented": ["X-XSS-Protection", "X-Frame-Options"],
    "openPortsDetected": 12
  }
  ```
- **Response:**
  - **Success:** `201 Created`
    ```json
    {
      "message": "Score created",
      "id": <NEW_RECORD_ID>
    }
    ```
  - **Error:** `500 Internal Server Error`
    ```json
    {
      "message": "Error creating score",
      "error": {}
    }
    ```

### 2. Get All Zero Trust Scores

- **URL:** `/api/scores`
- **Method:** `GET`
- **Response:**
  - **Success:** `200 OK`
    ```json
    [
      {
        "id": <RECORD_ID>,
        "averageShannonEntropyScore": 7.8,
        "firewallDetected": true,
        "DNSsecEnabled": true,
        "tlsVersion": "1.2",
        "certificateBitStrength": 2048,
        "securityHeadersImplemented": ["X-XSS-Protection", "X-Frame-Options"],
        "openPortsDetected": 12
      }
      // ... other records
    ]
    ```
  - **Error:** `500 Internal Server Error`
    ```json
    {
      "message": "Error fetching scores",
      "error": {}
    }
    ```

## Notes

- Make sure PostgreSQL is installed and running on your computer.
- Don’t forget to create the `zerotrustscore` table in your PostgreSQL database before starting the server.
- You can use tools like Postman or cURL to work with the API.


