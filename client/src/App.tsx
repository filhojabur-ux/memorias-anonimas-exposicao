import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Router as WouterRouter, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Apresentacao from "./pages/Apresentacao";
import Setor1 from "./pages/Setor1";
import Setor2 from "./pages/Setor2";
import Setor3 from "./pages/Setor3";
import FichaTecnica from "./pages/FichaTecnica";

function Router() {
  // No GitHub Pages o projeto é servido em /memorias-anonimas-exposicao/.
  // O Vite fornece esse prefixo via BASE_URL; em desenvolvimento ele fica vazio.
  const base = import.meta.env.BASE_URL === "/"
    ? ""
    : import.meta.env.BASE_URL.replace(/\/$/, "");

  return (
    <WouterRouter base={base}>
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/apresentacao"} component={Apresentacao} />
        <Route path={"/setor1"} component={Setor1} />
        <Route path={"/setor2"} component={Setor2} />
        <Route path={"/setor3"} component={Setor3} />
        <Route path={"/ficha-tecnica"} component={FichaTecnica} />
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
