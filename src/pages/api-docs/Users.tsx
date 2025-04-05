```jsx
function Users() {
  return (
    <div style={{ fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"', lineHeight: '1.5', color: '#0f172a' }}>
      <div style={{ padding: '2rem' }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
            <span style={{ color: '#7c3aed' }}>GET</span> /users
          </h2>
          <p style={{ color: '#4b5563' }}>Returns a list of all users.</p>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'semibold', marginBottom: '0.5rem' }}>Endpoint</h3>
          <p style={{ backgroundColor: '#f3f4f6', padding: '0.5rem 0.75rem', borderRadius: '0.375rem', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace', fontSize: '0.875rem' }}>
            /users
          </p>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'semibold', marginBottom: '0.5rem' }}>Method</h3>
          <p style={{ display: 'inline-block', padding: '0.25rem 0.5rem', borderRadius: '0.375rem', backgroundColor: '#e0e7ff', color: '#3730a3', fontWeight: 'semibold', fontSize: '0.875rem' }}>
            GET
          </p>
        </div>

        <div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'semibold', marginBottom: '0.5rem' }}>Response</h3>
          <div style={{ backgroundColor: '#f9fafb', borderRadius: '0.375rem', border: '1px solid #e5e7eb', padding: '1rem' }}>
            <div style={{ marginBottom: '0.75rem' }}>
              <h4 style={{ fontWeight: 'semibold', marginBottom: '0.25rem' }}>Status Code</h4>
              <p style={{ color: '#374151', fontSize: '0.875rem' }}>
                <span style={{ fontWeight: 'bold' }}>200 OK</span>
              </p>
            </div>
            <div>
              <h4 style={{ fontWeight: 'semibold', marginBottom: '0.25rem' }}>Response Body</h4>
              <pre style={{ backgroundColor: '#f3f4f6', padding: '0.75rem', borderRadius: '0.375rem', overflowX: 'auto', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace', fontSize: '0.875rem', color: '#1e293b' }}>
                <code >
                  {`{
  "users": [
    {
      "id": 1,
      "name": "John Doe"
    },
    {
      "id": 2,
      "name": "Jane Smith"
    }
  ]
}`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
```