import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SECTORS } from "../../../shared/const";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="container py-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            Memórias Anônimas
          </h1>
          <p className="text-lg text-slate-600">
            Revelando Clara-lindas Histórias
          </p>
          <p className="text-sm text-slate-500 mt-4">
            Uma exposição do Movimento República de Emaús
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12 max-w-3xl">
        {/* Introdução */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Bem-vindo à Exposição
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-4">
            Esta exposição celebra a importância das doações anônimas e seu
            impacto direto no fortalecimento da comunidade. Cada objeto
            apresentado é uma história de solidariedade e transformação.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Explore os cinco setores da exposição através de vídeos em Libras,
            audiodescrição e texto ampliado para melhor acessibilidade.
          </p>
        </section>

        {/* Recursos de Acessibilidade */}
        <section className="mb-12 bg-blue-50 rounded-lg p-6 border border-blue-200">
          <h3 className="text-xl font-semibold text-blue-900 mb-3">
            Recursos de Acessibilidade
          </h3>
          <ul className="space-y-2 text-blue-800">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">📹</span>
              <span>Vídeos em Libras para cada setor</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">🔊</span>
              <span>Audiodescrição com voz profissional</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">🔤</span>
              <span>Texto ampliado para pessoas com baixa visão</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">📱</span>
              <span>Otimizado para celular e tablet</span>
            </li>
          </ul>
        </section>

        {/* Setores */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Explore os Setores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SECTORS.map((sector: any) => (
              <Link key={sector.id} href={sector.path}>
                <Button
                  className="w-full h-auto py-6 px-4 justify-start text-left flex flex-col items-start"
                  size="lg"
                  variant="outline"
                >
                  <span className="font-bold text-lg">{sector.label}</span>
                  <span className="text-xs text-slate-500 mt-1">
                    Clique para explorar
                  </span>
                </Button>
              </Link>
            ))}
          </div>
        </section>

        {/* Informações de Contato */}
        <section className="mt-16 pt-8 border-t border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900 mb-3">
            Sobre a Exposição
          </h3>
          <p className="text-slate-700 mb-4">
            <strong>Realização:</strong> Movimento República de Emaús
          </p>
          <p className="text-slate-700 mb-4">
            <strong>Coordenação geral:</strong> Georgina Cordeiro
          </p>
          <p className="text-slate-700">
            <strong>Curadoria e execução:</strong> Tiago Souza e Mailde Santos
          </p>
          <Link href="/ficha-tecnica">
            <Button variant="link" className="mt-4 pl-0">
              Ver ficha técnica completa →
            </Button>
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white mt-16">
        <div className="container py-8 text-center text-slate-400 text-sm">
          <p>
            Memórias Anônimas © 2024 - Movimento República de Emaús
          </p>
          <p className="mt-2">
            Site acessível desenvolvido com recursos de Libras, áudio e texto
            ampliado
          </p>
        </div>
      </footer>
    </div>
  );
}
