
export default function GameSkeleton() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className="relative z-10 text-center max-w-2xl mt-10 flex flex-col items-center justify-center">
        <h2 className="w-34 h-8 bg-gray-300 animate-pulse rounded-sm mb-10"></h2>
        <p className="w-64 h-8 bg-gray-300 animate-pulse rounded-sm mb-10">
        </p>
      </div>

      <div className="w-full grid grid-cols-1 justify-center items-center sm:grid-cols-2 lg:grid-cols-5 gap-6 p-6">
        {Array.from({ length: 10 }).map((_, idx) => (
          <div
            className="max-w-2xl rounded-md shadow-lg border border-gray-200"
            key={idx}
          >
            <div className="relative w-full h-48 bg-gray-300 animate-pulse rounded-t-md" />

            <div className="p-4 flex flex-col justify-center items-center gap-3">
              <div className="w-20 h-5 bg-gray-300 animate-pulse rounded-sm" />
            </div>

            <div className="p-4 flex justify-center">
              <div className="w-24 h-8 bg-gray-300 animate-pulse rounded-sm" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
