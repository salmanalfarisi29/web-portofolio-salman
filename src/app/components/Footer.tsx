export default function Footer() {
    return (
    <footer className="mt-12 p-6 text-center bg-gray-900 text-white rounded-t-lg">
    <p className="text-lg">Connect with me:</p>
    <div className="flex justify-center gap-6 mt-3">
        <a href="#" className="text-blue-400 hover:text-blue-300 transition">GitHub</a>
        <a href="#" className="text-blue-400 hover:text-blue-300 transition">LinkedIn</a>
        <a href="#" className="text-blue-400 hover:text-blue-300 transition">Twitter</a>
    </div>
    <p className="mt-4 text-sm opacity-75">© {new Date().getFullYear()} Salman Alfarisi. All rights reserved.</p>
    </footer>
    );
  }
  