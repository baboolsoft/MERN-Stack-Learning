export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <header className="text-center">
        <h1 className="text-3xl font-bold text-brand-500 mb-2">
          Tailwind CSS Basics 
        </h1>
        <p className="text-gray-700">
          React + Vite + Tailwind v4 setup with best practices.
        </p>
      </header>

      <main className="mt-8 space-y-4">
        <button className="px-4 py-2 bg-brand-500 text-white rounded-lg shadow hover:bg-brand-700 focus:ring-2 focus:ring-offset-2 focus:ring-brand-500">
          Primary Button
        </button>

        <div className="p-4 border border-gray-200 rounded-md bg-white shadow">
          <h2 className="font-semibold mb-2">Card Component</h2>
          <p className="text-sm text-gray-600">
            This is a simple card example styled with Tailwind utilities.
          </p>
        </div>
      </main>
    </div>
  );
}
