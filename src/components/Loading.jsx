import React from 'react';

const Loading = () => {
  return (
    <div className='flex items-center justify-center h-screen w-screen '>
      <div className="w-10 h-10 border-4 border-t-blue-600 border-slate-300 rounded-full animate-spin self-center" />
    </div>
  );
}

export default Loading;
