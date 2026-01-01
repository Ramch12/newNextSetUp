const PlanSkalatonLoader = () => {
  return (
    <div className="border border-black rounded-lg shadow-sm px-2 py-4 bg-gray-200 animate-pulse mb-4">
      {/* Title */}
      <div className="h-6 w-2/3 mx-auto bg-gray-400 rounded mb-3" />

      {/* Description */}
      <div className="space-y-2 mb-4">
        <div className="h-3 w-full bg-gray-400 rounded" />
        <div className="h-3 w-5/6 bg-gray-400 rounded" />
      </div>

      {/* Price */}
      <div className="flex justify-center items-end gap-x-2 mb-3">
        <div className="h-5 w-4 bg-gray-400 rounded" />
        <div className="h-12 w-20 bg-gray-400 rounded" />
      </div>

      {/* Meta info */}
      <div className="flex justify-center gap-x-4 mb-4">
        <div className="h-3 w-16 bg-gray-400 rounded" />
        <div className="h-3 w-24 bg-gray-400 rounded" />
      </div>

      {/* Button */}
      <div className="h-10 w-full bg-gray-400 rounded mb-4" />

      {/* Features */}
      <div className="space-y-2">
        <div className="h-3 w-4/5 bg-gray-400 rounded" />
        <div className="h-3 w-3/4 bg-gray-400 rounded" />
        <div className="h-3 w-2/3 bg-gray-400 rounded" />
      </div>
    </div>
  );
};

const OrderSummarySkeleton = () => {
  return (
    <div className="w-80 rounded-xl border bg-white p-4 shadow-sm animate-pulse">
      {/* Header */}
      <div className="mb-4">
        <div className="h-3 w-24 bg-gray-300 rounded mb-2" />
        <div className="h-8 w-32 bg-gray-400 rounded" />
      </div>

      {/* Card Info */}
      <div className="border rounded-lg p-3 mb-4">
        <div className="flex items-center justify-between mb-2">
          <div className="h-6 w-16 bg-gray-400 rounded" />
          <div className="h-5 w-20 bg-gray-300 rounded-full" />
        </div>

        <div className="space-y-2">
          <div className="h-3 w-full bg-gray-300 rounded" />
          <div className="h-3 w-3/4 bg-gray-300 rounded" />
        </div>
      </div>

      {/* Order Details */}
      <div className="mb-4">
        <div className="h-4 w-32 bg-gray-400 rounded mb-3" />

        <div className="space-y-2">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className="flex justify-between">
              <div className="h-3 w-28 bg-gray-300 rounded" />
              <div className="h-3 w-16 bg-gray-300 rounded" />
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-2">
        <div className="h-10 w-full bg-gray-400 rounded" />
        <div className="h-10 w-full bg-gray-300 rounded" />
      </div>
    </div>
  );
};

export { PlanSkalatonLoader, OrderSummarySkeleton };
