import React, { useState, useEffect } from 'react';

const Summary = () => {
  const [summaryData, setSummaryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('/summary');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setSummaryData(json);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading summary data...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!summaryData) {
    return null;
  }

  return (
    <div className="container">
      <section className="api-section">
        <h2 className="api-heading">/summary</h2>
        <p className="api-description">
          Provides a summary report with key metrics.
        </p>
      </section>

      <section className="request-section">
        <h3 className="section-heading">Request</h3>
        <p>
          <code className="api-method">GET</code>
          <code className="api-path">/summary</code>
        </p>
      </section>

      <section className="response-section">
        <h3 className="section-heading">Response</h3>
        <p>
          <code className="api-code">200 OK</code>
        </p>
        <p className="response-description">
          On success, the API returns a JSON response with the following structure:
        </p>
        <pre className="response-body">
          <code className="language-json">
            {JSON.stringify(
              {
                total_users: summaryData.total_users,
                total_transactions: summaryData.total_transactions,
                total_revenue: summaryData.total_revenue,
              },
              null,
              2
            )}
          </code>
        </pre>
        <div className="response-fields">
          <h4 className="fields-heading">Fields</h4>
          <ul className="fields-list">
            <li className="field-item">
              <code className="field-name">total_users</code>
              <p className="field-description">Total number of users.</p>
            </li>
            <li className="field-item">
              <code className="field-name">total_transactions</code>
              <p className="field-description">Total number of transactions.</p>
            </li>
            <li className="field-item">
              <code className="field-name">total_revenue</code>
              <p className="field-description">Total revenue from transactions.</p>
            </li>
          </ul>
        </div>
      </section>

      <style jsx>{`
        .container {
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          color: #0f172a;
        }

        .api-section {
          margin-bottom: 2rem;
        }

        .api-heading {
          font-size: 1.875rem;
          line-height: 2.25rem;
          font-weight: 700;
          letter-spacing: -0.025em;
          color: #0f172a;
          margin-bottom: 0.5rem;
        }

        .api-description {
          color: #475569;
          line-height: 1.5rem;
        }

        .section-heading {
          font-size: 1.25rem;
          line-height: 1.75rem;
          font-weight: 600;
          margin-bottom: 1rem;
          margin-top: 2rem;
        }

        .api-method {
          padding: 0.25rem 0.5rem;
          font-size: 0.875rem;
          line-height: 1.25rem;
          font-weight: 600;
          border-radius: 0.25rem;
          background-color: #f0f0f0;
          color: #0f172a;
          margin-right: 0.5rem;
        }

        .api-path {
          padding: 0.25rem 0.5rem;
          font-size: 0.875rem;
          line-height: 1.25rem;
          font-weight: 500;
          border-radius: 0.25rem;
          background-color: #e5e7eb;
          color: #0f172a;
        }

        .api-code {
          padding: 0.25rem 0.5rem;
          font-size: 0.875rem;
          line-height: 1.25rem;
          font-weight: 600;
          border-radius: 0.25rem;
          background-color: #f0f0f0;
          color: #0f172a;
          margin-right: 0.5rem;
        }


        .response-description {
          color: #475569;
          line-height: 1.5rem;
          margin-bottom: 1rem;
        }

        .response-body {
          background-color: #f7f7f7;
          border-radius: 0.375rem;
          padding: 1rem;
          overflow-x: auto;
          margin-bottom: 1rem;
        }

        .language-json {
          font-family: monospace;
          font-size: 0.875rem;
          line-height: 1.4rem;
          color: #0f172a;
          white-space: pre-wrap;
        }

        .response-fields {
          margin-top: 1rem;
        }

        .fields-heading {
          font-size: 1rem;
          line-height: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .fields-list {
          list-style: none;
          padding: 0;
        }

        .field-item {
          margin-bottom: 0.75rem;
        }

        .field-name {
          font-size: 0.875rem;
          line-height: 1.25rem;
          font-weight: 600;
          color: #0f172a;
          margin-right: 0.5rem;
        }

        .field-description {
          color: #475569;
          line-height: 1.5rem;
          display: inline-block;
        }
      `}</style>
    </div>
  );
};

export default Summary;