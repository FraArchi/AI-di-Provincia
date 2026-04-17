import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ArticlePage from './components/ArticlePage';
import AboutPage from './components/AboutPage';
import RubricheSidebar from './components/RubricheSidebar';

function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [currentSlug, setCurrentSlug] = useState<string>('');
  const [isRubricheOpen, setIsRubricheOpen] = useState(false);

  const handleNavigate = (page: string, slug?: string) => {
    setCurrentPage(page);
    if (slug) {
      setCurrentSlug(slug);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col relative overflow-x-hidden">
      <Header 
        onNavigate={handleNavigate} 
        currentPage={currentPage} 
        onOpenRubriche={() => setIsRubricheOpen(true)} 
      />
      <RubricheSidebar 
        onNavigate={handleNavigate} 
        isOpen={isRubricheOpen} 
        onClose={() => setIsRubricheOpen(false)} 
      />
      <main className="flex-grow">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'article' && <ArticlePage slug={currentSlug} onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
      </main>
      <Footer />
    </div>
  );
}

export default App;