```jsx
import React from 'react';

const Recharge = () => {
  return (
    <div className="api-doc">
      <h2 className="api-doc-title">/recharge</h2>
      <p className="api-doc-method post">POST</p>
      <p className="api-doc-description">Adds the specified amount to the user's balance.</p>

      <h3 className="api-doc-section-title">Request Body</h3>
      <p className="api-doc-body">Expects a JSON payload with the following fields:</p>
      <ul className="api-doc-list">
        <li className="api-doc-list-item">
          <span className="api-doc-field">user_id</span> <span className="api-doc-type">integer</span>
          <p className="api-doc-field-description">The ID of the user to recharge.</p>
        </li>
        <li className="api-doc-list-item">
          <span className="api-doc-field">amount</span> <span className="api-doc-type">float</span>
          <p className="api-doc-field-description">The amount to add to the user's balance.</p>
        </li>
      </ul>

      <h3 className="api-doc-section-title">Responses</h3>

      <div className="api-doc-response">
        <h4 className="api-doc-response-code success">200 OK</h4>
        <p className="api-doc-response-description">Successful recharge.</p>
        <pre className="api-doc-response-example">
          <code>
            {`{
  "message": "Recharge successful",
  "new_balance": 150.0
}`}
          </code>
        </pre>
      </div>

      <div className="api-doc-response">
        <h4 className="api-doc-response-code error">400 Bad Request</h4>
        <p className="api-doc-response-description">Invalid JSON payload.</p>
        <pre className="api-doc-response-example">
          <code>
            {`{
  "error": "Invalid JSON payload"
}`}
          </code>
        </pre>
      </div>

      <div className="api-doc-response">
        <h4 className="api-doc-response-code error">404 Not Found</h4>
        <p className="api-doc-response-description">User not found.</p>
        <pre className="api-doc-response-example">
          <code>
            {`{
  "error": "User not found"
}`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Recharge;
```