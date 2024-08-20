export default function notFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        The page you are looking for does not exist.
      </p>
      <a href="/" className="text-blue-500 hover:text-blue-700 font-medium">
        Go back to Homepage
      </a>
    </div>
  );
}
