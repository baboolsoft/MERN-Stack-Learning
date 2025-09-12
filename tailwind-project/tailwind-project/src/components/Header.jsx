export default function Header() {
  return (
    <header className="bg-brand-500 text-white p-6 shadow-md flex justify-between items-center">
      <h1 className="text-2xl font-bold">My Dashboard</h1>
      <nav className="space-x-4">
        <button className="hover:bg-brand-700 px-3 py-1 rounded transition">Home</button>
        <button className="hover:bg-brand-700 px-3 py-1 rounded transition">Settings</button>
      </nav>
    </header>
  );
}
