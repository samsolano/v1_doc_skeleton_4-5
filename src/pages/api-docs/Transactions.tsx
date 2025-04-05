```jsx
import React from 'react';

const Card = ({ className, children, ...props }) => {
  return (
    <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`} {...props}>
      {children}
    </div>
  );
};

const CardHeader = ({ className, children, ...props }) => {
  return <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props}>{children}</div>;
};

const CardTitle = ({ className, children, ...props }) => {
  return <h4 className={`text-2xl font-semibold leading-none tracking-tight ${className}`} {...props}>{children}</h4>;
};

const CardDescription = ({ className, children, ...props }) => {
  return <p className={`text-sm text-muted-foreground ${className}`} {...props}>{children}</p>;
};

const Code = ({ className, children, ...props }) => {
  return (
    <pre className={`relative rounded bg-muted px-3 py-2 font-mono text-sm shadow-sm ${className}`} {...props}>
      <code className="text-sm">{children}</code>
    </pre>
  );
};

const Badge = ({ className, variant = "default", ...props }) => {
  const baseStyles = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";
  const variantStyles = {
    default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
    secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
    destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
    outline: "border-border bg-background",
  };
  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </div>
  );
};

const Table = ({ className, children, ...props }) => {
  return <div className="relative w-full overflow-auto"><table className={`w-full caption-bottom text-sm ${className}`} {...props}>{children}</table></div>;
};

const TableHeader = ({ className, children, ...props }) => {
  return <thead className={`[&_tr]:border-b ${className}`} {...props}>{children}</thead>;
};

const TableBody = ({ className, children, ...props }) => {
  return <tbody className={`[&_tr:last-child]:border-0 ${className}`} {...props}>{children}</tbody>;
};

const TableRow = ({ className, children, ...props }) => {
  return <tr className={`border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted ${className}`} {...props}>{children}</tr>;
};

const TableHead = ({ className, children, ...props }) => {
  return <th className={`h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:not([align=left])]:text-right ${className}`} {...props}>{children}</th>;
};

const TableCell = ({ className, children, ...props }) => {
  return <td className={`p-4 align-middle [&:not([align=left])]:text-right ${className}`} {...props}>{children}</td>;
};


const Transactions = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>GET /transactions</CardTitle>
        <CardDescription>Retrieves a list of transactions, optionally filtered by user ID.</CardDescription>
      </CardHeader>
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Endpoint</h3>
          <Code className="block mt-2">/transactions</Code>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Method</h3>
          <Badge variant="default">GET</Badge>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Query Parameters</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Parameter</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Required</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell><Code className="inline-block">user_id</Code></TableCell>
                <TableCell>integer</TableCell>
                <TableCell>Filters transactions by user ID.</TableCell>
                <TableCell>Optional</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Response</h3>
          <p className="mb-2 text-muted-foreground">Returns a JSON object containing a list of transactions.</p>
          <Code className="block">
            {`{
  "transactions": [
    {
      "id": 1,
      "user_id": 101,
      "amount": 50.00,
      "date": "2024-07-28T10:00:00Z",
      // ... other transaction details
    },
    {
      "id": 2,
      "user_id": 102,
      "amount": 25.50,
      "date": "2024-07-27T15:30:00Z",
      // ... other transaction details
    },
    // ... more transactions
  ]
}`}
          </Code>
        </div>
      </div>
    </Card>
  );
};

export default Transactions;
```