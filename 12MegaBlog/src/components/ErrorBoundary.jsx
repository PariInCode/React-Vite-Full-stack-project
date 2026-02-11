import React from 'react';

function ErrorBoundary() {
  return (
    <div className="text-center">
      <h1>Something went wrong!</h1>
      <p>Please try refreshing the page.</p>
    </div>
  );
}

export default ErrorBoundary;