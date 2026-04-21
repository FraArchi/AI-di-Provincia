import { useState, useRef, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onOpenRubriche: () => void;
}

export default function Header({ currentPage, onOpenRubriche }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Chiude il menu a tendina se si clicca fuori
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40 relative">
      <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
        <a
          href="/"
          className="text-2xl font-serif font-bold text-gray-900 hover:text-accent transition-colors"
        >
          AI di Provincia
        </a>
        
        <div className="flex items-center gap-8 relative" ref={menuRef}>
          {/* Navigazione Desktop */}
          <nav className="hidden md:flex gap-8 items-center">
            <a
              href="/"
              className={`text-sm font-medium transition-colors ${
                currentPage === 'home'
                  ? 'text-accent'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Home
            </a>
            <a
              href="/chi-sono"
              className={`text-sm font-medium transition-colors ${
                currentPage === 'about'
                  ? 'text-accent'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Chi sono
            </a>
            <button
              onClick={onOpenRubriche}
              className="text-sm font-medium text-gray-600 hover:text-accent transition-colors"
            >
              Rubriche
            </button>
          </nav>

          {/* Pulsante Hamburger */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-900 hover:text-accent transition-colors p-1"
            aria-label="Menu principale"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Menu a tendina (Dropdown) */}
          {isMenuOpen && (
            <div className="absolute top-full right-0 mt-4 w-48 bg-white border border-gray-100 rounded-xl shadow-2xl py-2 z-50 flex flex-col overflow-hidden">
              <a 
                href="/"
                onClick={() => setIsMenuOpen(false)} 
                className="text-left px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-accent transition-colors block"
              >
                Home
              </a>
              <a 
                href="/chi-sono"
                onClick={() => setIsMenuOpen(false)} 
                className="text-left px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-accent transition-colors block"
              >
                Chi sono
              </a>
              <button 
                onClick={() => { onOpenRubriche(); setIsMenuOpen(false); }} 
                className="text-left px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-accent transition-colors border-t border-gray-100"
              >
                Rubriche
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
