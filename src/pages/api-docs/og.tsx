
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code } from "@/components/ui/code";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

function RechargeEndpointDoc() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>
          Recharge Account
        </CardTitle>
        <CardDescription>
          Adds the specified amount to the user's balance.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Badge variant="secondary">POST</Badge> <Code>/recharge</Code>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Request Body</h3>
          <p className="text-sm text-muted-foreground mb-2">
            Expects a JSON payload with the following parameters:
          </p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Parameter</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell><Code>user_id</Code></TableCell>
                <TableCell><Code>integer</Code></TableCell>
                <TableCell>The ID of the user to recharge.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><Code>amount</Code></TableCell>
                <TableCell><Code>float</Code></TableCell>
                <TableCell>The amount to add to the user's balance.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <p className="mt-2 text-sm text-muted-foreground">
            Example JSON Payload:
          </p>
          <Code block language="json">
            {`{
  "user_id": 123,
  "amount": 50.00
}`}
          </Code>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Success Response</h3>
          <Badge variant="outline" className="mb-2">200 OK</Badge>
          <p className="text-sm text-muted-foreground mb-2">
            Returns a JSON response upon successful recharge.
          </p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Field</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell><Code>message</Code></TableCell>
                <TableCell><Code>string</Code></TableCell>
                <TableCell>Confirmation message, e.g., "Recharge successful".</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><Code>new_balance</Code></TableCell>
                <TableCell><Code>float</Code></TableCell>
                <TableCell>The user's updated balance after the recharge.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <p className="mt-2 text-sm text-muted-foreground">
            Example Success Response:
          </p>
          <Code block language="json">
            {`{
  "message": "Recharge successful",
  "new_balance": 150.00
}`}
          </Code>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Error Responses</h3>
          <p className="text-sm text-muted-foreground mb-2">
            The API may return the following error responses:
          </p>
          <div className="space-y-4">
            <div>
              <Badge variant="destructive" className="mr-2">400 Bad Request</Badge>
              <p className="text-sm text-muted-foreground">
                Returned if the request body is not valid JSON.
              </p>
              <Code block language="json" className="mt-2">
                {`{
  "error": "Invalid JSON payload"
}`}
              </Code>
            </div>
            <div>
              <Badge variant="destructive" className="mr-2">404 Not Found</Badge>
              <p className="text-sm text-muted-foreground">
                Returned if the <Code>user_id</Code> provided does not correspond to an existing user.
              </p>
              <Code block language="json" className="mt-2">
                {`{
  "error": "User not found"
}`}
              </Code>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default RechargeEndpointDoc;