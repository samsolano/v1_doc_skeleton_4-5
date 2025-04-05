```jsx
const Recharge = () => {
  return (
    <div className="api-documentation" style={{ fontFamily: 'Inter, sans-serif', color: '#0f172a', padding: '2rem' }}>
      <div className="endpoint-header" style={{ marginBottom: '1.5rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.75rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>/recharge</h2>
        <p style={{ fontSize: '1rem', color: '#64748b' }}>POST</p>
      </div>

      <div className="endpoint-description" style={{ marginBottom: '1.5rem' }}>
        <p style={{ lineHeight: '1.6' }}>
          Adds the specified amount to the user's balance.
        </p>
      </div>

      <div className="request-body" style={{ marginBottom: '1.5rem' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 'semibold', marginBottom: '0.75rem' }}>Request Body</h3>
        <p style={{ fontSize: '1rem', color: '#64748b', marginBottom: '0.5rem' }}>Content Type: <code style={{ backgroundColor: '#f0f0f0', padding: '0.2rem 0.4rem', borderRadius: '0.25rem', fontSize: '0.9rem' }}>application/json</code></p>
        <div className="code-block" style={{ backgroundColor: '#f9f9f9', border: '1px solid #e2e8f0', borderRadius: '0.5rem', padding: '1rem', overflowX: 'auto' }}>
          <pre style={{ margin: 0, fontSize: '0.9rem', whiteSpace: 'pre-wrap' }}>
            <code style={{ display: 'block' }}>
              {`{
  "user_id": number,
  "amount": number
}`}
            </code>
          </pre>
        </div>
        <div style={{ marginTop: '0.75rem' }}>
          <div style={{ marginBottom: '0.5rem' }}>
            <strong style={{ fontWeight: 'semibold' }}>user_id</strong>
            <span style={{ color: '#64748b', marginLeft: '0.5rem' }}>number</span>
          </div>
          <p style={{ fontSize: '0.9rem', color: '#64748b', marginLeft: '1rem', marginBottom: '0.5rem' }}>
            The ID of the user to recharge.
          </p>
          <div style={{ marginBottom: '0.5rem' }}>
            <strong style={{ fontWeight: 'semibold' }}>amount</strong>
            <span style={{ color: '#64748b', marginLeft: '0.5rem' }}>number</span>
          </div>
          <p style={{ fontSize: '0.9rem', color: '#64748b', marginLeft: '1rem' }}>
            The amount to add to the user's balance.
          </p>
        </div>
      </div>

      <div className="response-codes" style={{ marginBottom: '1.5rem' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 'semibold', marginBottom: '0.75rem' }}>Response Codes</h3>

        <div className="response-code" style={{ marginBottom: '1rem' }}>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 'semibold', marginBottom: '0.25rem' }}>200 OK</h4>
          <p style={{ fontSize: '1rem', color: '#64748b', marginBottom: '0.5rem' }}>Success</p>
          <div className="code-block" style={{ backgroundColor: '#f9f9f9', border: '1px solid #e2e8f0', borderRadius: '0.5rem', padding: '1rem', overflowX: 'auto' }}>
            <pre style={{ margin: 0, fontSize: '0.9rem', whiteSpace: 'pre-wrap' }}>
              <code style={{ display: 'block' }}>
                {`{
  "message": "Recharge successful",
  "new_balance": number
}`}
              </code>
            </pre>
          </div>
          <div style={{ marginTop: '0.75rem' }}>
            <div style={{ marginBottom: '0.5rem' }}>
              <strong style={{ fontWeight: 'semibold' }}>message</strong>
              <span style={{ color: '#64748b', marginLeft: '0.5rem' }}>string</span>
            </div>
            <p style={{ fontSize: '0.9rem', color: '#64748b', marginLeft: '1rem', marginBottom: '0.5rem' }}>
              A success message.
            </p>
            <div style={{ marginBottom: '0.5rem' }}>
              <strong style={{ fontWeight: 'semibold' }}>new_balance</strong>
              <span style={{ color: '#64748b', marginLeft: '0.5rem' }}>number</span>
            </div>
            <p style={{ fontSize: '0.9rem', color: '#64748b', marginLeft: '1rem' }}>
              The user's updated balance after the recharge.
            </p>
          </div>
        </div>

        <div className="response-code" style={{ marginBottom: '1rem' }}>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 'semibold', marginBottom: '0.25rem' }}>400 Bad Request</h4>
          <p style={{ fontSize: '1rem', color: '#64748b', marginBottom: '0.5rem' }}>Invalid JSON payload</p>
          <div className="code-block" style={{ backgroundColor: '#f9f9f9', border: '1px solid #e2e8f0', borderRadius: '0.5rem', padding: '1rem', overflowX: 'auto' }}>
            <pre style={{ margin: 0, fontSize: '0.9rem', whiteSpace: 'pre-wrap' }}>
              <code style={{ display: 'block' }}>
                {`{
  "error": "Invalid JSON payload"
}`}
              </code>
            </pre>
          </div>
        </div>

        <div className="response-code">
          <h4 style={{ fontSize: '1.1rem', fontWeight: 'semibold', marginBottom: '0.25rem' }}>404 Not Found</h4>
          <p style={{ fontSize: '1rem', color: '#64748b', marginBottom: '0.5rem' }}>User not found</p>
          <div className="code-block" style={{ backgroundColor: '#f9f9f9', border: '1px solid #e2e8f0', borderRadius: '0.5rem', padding: '1rem', overflowX: 'auto' }}>
            <pre style={{ margin: 0, fontSize: '0.9rem', whiteSpace: 'pre-wrap' }}>
              <code style={{ display: 'block' }}>
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