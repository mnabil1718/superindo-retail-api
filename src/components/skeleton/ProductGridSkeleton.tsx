import React from "react";

const ProductGridSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <div className="col-span-1">
        <div className="bg-gray-100 aspect-square rounded-md"></div>
      </div>
      <div className="col-span-1">
        <div className="bg-gray-100 aspect-square rounded-md"></div>
      </div>
      <div className="col-span-1">
        <div className="bg-gray-100 aspect-square rounded-md"></div>
      </div>
    </div>
  );
};

export default ProductGridSkeleton;
