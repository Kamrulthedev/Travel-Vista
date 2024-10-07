const LoadingPage = () => {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-blue-500 border-solid"></div>
        <p className="mt-4 text-xl font-semibold text-gray-700">Loading...</p>
      </div>
    );
  };
  
  export default LoadingPage;
  
  