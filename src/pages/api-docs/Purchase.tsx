function Purchase() {
  return (
    <>
      <h2>/purchase</h2>
      <p>
        <strong>POST</strong>
      </p>
      <p>
        Handles product purchase, applies discount if provided, deducts balance from the user, and records the transaction.
      </p>

      <h3>Request Body</h3>
      <p>
        Expects a JSON payload with the following keys:
      </p>
      <table>
        <thead>
          <tr>
            <th>Field</th>
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
            <td>The ID of the product being purchased.</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td><code>quantity</code></td>
            <td><code>integer</code></td>
            <td>The quantity of the product to purchase.</td>
            <td>No</td>
          </tr>
          <tr>
            <td><code>discount_rate</code></td>
            <td><code>number</code></td>
            <td>The discount rate to apply to the product price (e.g., 0.1 for 10%).</td>
            <td>No</td>
          </tr>
        </tbody>
      </table>

      <h3>Response</h3>

      <h4>Success Response (200 OK)</h4>
      <p>
        Returns a JSON response with details of the successful purchase.
      </p>
      <p>
        <strong>Body:</strong>
      </p>
      <pre>
        <code>
{
  "message": "Purchase successful",
  "transaction": {
    // Transaction details object (implementation-specific)
    // ...
  },
  "new_balance": 1234 // Updated user balance
}
        </code>
      </pre>

      <h4>Error Responses</h4>

      <h5>400 Bad Request</h5>
      <p>
        Returned if the request body is not valid JSON or if the user has insufficient balance.
      </p>
      <p>
        <strong>Body (Invalid JSON):</strong>
      </p>
      <pre>
        <code>
{
  "error": "Invalid JSON payload"
}
        </code>
      </pre>
      <p>
        <strong>Body (Insufficient balance):</strong>
      </p>
      <pre>
        <code>
{
  "error": "Insufficient balance"
}
        </code>
      </pre>

      <h5>404 Not Found</h5>
      <p>
        Returned if the user or product with the provided IDs are not found.
      </p>
      <p>
        <strong>Body (User not found):</strong>
      </p>
      <pre>
        <code>
{
  "error": "User not found"
}
        </code>
      </pre>
      <p>
        <strong>Body (Product not found):</strong>
      </p>
      <pre>
        <code>
{
  "error": "Product not found"
}
        </code>
      </pre>
    </>
  );
}

export default Purchase;