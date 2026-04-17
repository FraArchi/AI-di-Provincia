import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Article, getAllPosts } from '../lib/posts';

interface HomePageProps {
  onNavigate: (page: string, slug?: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadArticles();
  }, []);

  async function loadArticles() {
    try {
      const data = await getAllPosts();
      setArticles(data || []);
    } catch (error) {
      console.error('Error loading articles:', error);
    } finally {
      setLoading(false);
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('it-IT', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-gray-600">Caricamento...</p>
      </div>
    );
  }

  const featuredArticle = articles.find(a => a.is_featured);
  const otherArticles = articles.filter(a => !a.is_featured);

  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-16 pb-8 border-b border-gray-200">
          <h1 className="text-5xl font-serif font-bold text-gray-900 mb-3">
            AI di Provincia
          </h1>
          <p className="text-xl text-gray-600">
            L'intelligenza artificiale vista da chi vive lontano dai centri tecnologici
          </p>
        </div>

        {featuredArticle && (
          <article className="mb-20">
            {featuredArticle.category && (
              <span className="text-sm font-medium text-accent uppercase tracking-wide mb-4 block">
                {featuredArticle.category}
              </span>
            )}
            <h2 className="text-5xl font-serif font-bold text-gray-900 mb-4 leading-tight">
              {featuredArticle.title}
            </h2>
            {featuredArticle.subtitle && (
              <p className="text-2xl text-gray-600 mb-8 leading-relaxed">
                {featuredArticle.subtitle}
              </p>
            )}
            <div className="flex gap-4 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-200">
              <span className="font-medium">{featuredArticle.author}</span>
              <span>·</span>
              <span>{formatDate(featuredArticle.published_date)}</span>
            </div>

            <div className="prose prose-lg max-w-none mb-8 text-gray-800 leading-relaxed">
              <ReactMarkdown
                components={{
                  h3: ({node, ...props}) => <h3 className="text-xl font-serif font-bold text-gray-900 mt-6 mb-4" {...props} />,
                  p: ({node, ...props}) => <p className="mb-4" {...props} />,
                  h2: ({node, ...props}) => <h3 className="text-xl font-serif font-bold text-gray-900 mt-6 mb-4" {...props} /> // mapping h2 to h3 in snippet
                }}
              >
                {featuredArticle.content.split('\n\n').slice(0, 3).join('\n\n')}
              </ReactMarkdown>
            </div>

            <button
              onClick={() => onNavigate('article', featuredArticle.slug)}
              className="inline-block text-accent font-medium hover:underline transition-colors"
            >
              Leggi l'articolo completo →
            </button>
          </article>
        )}

        {otherArticles.length > 0 && (
          <div className="grid md:grid-cols-3 gap-12 border-t border-gray-200 pt-12">
            
            {/* Feed Centrale (Articoli Principali) - 2/3 width */}
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold font-serif text-gray-900 mb-8 border-b pb-2">Articoli Recenti</h3>
              <div className="grid sm:grid-cols-2 gap-8">
                {otherArticles.filter(a => a.category !== "Il Bollettino dell'IA").map((article) => (
                  <article key={article.id} className="group">
                    <button
                      onClick={() => onNavigate('article', article.slug)}
                      className="text-left w-full"
                    >
                      {article.category && (
                        <span className="text-xs font-medium text-accent uppercase tracking-wide mb-2 block">
                          {article.category}
                        </span>
                      )}
                      <h4 className="text-xl font-serif font-bold text-gray-900 mb-2 group-hover:text-accent transition-colors leading-snug">
                        {article.title}
                      </h4>
                      {article.subtitle && (
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                          {article.subtitle}
                        </p>
                      )}
                      <div className="flex gap-2 text-xs text-gray-500">
                        <span>{article.author}</span>
                        <span>·</span>
                        <span>{formatDate(article.published_date)}</span>
                      </div>
                    </button>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar Laterale (Il Bollettino dell'IA) - 1/3 width */}
            <div className="md:col-span-1 bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h3 className="text-lg font-bold font-serif text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-accent">📡</span> Il Bollettino dell'IA
              </h3>
              <div className="space-y-6">
                {otherArticles.filter(a => a.category === "Il Bollettino dell'IA").slice(0, 5).map((article) => (
                  <article key={article.id} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                     <button
                      onClick={() => onNavigate('article', article.slug)}
                      className="text-left w-full group"
                    >
                      <h4 className="text-base font-bold text-gray-900 mb-1 group-hover:text-accent transition-colors leading-tight">
                        {article.title}
                      </h4>
                      <div className="text-xs text-gray-500 mt-2">
                        {formatDate(article.published_date)}
                      </div>
                    </button>
                  </article>
                ))}
                
                {otherArticles.filter(a => a.category === "Il Bollettino dell'IA").length === 0 && (
                  <p className="text-sm text-gray-500 italic">Nessun bollettino recente.</p>
                )}
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
