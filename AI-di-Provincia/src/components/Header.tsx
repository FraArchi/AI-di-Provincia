interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export default function Header({ onNavigate, currentPage }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
        <button
          onClick={() => onNavigate('home')}
          className="text-2xl font-serif font-bold text-gray-900 hover:text-accent transition-colors"
        >
          AI di Provincia
        </button>
        <nav className="flex gap-8">
          <button
            onClick={() => onNavigate('home')}
            className={`text-sm font-medium transition-colors ${
              currentPage === 'home'
                ? 'text-accent'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => onNavigate('about')}
            className={`text-sm font-medium transition-colors ${
              currentPage === 'about'
                ? 'text-accent'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Chi sono
          </button>
        </nav>
      </div>
    </header>
  );
}
