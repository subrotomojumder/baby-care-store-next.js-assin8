const LoadingPage = () => {
  return (
    <div className="h-full min-h-[60vh] flex justify-center items-center">
      <div className="relative">
        <div className="absolute top-0 left-0 animate-ping bg-sky-600 opacity-40 h-8 w-24 rounded-full"></div>
        <h3 className="text-2xl text-green-500 ">Loading...</h3>
      </div>
    </div>
  );
};

export default LoadingPage;
