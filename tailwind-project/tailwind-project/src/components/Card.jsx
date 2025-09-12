export default function Card({ title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1">
      <h2 className="text-lg font-bold text-black mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <button className="mt-4 px-3 py-1 bg-brand-500 text-white rounded hover:bg-brand-700 transition">
        View
      </button>
    </div>
  );
}
