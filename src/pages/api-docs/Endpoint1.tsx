```jsx
const Endpoint1 = () => {
  return (
    
      
        <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
          /recharge
        </p>
        <p style={{ color: '#718096', marginBottom: '1rem' }}>POST</p>
      

      
        <p style={{ marginBottom: '0.75rem' }}>
          Adds the specified amount to the user's balance.
        </p>
      

      
        <p style={{ fontSize: '1.1rem', fontWeight: 'bold', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
          Request Body
        </p>
        <p style={{ marginBottom: '0.5rem' }}>
          Expects a JSON payload with the following structure:
        </p>
        <pre style={{ backgroundColor: '#f0f0f0', padding: '1rem', borderRadius: '0.375rem', overflowX: 'auto' }}>
          <code style={{ fontFamily: 'monospace', fontSize: '0.9rem' }}>
            {`{
  "user_id": number,
  "amount": number
}`}
          </code>
        </pre>
        
          
            <p style={{ fontWeight: 'bold' }}>user_id</p>
            
              integer
            
          
          
            <p>The ID of the user to recharge.</p>
          
        
        
          
            <p style={{ fontWeight: 'bold' }}>amount</p>
            
              float
            
          
          
            <p>The amount to add to the user's balance.</p>
          
        
      

      
        <p style={{ fontSize: '1.1rem', fontWeight: 'bold', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
          Response
        </p>

        
          <p style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
            200 OK
          </p>
          <pre style={{ backgroundColor: '#f0f0f0', padding: '1rem', borderRadius: '0.375rem', overflowX: 'auto' }}>
            <code style={{ fontFamily: 'monospace', fontSize: '0.9rem' }}>
              {`{
  "message": "Recharge successful",
  "new_balance": number
}`}
            </code>
          </pre>
          
            
              <p style={{ fontWeight: 'bold' }}>message</p>
              
                string
              
            
            
              <p>Confirmation message indicating successful recharge.</p>
            
          
          
            
              <p style={{ fontWeight: 'bold' }}>new_balance</p>
              
                number
              
            
            
              <p>The user's updated balance after the recharge.</p>
            
          
        

        
          <p style={{ fontSize: '1rem', fontWeight: 'bold', marginTop: '1rem', marginBottom: '0.5rem' }}>
            400 Bad Request
          </p>
          <pre style={{ backgroundColor: '#f0f0f0', padding: '1rem', borderRadius: '0.375rem', overflowX: 'auto' }}>
            <code style={{ fontFamily: 'monospace', fontSize: '0.9rem' }}>
              {`{
  "error": "Invalid JSON payload"
}`}
            </code>
          </pre>
          
            
              <p style={{ fontWeight: 'bold' }}>error</p>
              
                string
              
            
            
              <p>Error message indicating the request body was not valid JSON.</p>
            
          
        

        
          <p style={{ fontSize: '1rem', fontWeight: 'bold', marginTop: '1rem', marginBottom: '0.5rem' }}>
            404 Not Found
          </p>
          <pre style={{ backgroundColor: '#f0f0f0', padding: '1rem', borderRadius: '0.375rem', overflowX: 'auto' }}>
            <code style={{ fontFamily: 'monospace', fontSize: '0.9rem' }}>
              {`{
  "error": "User not found"
}`}
            </code>
          </pre>
          
            
              <p style={{ fontWeight: 'bold' }}>error</p>
              
                string
              
            
            
              <p>Error message indicating that the specified user ID was not found.</p>
            
          
        
      
    
  );
};

export default Endpoint1;
```