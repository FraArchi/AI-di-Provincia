import { useState } from 'react';
import Header from './Header';
import RubricheSidebar from './RubricheSidebar';

export interface CategoryArticle {
  category: string;
  title: string;
  slug: string;
  cover?: string | null;
}

interface NavigationProps {
  currentPage: 'home' | 'about' | 'article' | 'manifesto' | 'margini-di-pagina' | 'glossario';
  rubriche: CategoryArticle[];
  lang?: 'it' | 'en';
  currentPath?: string;
}

export default function Navigation({ currentPage, rubriche, lang = 'it', currentPath }: NavigationProps) {
  const [isRubricheOpen, setIsRubricheOpen] = useState(false);

  return (
    <>
      <Header 
        currentPage={currentPage} 
        onOpenRubriche={() => setIsRubricheOpen(true)} 
        lang={lang}
        currentPath={currentPath}
      />
      <RubricheSidebar 
        isOpen={isRubricheOpen} 
        onClose={() => setIsRubricheOpen(false)} 
        rubriche={rubriche}
        lang={lang}
      />
    </>
  );
}
