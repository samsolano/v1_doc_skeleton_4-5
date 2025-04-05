```jsx
import React from 'react';

const Recharge = () => {
  return (
    <div className="font-sans text-gray-900">
      <h2 className="scroll-m-20 pb-2 text-3xl font-bold tracking-tight transition-colors first:mt-0">
        Recharge Account
      </h2>
      <div className="mb-4">
        <div className="inline-flex items-center rounded-md bg-green-500 px-2.5 py-0.5 text-sm font-semibold text-white mr-2">
          POST
        </div>
        <div className="inline-flex items-center rounded-md bg-gray-100 px-2.5 py-0.5 text-sm font-mono text-gray-600">
          /recharge
        </div>
      </div>
      <div className="mb-6 text-gray-600">
        <p>Adds the specified amount to the user's balance.</p>
      </div>

      <div className="mb-8">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Request Body</h3>
        <p className="mb-4 text-gray-600">Expects a JSON payload with the following fields:</p>
        <ul className="list-disc pl-6 text-gray-600">
          <li className="mb-2">
            <code className="font-mono rounded-md bg-gray-100 px-2 py-1 text-sm font-semibold">user_id</code>{' '}
            <span className="text-gray-500">(integer, required)</span> - The ID of the user to recharge.
          </li>
          <li>
            <code className="font-mono rounded-md bg-gray-100 px-2 py-1 text-sm font-semibold">amount</code>{' '}
            <span className="text-gray-500">(number, optional, default: 0)</span> - The amount to add to the user's balance.
          </li>
        </ul>
        <div className="mt-4">
          <p className="mb-2 font-semibold text-gray-600">Example Request:</p>
          <pre className="rounded-md bg-gray-100 p-4 font-mono text-sm text-gray-800 overflow-x-auto">
            <code>{`{
  "user_id": 123,
  "amount": 50.00
}`}</code>
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Responses</h3>

        <div className="mb-6">
          <h4 className="mb-2 text-lg font-semibold">
            <div className="inline-flex items-center rounded-md bg-green-500 px-2.5 py-0.5 text-xs font-semibold text-white mr-2">
              200 OK
            </div>
            Success
          </h4>
          <p className="mb-2 text-gray-600">Successful recharge.</p>
          <p className="mb-2 text-gray-600">Response body:</p>
          <pre className="rounded-md bg-gray-100 p-4 font-mono text-sm text-gray-800 overflow-x-auto">
            <code>{`{
  "message": "Recharge successful",
  "new_balance": 150.00
}`}</code>
          </pre>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-semibold">Error Responses</h4>

          <div className="mb-4">
            <h5 className="mb-1 text-base font-semibold">
              <div className="inline-flex items-center rounded-md bg-red-500 px-2.5 py-0.5 text-xs font-semibold text-white mr-2">
                400 Bad Request
              </div>
              Invalid JSON Payload
            </h5>
            <pre className="rounded-md bg-gray-100 p-2 font-mono text-sm text-gray-800 overflow-x-auto">
              <code>{`{
  "error": "Invalid JSON payload"
}`}</code>
            </pre>
          </div>

          <div>
            <h5 className="mb-1 text-base font-semibold">
              <div className="inline-flex items-center rounded-md bg-red-500 px-2.5 py-0.5 text-xs font-semibold text-white mr-2">
                404 Not Found
              </div>
              User Not Found
            </h5>
            <pre className="rounded-md bg-gray-100 p-2 font-mono text-sm text-gray-800 overflow-x-auto">
              <code>{`{
  "error": "User not found"
}`}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recharge;
```