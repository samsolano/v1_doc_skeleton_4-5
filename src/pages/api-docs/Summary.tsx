```jsx
import React from 'react';

const Summary = () => {
  return (
    <div className="container mx-auto mt-8 p-4">
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Summary Endpoint</h2>
        <p className="text-muted-foreground">
          Retrieves a summary report providing key metrics about users and transactions.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-2xl font-bold mb-2">Endpoint</h3>
        <div className="rounded-md border bg-card text-card-foreground shadow-sm">
          <div className="p-4">
            <div className="font-bold text-lg">
              <span className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground mr-2">
                GET
              </span>
              <code className="font-mono text-sm">/summary</code>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              Retrieve a summary report.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h3 className="text-2xl font-bold mb-2">Description</h3>
        <p className="text-muted-foreground">
          This endpoint calculates and returns a summary report containing the following information:
        </p>
        <ul className="list-disc pl-5 mt-2 text-muted-foreground">
          <li>Total number of users registered in the system.</li>
          <li>Total number of transactions processed.</li>
          <li>Total revenue generated from all transactions.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-2xl font-bold mb-2">Response</h3>
        <p className="text-muted-foreground mb-2">
          The endpoint returns a JSON response with the summary report.
        </p>
        <div className="rounded-md border bg-card text-card-foreground shadow-sm">
          <div className="p-4">
            <div className="font-bold text-lg mb-2">
              <span className="mr-2">Status Code:</span>
              <code className="font-mono text-sm">200 OK</code>
            </div>
            <div className="font-bold text-lg mb-2">
              Response Body:
            </div>
            <pre className="rounded-md bg-muted text-sm p-4 font-mono">
              <code className="block">
                {`{
  "total_users": number,
  "total_transactions": number,
  "total_revenue": number
}`}
              </code>
            </pre>
            <div className="mt-2">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold">total_users</span>: The total count of users.
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold">total_transactions</span>: The total number of transactions processed.
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold">total_revenue</span>: The total revenue calculated from all transactions, rounded to two decimal places.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-bold mb-2">Example Response</h3>
        <div className="rounded-md border bg-card text-card-foreground shadow-sm">
          <div className="p-4">
            <pre className="rounded-md bg-muted text-sm p-4 font-mono">
              <code className="block">
                {`{
  "total_users": 150,
  "total_transactions": 320,
  "total_revenue": 12540.50
}`}
              </code>
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Summary;
```