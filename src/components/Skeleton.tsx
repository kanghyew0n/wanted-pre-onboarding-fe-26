const Skeleton = () => {
  return (
    <div className="w-[300px] h-[168px] flex flex-col gap-2 bg-gray-100 rounded-xl	p-6">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-6 py-1">
          <div className="h-3 bg-gray-300 rounded mb-16"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-3 bg-gray-300 rounded col-span-2"></div>
            </div>
            <div className="h-3 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
