import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  // return (
  //   <aside className="w-64 h-[calc(100vh-4rem)] overflow-y-auto pt-4 border-r border-codium-border fixed top-16 left-0 bg-codium-dark-gray">
  //     <div className="flex flex-col h-full">
  //     </div>
  //   </aside>
  // );

  return (
    <aside className="w-64 h-[calc(100vh-4rem)] overflow-y-auto pt-4 border-r border-codium-border fixed top-16 left-0 bg-codium-dark-gray">
      <div className="flex flex-col h-full">
        <nav className="mt-4">
          <ul className="space-y-2">

                      <li>
              <Link to="/api-docs/users" className="block px-4 py-2 text-codium-foreground hover:bg-codium-border">
                /Users
              </Link>
            </li>
            <li>
              <Link to="/api-docs/users" className="block px-4 py-2 text-codium-foreground hover:bg-codium-border">
                /Users
              </Link>
            </li>
            <li>
              <Link to="/api-docs/products" className="block px-4 py-2 text-codium-foreground hover:bg-codium-border">
                /Products
              </Link>
            </li>
            <li>
              <Link to="/api-docs/transactions" className="block px-4 py-2 text-codium-foreground hover:bg-codium-border">
                /Transactions
              </Link>
            </li>
            <li>
              <Link to="/api-docs/purchase" className="block px-4 py-2 text-codium-foreground hover:bg-codium-border">
                /Purchase
              </Link>
            </li>
            <li>
              <Link to="/api-docs/recharge" className="block px-4 py-2 text-codium-foreground hover:bg-codium-border">
                /Recharge
              </Link>
            </li>
            <li>
              <Link to="/api-docs/summary" className="block px-4 py-2 text-codium-foreground hover:bg-codium-border">
                /Summary
              </Link>
            </li>
            <li>
              <Link to="/api-docs/users" className="block px-4 py-2 text-codium-foreground hover:bg-codium-border">
                /Users
              </Link>
            </li>
</ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;


// http://localhost:8080/api-docs/endpoint1