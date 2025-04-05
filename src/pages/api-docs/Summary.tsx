```jsx
const Summary = () => {
  return (
    <div className="container">
      <section className="api-section">
        <h2 className="api-heading">
          <code className="api-method">GET</code> <code className="api-endpoint">/summary</code>
        </h2>
        <p className="api-description">
          Provides a summary report that includes:
        </p>
        <ul className="api-description-list">
          <li>Total number of users</li>
          <li>Total number of transactions</li>
          <li>Total revenue from transactions</li>
        </ul>
      </section>

      <section className="api-section">
        <h3 className="section-heading">Request</h3>
        <p>
          <code className="api-method">GET</code> requests to <code className="api-endpoint">/summary</code> do not require a request body.
        </p>
      </section>

      <section className="api-section">
        <h3 className="section-heading">Response</h3>
        <p>
          Returns a JSON response with the summary report.
        </p>

        <h4 className="subsection-heading">Status Code</h4>
        <p>
          <code className="status-code">200 OK</code>
        </p>

        <h4 className="subsection-heading">Response Body</h4>
        <pre className="code-block">
          <code className="language-json">
            {`{
  "total_users": number,
  "total_transactions": number,
  "total_revenue": number
}`}
          </code>
        </pre>

        <h4 className="subsection-heading">Response Fields</h4>
        <div className="response-fields">
          <div className="response-field">
            <span className="field-name"><code>total_users</code></span>
            <span className="field-type">number</span>
            <p className="field-description">The total number of users.</p>
          </div>
          <div className="response-field">
            <span className="field-name"><code>total_transactions</code></span>
            <span className="field-type">number</span>
            <p className="field-description">The total number of transactions.</p>
          </div>
          <div className="response-field">
            <span className="field-name"><code>total_revenue</code></span>
            <span className="field-type">number</span>
            <p className="field-description">The total revenue from all transactions, rounded to two decimal places.</p>
          </div>
        </div>

        <h4 className="subsection-heading">Example Response</h4>
        <pre className="code-block">
          <code className="language-json">
            {`{
  "total_users": 150,
  "total_transactions": 320,
  "total_revenue": 15789.50
}`}
          </code>
        </pre>
      </section>
    </div>
  );
};

export default Summary;


const styles = `
.container {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.6;
  color: #111827; /* Gray-800 from Tailwind */
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
}

.api-section {
  margin-bottom: 2rem;
}

.api-heading {
  font-size: 2rem;
  font-weight: 700; /* Bold */
  margin-bottom: 0.5rem;
}

.api-method {
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem; /* Rounded-lg */
  font-size: 0.875rem; /* Text-sm */
  font-weight: 600; /* Semi-bold */
  letter-spacing: 0.025em; /* Tracking-tight */
  text-transform: uppercase;
  background-color: #F0F0F0; /* Gray-200 equivalent */
  color: #4B5563; /* Gray-500 from Tailwind */
  margin-right: 0.5rem;
}

.api-endpoint {
  font-size: 1.5rem;
  font-weight: 500; /* Medium */
  color: #1F2937; /* Gray-700 from Tailwind */
}


.api-description {
  color: #4B5563; /* Gray-500 from Tailwind */
  margin-bottom: 1rem;
}

.api-description-list {
  list-style-type: disc;
  margin-left: 1.5rem;
  color: #4B5563; /* Gray-500 from Tailwind */
}


.section-heading {
  font-size: 1.5rem;
  font-weight: 600; /* Semi-bold */
  margin-bottom: 1rem;
  color: #1F2937; /* Gray-700 from Tailwind */
}

.subsection-heading {
  font-size: 1.125rem; /* Text-lg */
  font-weight: 500; /* Medium */
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  color: #374151; /* Gray-600 from Tailwind */
}

.status-code {
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem; /* Rounded-lg */
  font-size: 0.875rem; /* Text-sm */
  font-weight: 600; /* Semi-bold */
  background-color: #ECFDF5; /* Green-50 equivalent */
  color: #065F46; /* Green-700 equivalent */
}

.code-block {
  background-color: #F9FAFB; /* Gray-50 from Tailwind */
  border-radius: 0.375rem; /* Rounded-lg */
  padding: 1rem;
  overflow-x: auto;
  font-size: 0.875rem; /* Text-sm */
  tab-size: 2; /* For proper indentation in code blocks */
}

.language-json {
  color: #059669; /* Tailwind green-600 for JSON keywords/values - adjust as needed for ShadCN style */
  font-family: monospace; /* Monospace font for code */
}


.response-fields {
  display: flex;
  flex-direction: column;
  gap: 0.75rem; /* Space-y-3 equivalent */
  margin-top: 1rem;
}

.response-field {
  display: grid;
  grid-template-columns: 150px 80px 1fr; /* Adjust widths as needed */
  gap: 1rem;
  align-items: start;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #E5E7EB; /* Gray-200 from Tailwind */
}

.response-field:last-child {
  border-bottom: none;
}


.field-name {
  font-weight: 600; /* Semi-bold */
  color: #1F2937; /* Gray-700 from Tailwind */
  font-family: monospace;
}

.field-type {
  color: #6B7280; /* Gray-500 from Tailwind */
  font-style: italic;
}

.field-description {
  color: #4B5563; /* Gray-500 from Tailwind */
  margin: 0; /* Reset default paragraph margins */
}

`;

const styleSheet = document.createElement("style")
styleSheet.type = "text/css"
styleSheet.innerText = styles
document.head.appendChild(styleSheet)
`