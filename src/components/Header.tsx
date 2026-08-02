import { useState, useRef, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onOpenRubriche: () => void;
  lang?: 'it' | 'en';
  currentPath?: string;
}

export default function Header({ currentPage, onOpenRubriche, lang = 'it', currentPath }: HeaderProps) {
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

  const t = {
    it: {
      home: 'Home',
      about: 'Chi sono',
      rubriche: 'Rubriche',
      manifesto: 'Manifesto',
      margini: 'Margini di Pagina',
      glossario: 'Glossario',
      newsletter: 'Newsletter ↓',
      toggleLang: 'EN',
      title: 'AI di Provincia',
      homeUrl: '/',
      aboutUrl: '/chi-sono',
      manifestoUrl: '/manifesto',
      marginiUrl: '/margini-di-pagina',
      glossarioUrl: '/glossario'
    },
    en: {
      home: 'Home',
      about: 'About',
      rubriche: 'Sections',
      manifesto: 'Manifesto',
      margini: 'Page Margins',
      glossario: 'Glossary',
      newsletter: 'Newsletter ↓',
      toggleLang: 'IT',
      title: 'Provincial AI',
      homeUrl: '/en',
      aboutUrl: '/en/chi-sono',
      manifestoUrl: '/en/manifesto',
      marginiUrl: '/en/margini-di-pagina',
      glossarioUrl: '/en/glossario'
    }
  }[lang];

  const currentPathname = currentPath || (typeof window !== 'undefined' ? window.location.pathname : '/');
  const alternatePath = lang === 'en'
    ? currentPathname.replace(/^\/en/, '') || '/'
    : `/en${currentPathname === '/' ? '' : currentPathname}`;

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40 relative">
      <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
        <a
          href={t.homeUrl}
          className="text-2xl font-serif font-bold text-gray-900 hover:text-accent transition-colors"
        >
          {t.title}
        </a>
        
        <div className="flex items-center gap-8 relative" ref={menuRef}>
          {/* Navigazione Desktop */}
          <nav className="hidden md:flex gap-8 items-center">
            <a
              href={t.homeUrl}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'home'
                  ? 'text-accent'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t.home}
            </a>
            <a
              href={t.aboutUrl}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'about'
                  ? 'text-accent'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t.about}
            </a>
            <button
              onClick={onOpenRubriche}
              className="text-sm font-medium text-gray-600 hover:text-accent transition-colors"
            >
              {t.rubriche}
            </button>
            <a 
              href={t.manifestoUrl}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'manifesto'
                  ? 'text-accent'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t.manifesto}
            </a>
            <a 
              href={t.marginiUrl}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'margini-di-pagina'
                  ? 'text-accent'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t.margini}
            </a>
            <a 
              href={t.glossarioUrl}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'glossario'
                  ? 'text-accent'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t.glossario}
            </a>
            <a 
              href="#newsletter" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-sm font-bold text-accent hover:underline transition-colors"
            >
              {t.newsletter}
            </a>

            {/* Language Toggle */}
            <a
              href={alternatePath}
              className="flex items-center gap-1.5 text-xs font-mono font-bold border border-gray-300 rounded-md px-2.5 py-1 text-gray-600 hover:text-accent hover:border-accent transition-colors bg-gray-50 ml-2"
              title={lang === 'it' ? 'Switch to English' : 'Passa in Italiano'}
            >
              <Globe size={13} />
              {t.toggleLang}
            </a>
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
                href={t.homeUrl}
                onClick={() => setIsMenuOpen(false)} 
                className="text-left px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-accent transition-colors block"
              >
                {t.home}
              </a>
              <a 
                href={t.aboutUrl}
                onClick={() => setIsMenuOpen(false)} 
                className="text-left px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-accent transition-colors block"
              >
                {t.about}
              </a>
              <button 
                onClick={() => { onOpenRubriche(); setIsMenuOpen(false); }} 
                className="text-left px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-accent transition-colors border-t border-gray-100"
              >
                {t.rubriche}
              </button>
              <a 
                href={t.manifestoUrl}
                onClick={() => setIsMenuOpen(false)} 
                className="text-left px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-accent transition-colors border-t border-gray-100 block"
              >
                {t.manifesto}
              </a>
              <a 
                href={t.marginiUrl}
                onClick={() => setIsMenuOpen(false)} 
                className="text-left px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-accent transition-colors border-t border-gray-100 block"
              >
                {t.margini}
              </a>
              <a 
                href={t.glossarioUrl}
                onClick={() => setIsMenuOpen(false)} 
                className="text-left px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-accent transition-colors border-t border-gray-100 block"
              >
                {t.glossario}
              </a>
              <a 
                href="#newsletter" 
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-left px-5 py-3 text-sm font-bold text-accent hover:bg-gray-50 transition-colors border-t border-gray-100 block"
              >
                {t.newsletter}
              </a>
              {/* Mobile Language Toggle */}
              <a
                href={alternatePath}
                onClick={() => setIsMenuOpen(false)}
                className="text-left px-5 py-3 text-sm font-bold text-accent hover:bg-gray-50 transition-colors border-t border-gray-100 flex items-center gap-2"
              >
                <Globe size={16} />
                {lang === 'it' ? 'Switch to English' : 'Passa in Italiano'} ({t.toggleLang})
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
