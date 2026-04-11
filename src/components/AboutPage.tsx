import { ArrowLeft } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
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
          <h1 className="text-5xl font-serif font-bold text-gray-900 mb-8 leading-tight">
            Chi sono
          </h1>

          <div className="space-y-6 text-lg text-gray-800 leading-relaxed">
            <p>
              Questa pagina è in costruzione.
            </p>

            <p>
              AI di Provincia è un blog che racconta l'intelligenza artificiale dal punto di vista
              di chi vive lontano dai centri tecnologici.
            </p>

            <p>
              Presto ci sarà di più.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
