```jsx
import React from 'react';

const Recharge = () => {
  return (
    <div className="api-documentation" style={{ fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"', lineHeight: '1.5', color: '#111827' }}>
      <h2 style={{ fontWeight: 'bold', fontSize: '2rem', marginBottom: '1rem' }}>Recharge Account</h2>
      <div className="endpoint-info" style={{ marginBottom: '1.5rem' }}>
        <div className="method" style={{ display: 'inline-block', padding: '0.25rem 0.5rem', backgroundColor: '#10B981', color: 'white', borderRadius: '0.25rem', fontWeight: 'bold', marginRight: '0.5rem', fontSize: '0.875rem' }}>POST</div>
        <div className="path" style={{ display: 'inline-block', padding: '0.25rem 0.5rem', backgroundColor: '#F3F4F6', color: '#4B5563', borderRadius: '0.25rem', fontSize: '0.875rem', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace' }}>/recharge</div>
      </div>
      <div className="description" style={{ marginBottom: '1rem' }}>
        <p style={{ color: '#4B5563' }}>Adds the specified amount to the user's balance.</p>
      </div>

      <div className="request-body" style={{ marginBottom: '1.5rem' }}>
        <h3 style={{ fontWeight: 'bold', fontSize: '1.25rem', marginBottom: '0.75rem' }}>Request Body</h3>
        <p style={{ color: '#4B5563', marginBottom: '0.5rem' }}>Expects a JSON payload with the following fields:</p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#4B5563' }}>
          <li style={{ marginBottom: '0.25rem' }}>
            <code style={{ padding: '0.2rem 0.4rem', backgroundColor: '#F3F4F6', borderRadius: '0.25rem', fontSize: '0.875rem', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace' }}>user_id</code> <span style={{ color: '#6B7280' }}> (integer, required)</span> - The ID of the user to recharge.
          </li>
          <li>
            <code style={{ padding: '0.2rem 0.4rem', backgroundColor: '#F3F4F6', borderRadius: '0.25rem', fontSize: '0.875rem', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace' }}>amount</code> <span style={{ color: '#6B7280' }}> (number, optional, default: 0)</span> - The amount to add to the user's balance.
          </li>
        </ul>
        <div className="example-request" style={{ marginTop: '0.75rem' }}>
          <p style={{ fontWeight: 'bold', color: '#4B5563', marginBottom: '0.25rem' }}>Example Request:</p>
          <pre style={{ backgroundColor: '#F3F4F6', padding: '0.75rem', borderRadius: '0.5rem', overflowX: 'auto' }}>
            <code style={{ fontSize: '0.875rem', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace', display: 'block', whiteSpace: 'pre' }}>
              {`{
  "user_id": 123,
  "amount": 50.00
}`}
            </code>
          </pre>
        </div>
      </div>

      <div className="responses" style={{ marginBottom: '1.5rem' }}>
        <h3 style={{ fontWeight: 'bold', fontSize: '1.25rem', marginBottom: '0.75rem' }}>Responses</h3>

        <div className="success-response" style={{ marginBottom: '1rem' }}>
          <h4 style={{ fontWeight: 'bold', fontSize: '1rem', marginBottom: '0.5rem' }}>
            <span style={{ display: 'inline-block', padding: '0.25rem 0.5rem', backgroundColor: '#10B981', color: 'white', borderRadius: '0.25rem', fontWeight: 'bold', marginRight: '0.5rem', fontSize: '0.875rem' }}>200 OK</span> Success
          </h4>
          <p style={{ color: '#4B5563', marginBottom: '0.5rem' }}>Successful recharge.</p>
          <p style={{ color: '#4B5563', marginBottom: '0.5rem' }}>Response body:</p>
          <pre style={{ backgroundColor: '#F3F4F6', padding: '0.75rem', borderRadius: '0.5rem', overflowX: 'auto' }}>
            <code style={{ fontSize: '0.875rem', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace', display: 'block', whiteSpace: 'pre' }}>
              {`{
  "message": "Recharge successful",
  "new_balance": 150.00
}`}
            </code>
          </pre>
        </div>

        <div className="error-responses">
          <h4 style={{ fontWeight: 'bold', fontSize: '1rem', marginBottom: '0.5rem' }}>Error Responses</h4>

          <div className="bad-request-response" style={{ marginBottom: '0.75rem' }}>
            <h5 style={{ fontWeight: 'bold', fontSize: '0.875rem', marginBottom: '0.25rem' }}>
              <span style={{ display: 'inline-block', padding: '0.25rem 0.5rem', backgroundColor: '#EF4444', color: 'white', borderRadius: '0.25rem', fontWeight: 'bold', marginRight: '0.5rem', fontSize: '0.75rem' }}>400 Bad Request</span> Invalid JSON Payload
            </h5>
            <pre style={{ backgroundColor: '#F3F4F6', padding: '0.5rem', borderRadius: '0.5rem', overflowX: 'auto' }}>
              <code style={{ fontSize: '0.875rem', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace', display: 'block', whiteSpace: 'pre' }}>
                {`{
  "error": "Invalid JSON payload"
}`}
              </code>
            </pre>
          </div>

          <div className="not-found-response">
            <h5 style={{ fontWeight: 'bold', fontSize: '0.875rem', marginBottom: '0.25rem' }}>
              <span style={{ display: 'inline-block', padding: '0.25rem 0.5rem', backgroundColor: '#EF4444', color: 'white', borderRadius: '0.25rem', fontWeight: 'bold', marginRight: '0.5rem', fontSize: '0.75rem' }}>404 Not Found</span> User Not Found
            </h5>
            <pre style={{ backgroundColor: '#F3F4F6', padding: '0.5rem', borderRadius: '0.5rem', overflowX: 'auto' }}>
              <code style={{ fontSize: '0.875rem', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace', display: 'block', whiteSpace: 'pre' }}>
                {`{
  "error": "User not found"
}`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recharge;
```