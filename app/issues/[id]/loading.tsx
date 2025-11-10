const IssuePageLoading = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 animate-pulse">
      {/* Back link */}
      <div className="h-4 w-32 bg-gray-200 dark:bg-dark-border-default rounded mb-6" />

      {/* Title + Buttons */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div className="h-8 w-64 bg-gray-200 dark:bg-dark-border-default rounded" />
        <div className="flex items-center space-x-2">
          <div className="h-8 w-20 bg-gray-200 dark:bg-dark-border-default rounded" />
          <div className="h-8 w-20 bg-gray-200 dark:bg-dark-border-default rounded" />
        </div>
      </div>

      {/* Top card (badges + description) */}
      <div className="bg-white dark:bg-dark-elevated border border-gray-200 dark:border-dark-border-default rounded-lg p-6 mb-8">
        <div className="flex flex-wrap gap-3 mb-6">
          <div className="h-6 w-20 bg-gray-200 dark:bg-dark-border-default rounded" />
          <div className="h-6 w-20 bg-gray-200 dark:bg-dark-border-default rounded" />
          <div className="h-4 w-28 bg-gray-200 dark:bg-dark-border-default rounded" />
          <div className="h-4 w-28 bg-gray-200 dark:bg-dark-border-default rounded" />
        </div>

        {/* Description skeleton */}
        <div className="space-y-3">
          <div className="h-4 w-full bg-gray-200 dark:bg-dark-border-default rounded" />
          <div className="h-4 w-5/6 bg-gray-200 dark:bg-dark-border-default rounded" />
          <div className="h-4 w-4/6 bg-gray-200 dark:bg-dark-border-default rounded" />
        </div>
      </div>

      {/* Details card */}
      <div className="bg-white dark:bg-dark-elevated border border-gray-200 dark:border-dark-border-default rounded-lg p-6">
        <div className="h-6 w-24 bg-gray-200 dark:bg-dark-border-default rounded mb-4" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="space-y-2">
              <div className="h-4 w-24 bg-gray-200 dark:bg-dark-border-default rounded" />
              <div className="h-4 w-40 bg-gray-200 dark:bg-dark-border-default rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default IssuePageLoading
