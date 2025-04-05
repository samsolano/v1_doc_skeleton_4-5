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
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;


// http://localhost:8080/api-docs/endpoint1