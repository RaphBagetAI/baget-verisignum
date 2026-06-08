export default function Footer() {
  return (
    <footer className="bg-stone-800 text-amber-50">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
        <p>&copy; {new Date().getFullYear()} Verisignum. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="text-sm text-stone-300 hover:underline">Privacy Policy</a>
          <a href="#" className="text-sm text-stone-300 hover:underline">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
