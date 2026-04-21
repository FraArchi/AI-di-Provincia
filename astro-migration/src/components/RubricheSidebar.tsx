import { X, ChevronRight } from 'lucide-react';
import type { CategoryArticle } from './Navigation';

interface RubricheSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  rubriche: CategoryArticle[];
}

export default function RubricheSidebar({ isOpen, onClose, rubriche }: RubricheSidebarProps) {
  return (
    <>
      {/* Overlay scuro quando aperto */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Pannello Sidebar a scorrimento */}
      <div 
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
          <h2 className="text-xl font-serif font-bold text-gray-900">Tutte le Rubriche</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-accent transition-colors bg-white p-1 rounded-full shadow-sm"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto flex-grow space-y-8">
          {rubriche.map((article) => (
            <div key={article.category} className="group">
              {/* Titolo della rubrica */}
              <h3 className="text-xs font-bold text-accent uppercase tracking-widest mb-3 border-l-2 border-accent pl-3">
                {article.category}
              </h3>
              
              {/* Ultimo articolo della rubrica (massimo 1) */}
              <a
                href={`/post/${article.slug}`}
                onClick={onClose}
                className="text-left w-full hover:bg-gray-50 p-3 -mx-3 rounded-lg transition-colors flex items-start gap-3 block"
              >
                <ChevronRight size={16} className="text-gray-300 mt-1 flex-shrink-0 group-hover:text-accent transition-colors" />
                <p className="text-sm font-serif font-medium text-gray-800 leading-snug group-hover:text-accent transition-colors m-0">
                  {article.title}
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
