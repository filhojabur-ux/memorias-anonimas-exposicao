import { useEffect } from "react";
import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import AudioPlayer from "@/components/AudioPlayer";
import { SECTORS } from "../../../shared/const";

interface SectorPageProps {
  sectorId: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
  audioUrl: string;
  librasVideoUrl?: string;
}

export default function SectorPage({
  sectorId,
  title,
  subtitle,
  paragraphs,
  audioUrl,
  librasVideoUrl,
}: SectorPageProps) {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [sectorId]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header com navegação */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/">
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10"
              aria-label="Voltar para home"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div className="flex-1 min-w-0">
            <h1 className="text-xl font-bold text-slate-900 truncate">
              {title}
            </h1>
            <p className="text-sm text-slate-600">{subtitle}</p>
          </div>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="container py-8 max-w-2xl">
        {/* Seção de Libras */}
        {librasVideoUrl && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Assistir em Libras
            </h2>
            <div className="bg-slate-100 rounded-lg overflow-hidden aspect-video flex items-center justify-center">
              <iframe
                src={librasVideoUrl}
                title={`Vídeo em Libras - ${title}`}
                className="w-full h-full"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                aria-label={`Vídeo em Libras para ${title}`}
              />
            </div>
          </section>
        )}

        {/* Seção de Áudio */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Ouvir Audiodescrição
          </h2>
          <AudioPlayer
            audioUrl={audioUrl}
            title={`Audiodescrição - ${title}`}
            ariaLabel={`Reproduzir audiodescrição de ${title}`}
          />
        </section>

        {/* Seção de Texto Ampliado */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Ler Texto Ampliado
          </h2>
          <div className="space-y-6">
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-xl leading-relaxed text-slate-800 font-sans"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* Navegação entre setores */}
        <nav className="mt-16 pt-8 border-t border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">
            Explorar outros setores
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {SECTORS.map((sector: any) => (
              <Link key={sector.id} href={sector.path}>
                <Button
                  variant={sector.id === sectorId ? "default" : "outline"}
                  className="w-full justify-start"
                  size="lg"
                >
                  {sector.label}
                </Button>
              </Link>
            ))}
          </div>
        </nav>
      </main>
    </div>
  );
}
