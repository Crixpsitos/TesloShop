

export const SkeletonProductsInCart = () => {
  return (
    <div>
        {[1, 2, 3].map((item) => (
            <div
                key={item}
                className="animate-pulse flex items-center space-x-4 mb-4"
            >
                <div className="rounded bg-gray-300 h-16 w-16" />
                <div className="flex-1 space-y-2 py-1">
                    <div className="h-4 bg-gray-300 rounded w-3/4" />
                    <div className="h-4 bg-gray-300 rounded w-1/2" />
                </div>
            </div>
        ))}
    </div>
  )
}
