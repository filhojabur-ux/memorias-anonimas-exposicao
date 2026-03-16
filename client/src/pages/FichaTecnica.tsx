import SectorPage from "@/components/SectorPage";
import { SECTOR_CONTENT } from "../../../shared/const";

export default function FichaTecnica() {
  const content = SECTOR_CONTENT.fichaTecnica;

  return (
    <SectorPage
      sectorId="ficha-tecnica"
      title={content.title}
      subtitle={content.subtitle}
      paragraphs={content.paragraphs}
      audioUrl={content.audioUrl}
    />
  );
}
