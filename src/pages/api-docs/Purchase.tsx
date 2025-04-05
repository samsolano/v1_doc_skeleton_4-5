```jsx
const Purchase = () => {
  return (
    <div className="container">
      <section className="api-section">
        <h2 className="api-heading">
          <span className="api-method post">POST</span> /purchase
        </h2>
        <p className="api-description">
          Handles product purchase, applies discount if provided, deducts balance
          from the user, and records the transaction.
        </p>

        <h3 className="section-heading">Request Body</h3>
        <p>
          Expects a JSON payload with the following keys:
        </p>
        <div className="table-container">
          <table className="api-table">
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Type</th>
                <th>Description</th>
                <th>Required</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>user_id</code></td>
                <td><code>integer</code></td>
                <td>The ID of the user making the purchase.</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td><code>product_id</code></td>
                <td><code>integer</code></td>
                <td>The ID of the product to purchase.</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td><code>quantity</code></td>
                <td><code>integer</code></td>
                <td>The quantity of the product to purchase.</td>
                <td>No (Default: <code>1</code>)</td>
              </tr>
              <tr>
                <td><code>discount_rate</code></td>
                <td><code>float</code></td>
                <td>
                  Optional discount rate to apply to the product price (e.g.,
                  <code>0.1</code> for 10% discount).
                </td>
                <td>No (Default: <code>0</code>)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="section-heading">Success Response</h3>
        <p>
          <strong>Status Code:</strong> <code>200 OK</code>
        </p>
        <p>
          Returns a JSON response with a success message, transaction details, and
          the user's new balance.
        </p>
        <pre className="code-block">
          <code className="language-json">
            {`{
  "message": "Purchase successful",
  "transaction": {
    // ... transaction details ...
    "user_id": 123,
    "product_id": 456,
    "quantity": 2,
    "total_price": 90.00
  },
  "new_balance": 10.00
}`}
          </code>
        </pre>

        <h3 className="section-heading">Error Responses</h3>
        <p>
          <strong>Status Code:</strong> <code>400 Bad Request</code>
        </p>
        <p>
          Returned when the request is invalid, such as missing or incorrect
          parameters, or insufficient balance.
        </p>
        <pre className="code-block">
          <code className="language-json">
            {`{
  "error": "Invalid JSON payload"
}`}
          </code>
        </pre>
        <pre className="code-block">
          <code className="language-json">
            {`{
  "error": "Insufficient balance"
}`}
          </code>
        </pre>

        <p>
          <strong>Status Code:</strong> <code>404 Not Found</code>
        </p>
        <p>
          Returned when the user or product is not found.
        </p>
        <pre className="code-block">
          <code className="language-json">
            {`{
  "error": "User not found"
}`}
          </code>
        </pre>
        <pre className="code-block">
          <code className="language-json">
            {`{
  "error": "Product not found"
}`}
          </code>
        </pre>
      </section>
      <style jsx>{`
        .container {
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
          padding: 2rem;
          color: #24292e;
        }

        .api-section {
          max-width: 800px;
          margin: 0 auto;
        }

        .api-heading {
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .api-method {
          padding: 0.25rem 0.5rem;
          border-radius: 6px;
          font-size: 0.875rem;
          font-weight: 600;
          color: white;
        }

        .post {
          background-color: #198754; /* Bootstrap success color */
        }


        .api-description {
          color: #586069;
          line-height: 1.5;
          margin-bottom: 1.5rem;
        }

        .section-heading {
          font-size: 1.5rem;
          font-weight: 500;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }

        .table-container {
          overflow-x: auto;
        }

        .api-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 1.5rem;
          border-spacing: 0;
        }

        .api-table thead th {
          background-color: #f6f8fa;
          color: #24292e;
          text-align: left;
          padding: 0.75rem 1rem;
          font-weight: 600;
          border-bottom: 1px solid #d0d7de;
        }

        .api-table tbody td {
          padding: 0.75rem 1rem;
          border-bottom: 1px solid #e1e4e8;
          vertical-align: top;
        }

        .api-table tbody tr:last-child td {
          border-bottom: none;
        }


        .code-block {
          background-color: #f6f8fa;
          border-radius: 6px;
          padding: 1rem;
          overflow-x: auto;
          margin-bottom: 1.5rem;
        }

        .code-block code {
          font-family: monospace, monospace;
          font-size: 0.875rem;
          color: #24292e;
          display: block; /* Ensure proper wrapping */
          white-space: pre; /* Keep formatting and spaces */
          word-wrap: normal; /* Prevent line breaks within words if possible */
          overflow-x: auto; /* Enable horizontal scrolling if content is wider than container */

        }
      `}</style>
    </div>
  );
};

export default Purchase;
```