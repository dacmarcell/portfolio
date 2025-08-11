export default function Loading() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">Projetos</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="p-5 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-200/60 dark:bg-gray-800/40 animate-pulse"
          >
            <div className="h-6 w-2/3 bg-emerald-500/30 dark:bg-emerald-600/40 rounded mb-3"></div>
            <div className="h-4 w-full bg-gray-300/40 dark:bg-gray-600/40 rounded mb-2"></div>
            <div className="h-4 w-5/6 bg-gray-300/40 dark:bg-gray-600/40 rounded"></div>
          </div>
        ))}
      </div>
    </main>
  );
}
