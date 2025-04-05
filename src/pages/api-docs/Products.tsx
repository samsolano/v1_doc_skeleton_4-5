```jsx
import React from 'react';

const Products = () => {
  return (
    <div className="max-w-3xl mx-auto py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Products</h1>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Get Products</h2>
        <p className="mt-2 text-sm text-gray-500">Retrieves a list of all available products.</p>
      </div>

      <div className="mb-6 border rounded-md bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 rounded-t-md">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            <span className="font-semibold text-blue-500">GET</span> <span className="ml-1 text-gray-700 dark:text-gray-300">/products</span>
          </h3>
        </div>
        <div className="px-4 py-4">
          <div className="mb-3">
            <h4 className="text-md font-semibold text-gray-900 dark:text-white">Description</h4>
            <p className="mt-1 text-sm text-gray-700 dark:text-gray-400">Returns a list of all available products.</p>
          </div>

          <div>
            <h4 className="text-md font-semibold text-gray-900 dark:text-white">Response</h4>
            <div className="mt-2">
              <div className="mb-2">
                <span className="text-sm font-medium text-gray-900 dark:text-white">Status Codes:</span>
                <ul className="mt-1 list-disc list-inside text-sm text-gray-700 dark:text-gray-400">
                  <li><span className="font-semibold">200 OK</span> - Successful response. Returns a list of products.</li>
                </ul>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">Response Body:</span>
                <div className="mt-2 rounded-md bg-gray-100 dark:bg-gray-900 p-3 font-mono text-sm text-gray-800 dark:text-gray-100 overflow-x-auto">
                  <pre>
                    <code>
                      {`{
  "products": [
    {
      "id": 1,
      "name": "Product Name 1",
      "description": "Description of product 1",
      "price": 29.99
    },
    {
      "id": 2,
      "name": "Product Name 2",
      "description": "Description of product 2",
      "price": 49.99
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
      </div>
    </div>
  );
};

export default Products;
```