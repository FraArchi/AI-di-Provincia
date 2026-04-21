import { useState } from 'react';
import Header from './Header';
import RubricheSidebar from './RubricheSidebar';

export interface CategoryArticle {
  category: string;
  title: string;
  slug: string;
}

interface NavigationProps {
  currentPage: 'home' | 'about' | 'article';
  rubriche: CategoryArticle[];
}

export default function Navigation({ currentPage, rubriche }: NavigationProps) {
  const [isRubricheOpen, setIsRubricheOpen] = useState(false);

  return (
    <>
      <Header 
        currentPage={currentPage} 
        onOpenRubriche={() => setIsRubricheOpen(true)} 
      />
      <RubricheSidebar 
        isOpen={isRubricheOpen} 
        onClose={() => setIsRubricheOpen(false)} 
        rubriche={rubriche}
      />
    </>
  );
}
