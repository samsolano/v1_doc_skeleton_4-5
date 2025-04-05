```jsx
const Products = () => {
  const responseExample = {
    products: [
      {
        id: 1,
        name: "Product 1",
        description: "This is the first product.",
        price: 29.99,
      },
      {
        id: 2,
        name: "Product 2",
        description: "This is the second product.",
        price: 49.99,
      },
    ],
  };

  return (
    <div style={{ fontFamily: 'sans-serif', color: '#333' }}>
      <h2 style={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '1rem', color: '#111' }}>
        Products
      </h2>
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'inline-block', padding: '0.25rem 0.5rem', backgroundColor: '#f0f0f0', borderRadius: '0.25rem', marginRight: '0.5rem', fontSize: '0.875rem' }}>
          <span style={{ fontWeight: 'bold', color: '#555' }}>GET</span>
        </div>
        <code style={{ backgroundColor: '#f8f8f8', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', fontSize: '0.875rem' }}>/products</code>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <h3 style={{ fontWeight: 'bold', fontSize: '1.125rem', marginBottom: '0.5rem', color: '#222' }}>Description</h3>
        <p style={{ fontSize: '0.875rem', lineHeight: '1.5' }}>
          Returns a list of all available products.
        </p>
      </div>

      <div>
        <h3 style={{ fontWeight: 'bold', fontSize: '1.125rem', marginBottom: '0.5rem', color: '#222' }}>Response</h3>
        <div style={{ backgroundColor: '#f8f8f8', borderRadius: '0.5rem', padding: '1rem', fontSize: '0.875rem' }}>
          <div style={{ marginBottom: '0.5rem' }}>
            <span style={{ fontWeight: 'bold', color: '#222' }}>Status Codes:</span>
            <ul style={{ listStyleType: 'none', paddingLeft: '1rem', margin: '0.25rem 0' }}>
              <li>
                <code style={{ backgroundColor: '#e0e0e0', padding: '0.2rem 0.4rem', borderRadius: '0.25rem' }}>200 OK</code> - Successful response
              </li>
            </ul>
          </div>
          <div>
            <span style={{ fontWeight: 'bold', color: '#222' }}>Response Body:</span>
            <pre style={{
              backgroundColor: '#f0f0f0',
              padding: '0.75rem',
              borderRadius: '0.25rem',
              overflowX: 'auto',
              marginTop: '0.5rem',
              fontSize: '0.8rem',
              fontFamily: 'monospace',
              color: '#444'
            }}>
              <code>{JSON.stringify(responseExample, null, 2)}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
```