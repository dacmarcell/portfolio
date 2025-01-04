export default function Footer() {
  return (
    <footer className="dark:bg-gray-900 bg-slate-950 text-white py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center text-center md:text-left">
        <p>Dev Marcell &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
