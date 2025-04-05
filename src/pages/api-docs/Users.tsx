```jsx
import React from 'react';

const Users = () => {
  return (
    <div className="container mx-auto max-w-3xl mt-10 p-4 dark:bg-gray-900 dark:text-white">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Users</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Retrieve a list of users.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold tracking-tight mb-2">
          GET <span className="text-blue-500 dark:text-blue-400">/users</span>
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Returns a list of all users.
        </p>

        <div className="border rounded-md bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <div className="p-4">
            <div className="font-bold text-lg mb-2">Endpoint</div>
            <div className="bg-gray-200 dark:bg-gray-700 rounded-md p-2 font-mono text-sm">
              <span className="text-green-500">GET</span> <span className="text-blue-500">/users</span>
            </div>
          </div>
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="font-bold text-lg mb-2">Request</div>
            <div className="mb-2">
              <p className="text-gray-700 dark:text-gray-300">
                No request body is needed for this endpoint.
              </p>
            </div>
             <div className="font-bold text-sm mb-1">Example Request</div>
            <div className="bg-gray-200 dark:bg-gray-700 rounded-md p-2 font-mono text-sm">
              <pre><code>
                <span className="text-white">// Using JavaScript fetch API</span><br/>
                <span className="text-yellow-500">fetch</span><span className="text-white">(</span><span className="text-green-500">'/users'</span><span className="text-white">)</span><br/>
                <span className="text-white">  .</span><span className="text-yellow-500">then</span><span className="text-white">(</span><span className="text-gray-300">response</span> <span className="text-white">=&gt;</span> <span className="text-gray-300">response</span><span className="text-white">.</span><span className="text-yellow-500">json</span><span className="text-white">())</span><br/>
                <span className="text-white">  .</span><span className="text-yellow-500">then</span><span className="text-white">(</span><span className="text-gray-300">data</span> <span className="text-white">=&gt;</span> <span className="text-white">{</span><br/>
                <span className="text-white">    </span><span className="text-yellow-500">console</span><span className="text-white">.</span><span className="text-yellow-500">log</span><span className="text-white">(</span><span className="text-gray-300">data</span><span className="text-white">);</span> <span className="text-white">// Process the user data</span><br/>
                <span className="text-white">  </span><span className="text-white">});</span>
              </code></pre>
            </div>
          </div>
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="font-bold text-lg mb-2">Response</div>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              The API returns a JSON response with a list of users.
            </p>
            <div className="font-bold text-sm mb-1">Response Body</div>
            <div className="bg-gray-200 dark:bg-gray-700 rounded-md p-2 font-mono text-sm">
              <pre><code>
                <span className="text-white">{</span><br/>
                <span className="text-white">  </span><span className="text-purple-500">"users"</span><span className="text-white">: [</span><br/>
                <span className="text-white">    </span><span className="text-white">{</span><br/>
                <span className="text-white">      </span><span className="text-purple-500">"id"</span><span className="text-white">: </span><span className="text-blue-500">1</span><span className="text-white">,</span><br/>
                <span className="text-white">      </span><span className="text-purple-500">"name"</span><span className="text-white">: </span><span className="text-green-500">"John Doe"</span><br/>
                <span className="text-white">    </span><span className="text-white">},</span><br/>
                <span className="text-white">    </span><span className="text-white">{</span><br/>
                <span className="text-white">      </span><span className="text-purple-500">"id"</span><span className="text-white">: </span><span className="text-blue-500">2</span><span className="text-white">,</span><br/>
                <span className="text-white">      </span><span className="text-purple-500">"name"</span><span className="text-white">: </span><span className="text-green-500">"Jane Smith"</span><br/>
                <span className="text-white">    </span><span className="text-white">},</span><br/>
                <span className="text-white">    </span><span className="text-gray-500">... more users</span><br/>
                <span className="text-white">  ]</span><br/>
                <span className="text-white">}</span>
              </code></pre>
            </div>
            <div className="mt-4">
              <div className="font-bold text-sm mb-1">Response Status Codes</div>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                <li><span className="font-bold">200 OK</span>: Successful retrieval of users.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
```