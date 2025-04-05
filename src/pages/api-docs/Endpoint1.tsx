<div class="api-documentation">
  <section class="api-endpoint">
    <h2>
      <span class="method post">POST</span>
      <code>/recharge</code>
    </h2>
    <p class="endpoint-description">
      Adds the specified amount to the user's balance.
    </p>

    <div class="request-section">
      <h3>Request Body</h3>
      <p>
        The request body is a JSON object.
      </p>
      <h4>
        <span class="content-type">Content-Type:</span>
        <code>application/json</code>
      </h4>
      <pre><code class="language-json">{
  "user_id": <span class="type">integer</span>,
  "amount": <span class="type">number</span> (<span class="format">float</span>)
}</code></pre>
      <div class="parameter-table">
        <table>
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
              <td>The ID of the user to recharge.</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td><code>amount</code></td>
              <td><code>number</code> (float)</td>
              <td>The amount to add to the user's balance.</td>
              <td>Yes</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="response-section">
      <h3>Responses</h3>

      <div class="response-block success">
        <h4>
          <span class="status-code">200 OK</span>
          <span class="status-text">Success</span>
        </h4>
        <p>
          Recharge was successful. Returns the new balance.
        </p>
        <pre><code class="language-json">{
  "message": "Recharge successful",
  "new_balance": <span class="type">number</span> (<span class="format">float</span>)
}</code></pre>
      </div>

      <div class="response-block error">
        <h4>
          <span class="status-code">400 Bad Request</span>
          <span class="status-text">Client Error</span>
        </h4>
        <p>
          Returned when the request body is not valid JSON.
        </p>
        <pre><code class="language-json">{
  "error": "Invalid JSON payload"
}</code></pre>
      </div>

      <div class="response-block error">
        <h4>
          <span class="status-code">404 Not Found</span>
          <span class="status-text">Client Error</span>
        </h4>
        <p>
          Returned when the user with the provided <code>user_id</code> is not found.
        </p>
        <pre><code class="language-json">{
  "error": "User not found"
}</code></pre>
      </div>
    </div>
  </section>
</div>

<style>
  .api-documentation {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: #0f172a; /* Gray-800 from Tailwind */
  }

  .api-endpoint {
    margin-bottom: 2rem;
  }

  h2 {
    font-size: 1.75rem; /* text-2xl from Tailwind */
    font-weight: 700; /* font-bold from Tailwind */
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  h2 code {
    font-size: 1.75rem; /* text-2xl from Tailwind */
    padding: 0.25rem 0.5rem;
    background-color: #f0f0f0; /* Gray-100 like bg-gray-100 */
    border-radius: 0.375rem; /* rounded-md from Tailwind */
    font-weight: 500;
    color: #0f172a; /* Gray-800 */
  }

  .method {
    display: inline-block;
    padding: 0.25rem 0.5rem;
    border-radius: 0.375rem; /* rounded-md from Tailwind */
    font-size: 0.875rem; /* text-sm from Tailwind */
    font-weight: 600; /* font-semibold from Tailwind */
    text-transform: uppercase;
  }

  .method.post {
    background-color: #bae6fd; /* Sky-200 like bg-sky-200 */
    color: #065f46; /* Green-800 like text-green-800 for POST (adjust as needed) */
  }

  .endpoint-description {
    color: #4b5563; /* Gray-500 from Tailwind */
    margin-bottom: 1rem;
  }

  .request-section,
  .response-section {
    margin-bottom: 1.5rem;
  }

  .request-section h3,
  .response-section h3 {
    font-size: 1.25rem; /* text-lg from Tailwind */
    font-weight: 600; /* font-semibold from Tailwind */
    margin-bottom: 0.75rem;
  }

  .content-type {
    font-weight: 600;
  }

  pre {
    background-color: #f0f0f0; /* Gray-100 like bg-gray-100 */
    padding: 1rem;
    border-radius: 0.375rem; /* rounded-md from Tailwind */
    overflow-x: auto;
    margin-bottom: 1rem;
  }

  pre code {
    display: block; /* Ensure code fills pre width */
    color: #1e293b; /* Gray-700 from Tailwind */
    font-size: 0.875rem; /* text-sm from Tailwind */
    line-height: 1.5;
  }

  .language-json {
    color: #1e293b; /* Gray-700 from Tailwind */
  }

  .type, .format {
    color: #0672a3; /* Blue-500 like text-blue-500 */
    font-weight: 500;
  }

  .parameter-table table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 1rem;
  }

  .parameter-table th,
  .parameter-table td {
    padding: 0.75rem;
    border-bottom: 1px solid #e5e7eb; /* Gray-200 from Tailwind */
    text-align: left;
  }

  .parameter-table th {
    font-weight: 600; /* font-semibold from Tailwind */
  }

  .parameter-table tbody tr:last-child td {
    border-bottom: none;
  }

  .response-block {
    margin-bottom: 1rem;
    padding: 1rem;
    border-radius: 0.375rem; /* rounded-md from Tailwind */
    border: 1px solid #e5e7eb; /* Gray-200 from Tailwind */
  }

  .response-block h4 {
    font-size: 1rem; /* text-base from Tailwind */
    font-weight: 600; /* font-semibold from Tailwind */
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .status-code {
    font-weight: 700; /* font-bold from Tailwind */
  }

  .status-text {
    color: #4b5563; /* Gray-500 from Tailwind */
  }

  .response-block.success {
    border-color: #a7f3d0; /* Green-200 like border-green-200 */
    background-color: #f0fdf4; /* Green-50 like bg-green-50 */
  }

  .response-block.success .status-code {
    color: #065f46; /* Green-800 like text-green-800 */
  }

  .response-block.error {
    border-color: #fecaca; /* Red-200 like border-red-200 */
    background-color: #fef2f2; /* Red-50 like bg-red-50 */
  }
  .response-block.error .status-code {
    color: #b91c1c; /* Red-800 like text-red-800 */
  }
</style>