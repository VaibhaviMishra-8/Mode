const NewIssueSkeleton = () => {
  return (
    <div className="space-y-6 animate-pulse">
      {/* Title input */}
      <div>
        <div className="h-4 w-20 bg-gray-200 dark:bg-dark-border-default rounded mb-2" />
        <div className="h-10 w-full bg-gray-200 dark:bg-dark-border-default rounded" />
      </div>

      {/* Description textarea */}
      <div>
        <div className="h-4 w-28 bg-gray-200 dark:bg-dark-border-default rounded mb-2" />
        <div className="h-32 w-full bg-gray-200 dark:bg-dark-border-default rounded" />
      </div>

      {/* Status + Priority grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="h-4 w-24 bg-gray-200 dark:bg-dark-border-default rounded mb-2" />
          <div className="h-10 w-full bg-gray-200 dark:bg-dark-border-default rounded" />
        </div>
        <div>
          <div className="h-4 w-20 bg-gray-200 dark:bg-dark-border-default rounded mb-2" />
          <div className="h-10 w-full bg-gray-200 dark:bg-dark-border-default rounded" />
        </div>
      </div>

      {/* Assign to */}
      <div>
        <div className="h-4 w-28 bg-gray-200 dark:bg-dark-border-default rounded mb-2" />
        <div className="h-10 w-full bg-gray-200 dark:bg-dark-border-default rounded" />
      </div>

      {/* Submit button */}
      <div className="flex justify-end">
        <div className="h-10 w-24 bg-gray-200 dark:bg-dark-border-default rounded" />
      </div>
    </div>
  )
}

export default NewIssueSkeleton
