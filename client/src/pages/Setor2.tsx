import SectorPage from "@/components/SectorPage";
import { SECTOR_CONTENT } from "../../../shared/const";

export default function Setor2() {
  const content = SECTOR_CONTENT.setor2;

  return (
    <SectorPage
      sectorId="setor2"
      title={content.title}
      subtitle={content.subtitle}
      paragraphs={content.paragraphs}
      audioUrl={content.audioUrl}
    />
  );
}
