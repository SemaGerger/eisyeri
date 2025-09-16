import React from 'react';

const StatusMessage = ({ 
  loading = false, 
  error = null, 
  data = null, 
  emptyMessage = "" 
}) => {
  if (loading) {
    return <p className="text-gray-500 text-lg animate-bounce text-center">Yükleniyor...</p>;
  }

  if (error) {
    return <p className="text-red-500 text-lg text-center">{error}</p>;
  }

  if (!data) {
    return <p className="text-gray-400 text-lg text-center animate-bounce">{emptyMessage}</p>;
  }

  return null;
};

export default StatusMessage;