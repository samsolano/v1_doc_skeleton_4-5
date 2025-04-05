import React from 'react'

const Users = () => {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.6', color: '#18181b' }}>
      <div style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '0.5rem' }}>Get Users</h2>
        <p style={{ fontSize: '0.875rem', color: '#71717a' }}>Fetches a list of all users.</p>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>Endpoint</h3>
        <p style={{ fontSize: '0.875rem', fontFamily: 'Menlo, monospace', backgroundColor: '#f4f4f5', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', display: 'inline-block' }}>
          GET <span style={{ fontWeight: '500', color: '#0070f3' }}>/users</span>
        </p>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>Response</h3>
        <div>
          <h4 style={{ fontSize: '1rem', fontWeight: '500', marginBottom: '0.25rem' }}>Status Codes</h4>
          <ul style={{ fontSize: '0.875rem', listStyleType: 'disc', marginLeft: '1.25rem', marginBottom: '0.75rem' }}>
            <li>
              <span style={{ fontWeight: '600' }}>200 OK</span> – Successful response.
            </li>
          </ul>
        </div>
        <div>
          <h4 style={{ fontSize: '1rem', fontWeight: '500', marginBottom: '0.25rem' }}>Response Body</h4>
          <pre style={{ backgroundColor: '#f4f4f5', padding: '0.75rem', borderRadius: '0.25rem', overflowX: 'auto', fontSize: '0.875rem' }}>
            <code style={{ fontFamily: 'Menlo, monospace' }}>
              {`{
  "users": [
    {
      "id": 1,
      "name": "John Doe"
    },
    {
      "id": 2,
      "name": "Jane Doe"
    }
  ]
}`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  )
}

export default Users