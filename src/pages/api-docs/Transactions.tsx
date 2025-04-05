```jsx
import React from 'react';

const Transactions = () => {
  return (
    <div className="container mx-auto mt-10 p-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Transactions</h1>
        <p className="text-muted-foreground mt-2">
          Retrieves a list of transactions, with optional filtering by user ID.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold tracking-tight mb-2">Endpoint</h2>
        <div className="rounded-md border bg-card text-card-foreground shadow-sm">
          <div className="p-4">
            <div className="font-mono text-sm">
              <p className="mb-1">
                <span className="font-semibold">Method:</span> GET
              </p>
              <p>
                <span className="font-semibold">Path:</span> <code className="bg-muted px-1 py-0.5 rounded font-mono text-sm">/transactions</code>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold tracking-tight mb-2">Description</h2>
        <div className="rounded-md border bg-card text-card-foreground shadow-sm">
          <div className="p-4">
            <p className="text-sm">
              This endpoint fetches a list of transactions. It supports optional filtering to retrieve transactions associated with a specific user.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold tracking-tight mb-2">Query Parameters</h2>
        <div className="rounded-md border bg-card text-card-foreground shadow-sm">
          <div className="p-4">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">user_id <span className="text-muted-foreground text-sm">(optional)</span></h3>
                <p className="text-sm text-muted-foreground">
                  Filters the transactions to only include those associated with the provided user ID.
                </p>
                <div className="font-mono text-sm">
                  <p><span className="font-semibold">Type:</span> integer</p>
                  <p><span className="font-semibold">Example:</span> <code className="bg-muted px-1 py-0.5 rounded font-mono text-sm">/transactions?user_id=123</code></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold tracking-tight mb-2">Response</h2>
        <div className="rounded-md border bg-card text-card-foreground shadow-sm">
          <div className="p-4 space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Status Code</h3>
              <p className="text-sm">
                <code className="bg-green-100 text-green-800 px-2 py-1 rounded font-mono text-sm">200 OK</code>
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Response Body</h3>
              <p className="text-sm">
                The response body is a JSON object containing a list of transactions.
              </p>
              <pre className="mt-2 rounded-md border bg-muted text-sm font-mono p-4">
                <code className="block">
                  {`{
  "transactions": [
    {
      "id": 1,
      "user_id": 123,
      "amount": 100.00,
      "timestamp": "2024-01-01T12:00:00Z",
      // ... other transaction details
    },
    {
      "id": 2,
      "user_id": 456,
      "amount": 50.00,
      "timestamp": "2024-01-02T14:30:00Z",
      // ... other transaction details
    },
    // ... more transactions
  ]
}`}
                </code>
              </pre>
              <p className="text-sm text-muted-foreground">
                The structure of each transaction object will depend on your application's data model.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold tracking-tight mb-2">Example Request</h2>
        <div className="rounded-md border bg-card text-card-foreground shadow-sm">
          <div className="p-4 space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Get all transactions</h3>
              <p className="text-sm">
                To retrieve all transactions without filtering, send a GET request to the base endpoint.
              </p>
              <pre className="mt-2 rounded-md border bg-muted text-sm font-mono p-4">
                <code className="block">
                  {`GET /transactions
Headers:
  // No specific headers required`}
                </code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Get transactions for a specific user</h3>
              <p className="text-sm">
                To retrieve transactions for a user with ID 123, include the <code className="font-mono text-sm">user_id</code> query parameter.
              </p>
              <pre className="mt-2 rounded-md border bg-muted text-sm font-mono p-4">
                <code className="block">
                  {`GET /transactions?user_id=123
Headers:
  // No specific headers required`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>


      <div className="mb-4">
        <h2 className="text-2xl font-bold tracking-tight mb-2">Example Response</h2>
        <div className="rounded-md border bg-card text-card-foreground shadow-sm">
          <div className="p-4 space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Successful Response (200 OK)</h3>
              <p className="text-sm">
                Example response when transactions are successfully retrieved.
              </p>
              <pre className="mt-2 rounded-md border bg-muted text-sm font-mono p-4">
                <code className="block">
                  {`{
  "transactions": [
    {
      "id": 1,
      "user_id": 123,
      "amount": 100.00,
      "timestamp": "2024-01-01T12:00:00Z"
    },
    {
      "id": 2,
      "user_id": 123,
      "amount": 50.00,
      "timestamp": "2024-01-02T14:30:00Z"
    }
    // ... potentially more transactions, filtered by user_id if provided
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
};

export default Transactions;
```