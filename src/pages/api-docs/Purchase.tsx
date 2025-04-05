```jsx
import React from 'react';

const Purchase = () => {
  const styles = {
    container: {
      fontFamily: 'sans-serif',
      maxWidth: '800px',
      margin: '20px auto',
      padding: '20px',
      backgroundColor: '#f8f8f8',
      borderRadius: '8px',
      border: '1px solid #e0e0e0',
    },
    heading: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '15px',
      color: '#333',
    },
    endpoint: {
      fontSize: '1.5rem',
      marginBottom: '10px',
      color: '#555',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    methodBadge: {
      backgroundColor: '#22c55e',
      color: 'white',
      padding: '5px 10px',
      borderRadius: '6px',
      fontSize: '0.9rem',
      fontWeight: 'bold',
    },
    description: {
      fontSize: '1rem',
      color: '#666',
      marginBottom: '20px',
      lineHeight: '1.6',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginBottom: '20px',
    },
    th: {
      backgroundColor: '#f0f0f0',
      border: '1px solid #e0e0e0',
      padding: '10px',
      textAlign: 'left',
      fontWeight: 'bold',
    },
    td: {
      border: '1px solid #e0e0e0',
      padding: '10px',
    },
    codeBlock: {
      backgroundColor: '#f0f0f0',
      padding: '15px',
      borderRadius: '6px',
      overflowX: 'auto',
      fontSize: '0.9rem',
      marginBottom: '20px',
      fontFamily: 'monospace',
      border: '1px solid #e0e0e0',
    },
    responseSection: {
      marginBottom: '20px',
    },
    responseHeading: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      marginBottom: '10px',
      color: '#333',
    },
    responseDescription: {
      fontSize: '1rem',
      color: '#666',
      marginBottom: '10px',
      lineHeight: '1.6',
    },
    errorResponseHeading: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      marginBottom: '10px',
      color: '#cc0000',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Purchase Endpoint</h2>
      <div style={styles.endpoint}>
        <span style={styles.methodBadge}>POST</span> <code>/purchase</code>
      </div>
      <p style={styles.description}>
        Handles product purchase, applies discount if provided, deducts balance from the user, and records the transaction.
      </p>

      <h3 style={styles.responseHeading}>Request Body</h3>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Parameter</th>
            <th style={styles.th}>Type</th>
            <th style={styles.th}>Required</th>
            <th style={styles.th}>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={styles.td}><code>user_id</code></td>
            <td style={styles.td}><code>integer</code></td>
            <td style={styles.td}>Yes</td>
            <td style={styles.td}>The ID of the user making the purchase.</td>
          </tr>
          <tr>
            <td style={styles.td}><code>product_id</code></td>
            <td style={styles.td}><code>integer</code></td>
            <td style={styles.td}>Yes</td>
            <td style={styles.td}>The ID of the product to be purchased.</td>
          </tr>
          <tr>
            <td style={styles.td}><code>quantity</code></td>
            <td style={styles.td}><code>integer</code></td>
            <td style={styles.td}>No</td>
            <td style={styles.td}>The quantity of the product to purchase. Defaults to <code>1</code>.</td>
          </tr>
          <tr>
            <td style={styles.td}><code>discount_rate</code></td>
            <td style={styles.td}><code>float</code></td>
            <td style={styles.td}>No</td>
            <td style={styles.td}>The discount rate to apply to the product price (e.g., <code>0.1</code> for 10% discount). Defaults to <code>0</code>.</td>
          </tr>
        </tbody>
      </table>

      <h3 style={styles.responseHeading}>Example Request</h3>
      <div style={styles.codeBlock}>
        <pre>
          <code>
            {`{
  "user_id": 123,
  "product_id": 456,
  "quantity": 2,
  "discount_rate": 0.05
}`}
          </code>
        </pre>
      </div>

      <div style={styles.responseSection}>
        <h3 style={styles.responseHeading}>Success Response (200 OK)</h3>
        <p style={styles.responseDescription}>
          Returned upon successful purchase.
        </p>
        <div style={styles.codeBlock}>
          <pre>
            <code>
              {`{
  "message": "Purchase successful",
  "transaction": {
    "transaction_id": "some_uuid",
    "user_id": 123,
    "product_id": 456,
    "quantity": 2,
    "total_price": 95.00,
    "timestamp": "2024-01-01T12:00:00Z"
  },
  "new_balance": 405.00
}`}
            </code>
          </pre>
        </div>
      </div>

      <div style={styles.responseSection}>
        <h3 style={styles.errorResponseHeading}>Error Response (400 Bad Request)</h3>
        <p style={styles.responseDescription}>
          Returned if the request payload is invalid JSON, or if user has insufficient balance.
        </p>
        <div style={styles.codeBlock}>
          <pre>
            <code>
              {`{
  "error": "Invalid JSON payload"
}`}
            </code>
          </pre>
        </div>
        <div style={styles.codeBlock}>
          <pre>
            <code>
              {`{
  "error": "Insufficient balance"
}`}
            </code>
          </pre>
        </div>
      </div>

      <div style={styles.responseSection}>
        <h3 style={styles.errorResponseHeading}>Error Response (404 Not Found)</h3>
        <p style={styles.responseDescription}>
          Returned if the user or product is not found.
        </p>
        <div style={styles.codeBlock}>
          <pre>
            <code>
              {`{
  "error": "User not found"
}`}
            </code>
          </pre>
        </div>
        <div style={styles.codeBlock}>
          <pre>
            <code>
              {`{
  "error": "Product not found"
}`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
```