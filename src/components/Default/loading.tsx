"use client"
import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="w-32 h-32 border-4 border-t-4 border-gray-200 rounded-full animate-spin" style={{ borderTopColor: 'transparent' }}></div>
    </div>
  );
};

export default Loading;