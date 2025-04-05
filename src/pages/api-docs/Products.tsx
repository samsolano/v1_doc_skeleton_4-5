import React from 'react';

const Products = () => {
  return (
    <div>
      <section className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Products</h1>
        <p className="text-muted-foreground">
          Fetches and displays a list of products from the API endpoint.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight mb-4">API Endpoint</h2>
        <div className="rounded-md border bg-muted p-4">
          <div className="font-semibold text-sm">Method</div>
          <div className="text-base font-medium">GET</div>
          <div className="mt-2 font-semibold text-sm">Endpoint</div>
          <div className="text-base font-medium"><code className="bg-zinc-100 rounded px-1 py-0.5 font-mono text-sm">/products</code></div>
          <div className="mt-2 font-semibold text-sm">Description</div>
          <div className="text-base font-medium">Returns a list of all available products.</div>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight mb-4">Response</h2>
        <div className="rounded-md border bg-muted p-4">
          <div className="font-semibold text-sm">Status Code</div>
          <div className="text-base font-medium">200 OK</div>
          <div className="mt-2 font-semibold text-sm">Content Type</div>
          <div className="text-base font-medium"><code>application/json</code></div>
          <div className="mt-2 font-semibold text-sm">Body</div>
          <pre className="mt-2 rounded-md bg-zinc-100 p-2 text-sm font-mono overflow-x-auto">
            <code>
              {`{
  "products": [
    {
      "id": 1,
      "name": "Product A",
      "description": "Description of Product A",
      "price": 19.99
    },
    {
      "id": 2,
      "name": "Product B",
      "description": "Description of Product B",
      "price": 29.99
    },
    ...
  ]
}`}
            </code>
          </pre>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight mb-4">Usage</h2>
        <div className="rounded-md border bg-muted p-4">
          <div className="font-semibold text-sm">React Component</div>
          <pre className="mt-2 rounded-md bg-zinc-100 p-2 text-sm font-mono overflow-x-auto">
            <code>
              {`import Products from './Products';

const App = () => {
  return (
    <div>
      <h1>Product List</h1>
      <Products />
    </div>
  );
};

export default App;
`}
            </code>
          </pre>
          <div className="mt-4 text-sm text-muted-foreground">
            Note: This <code>Products</code> component is for documentation purposes and does not include actual data fetching logic. You would typically use <code>fetch</code> or a library like <code>axios</code> to retrieve data from the <code>/products</code> endpoint and update the component's state to display the products.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;