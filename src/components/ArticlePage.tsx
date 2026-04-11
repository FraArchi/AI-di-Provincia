import { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Article, getPostBySlug } from '../lib/posts';

interface ArticlePageProps {
  slug: string;
  onNavigate: (page: string) => void;
}

export default function ArticlePage({ slug, onNavigate }: ArticlePageProps) {
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadArticle();
  }, [slug]);

  async function loadArticle() {
    try {
      const data = await getPostBySlug(slug);
      setArticle(data);
    } catch (error) {
      console.error('Error loading article:', error);
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
      <div className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-gray-600">Caricamento...</p>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-gray-600 mb-6">Articolo non trovato.</p>
        <button
          onClick={() => onNavigate('home')}
          className="text-accent hover:underline flex items-center gap-2"
        >
          <ArrowLeft size={16} />
          Torna alla home
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <button
          onClick={() => onNavigate('home')}
          className="text-sm text-gray-600 hover:text-accent transition-colors flex items-center gap-2 mb-12"
        >
          <ArrowLeft size={16} />
          Torna alla home
        </button>

        <article>
          {article.category && (
            <span className="text-sm font-medium text-accent uppercase tracking-wide mb-6 block">
              {article.category}
            </span>
          )}

          <h1 className="text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
            {article.title}
          </h1>

          {article.subtitle && (
            <p className="text-2xl text-gray-600 mb-8 leading-relaxed">
              {article.subtitle}
            </p>
          )}

          <div className="flex gap-4 text-sm text-gray-500 mb-12 pb-8 border-b border-gray-200">
            <span className="font-medium">{article.author}</span>
            <span>·</span>
            <span>{formatDate(article.published_date)}</span>
          </div>

          <div className="article-content">
            <ReactMarkdown 
              components={{
                h2: ({node, ...props}) => <h2 className="text-2xl font-serif font-bold text-gray-900 mt-12 mb-6" {...props} />,
                p: ({node, ...props}) => <p className="text-lg text-gray-800 leading-relaxed mb-6" {...props} />
              }}
            >
              {article.content}
            </ReactMarkdown>
          </div>
        </article>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <button
            onClick={() => onNavigate('home')}
            className="text-accent hover:underline flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            Torna alla home
          </button>
        </div>
      </div>
    </div>
  );
}
