import React from "react";

const BlogSkletonLoader = () => {
  return (
      <div>
        <div className="flex items-center gap-4 w-96 mb-5 animate-pulse">
          <div className="w-10 h-10 rounded-full bg-gray-300" />
          <div>
            <div className="h-4 w-32 bg-gray-300 rounded mb-2" />
            <div className="h-3 w-20 bg-gray-200 rounded" />
          </div>
        </div>

        <div className="sm:w-[300px] md:w-[400px] lg:w-[700px] xl:w-[800px] bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="bg-gray-300 w-full h-[300px] rounded-t-lg animate-pulse" />
          <div className="p-4 space-y-3 animate-pulse">
            <div className="h-4 bg-gray-300 rounded w-3/4" />
            <div className="h-4 bg-gray-200 rounded w-1/2" />
            <div className="h-4 bg-gray-200 rounded w-2/3" />
          </div>
        </div>

        <div className="mt-5 w-[400px] animate-pulse">
          <div className="h-10 bg-gray-200 rounded-lg mb-4" />
        </div>

        <div className="space-y-4 mt-4">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-3 animate-pulse">
              <div className="w-9 h-9 rounded-full bg-gray-300" />
              <div className="bg-gray-200 rounded-xl px-4 py-3 w-[350px] space-y-2">
                <div className="h-3 bg-gray-300 rounded w-1/3" />
                <div className="h-3 bg-gray-300 rounded w-3/4" />
                <div className="h-2 bg-gray-200 rounded w-1/4" />
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default BlogSkletonLoader;
