import React from 'react';
import PageHeading from '../components/ui/PageHeading';
import TableOfContents from '../components/ui/TableOfContents';

const Documentation = () => {
  const tocItems = [
    { id: 'section-1', title: 'Section 1' },
    { id: 'section-2', title: 'Section 2' },
    { id: 'section-3', title: 'Section 3' },
    { id: 'section-4', title: 'Section 4' },
    { id: 'section-5', title: 'Section 5' },
  ];

  return (
    <div className="flex">
      <div className="flex-1 px-12 py-10 max-w-4xl">
        <PageHeading 
          subtitle="Page Subtitle" 
          title="Main Page Title"
          description="Brief description of the page content and its purpose."
        />
        
        <section id="section-1" className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Section 1</h2>
          <p className="text-devscribe-text-secondary mb-8">
            Main introductory paragraph that provides an overview of this section's content and purpose.
          </p>
        </section>
        
        <section id="section-2" className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Section 2</h2>
          <p className="text-devscribe-text-secondary mb-8">
            Secondary section content with relevant information and details about this topic.
          </p>
        </section>
        
        <section id="section-3" className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Section 3</h2>
          <p className="text-devscribe-text-secondary mb-4">
            Overview text for the options below:
          </p>
          
          <div className="space-y-6 mb-8">
            <div className="bg-devscribe-card-bg border border-devscribe-border p-6 rounded-xl">
              <h3 className="text-lg font-medium mb-2">Option 1</h3>
              <p className="text-devscribe-text-secondary text-sm mb-3">
                Description of the first option and its benefits.
              </p>
              <a href="/link-1" className="text-white text-sm hover:underline inline-flex items-center gap-1">
                Action Link 1
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
            
            <div className="bg-devscribe-card-bg border border-devscribe-border p-6 rounded-xl">
              <h3 className="text-lg font-medium mb-2">Option 2</h3>
              <p className="text-devscribe-text-secondary text-sm mb-3">
                Description of the second option and its features.
              </p>
              <a href="/link-2" className="text-white text-sm hover:underline inline-flex items-center gap-1">
                Action Link 2
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </section>
        
        <section id="section-4" className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Section 4</h2>
          <p className="text-devscribe-text-secondary mb-4">
            Introduction to the configuration options:
          </p>
          
          <div className="bg-devscribe-card-bg border border-devscribe-border p-6 rounded-xl mb-8">
            <h3 className="text-lg font-medium mb-2">Setup</h3>
            <p className="text-devscribe-text-secondary text-sm">
              Description of the setup process and requirements.
            </p>
          </div>
        </section>
        
        <section id="section-5" className="mt-12 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Section 5</h2>
          <p className="text-devscribe-text-secondary mb-6">
            Overview of the available features and capabilities:
          </p>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4L4 8L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 8L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 12V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h4 className="font-medium mb-1">Feature 1</h4>
                <p className="text-devscribe-text-secondary text-sm">
                  Description of the first feature and its functionality.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h4 className="font-medium mb-1">Feature 2</h4>
                <p className="text-devscribe-text-secondary text-sm">
                  Description of the second feature and its capabilities.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 6H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h4 className="font-medium mb-1">Feature 3</h4>
                <p className="text-devscribe-text-secondary text-sm">
                  Description of the third feature and its benefits.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <div className="w-64 px-6 py-10">
        <TableOfContents items={tocItems} />
      </div>
    </div>
  );
};

export default Documentation;
