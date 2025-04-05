import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const APISidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-64 h-[calc(100vh-4rem)] overflow-y-auto overflow-x-hidden pt-4 border-r border-codium-border fixed top-16 left-0 bg-codium-dark-gray 
      scrollbar-thin scrollbar-track-devscribe-dark-gray scrollbar-thumb-devscribe-hover-bg/80 hover:scrollbar-thumb-devscribe-hover-bg/90"
    >
      <div className="flex flex-col h-full">
      </div>
    </aside>
  );
};

export default APISidebar;
