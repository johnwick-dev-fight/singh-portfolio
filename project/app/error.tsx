'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Something went wrong!</h1>
      <p className="mt-4">An error occurred while loading this page.</p>
      <button
        onClick={reset}
        className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        Try again
      </button>
      <a href="/" className="mt-4 text-blue-500 hover:underline">
        Return Home
      </a>
    </div>
  );
} 