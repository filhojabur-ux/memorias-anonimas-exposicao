import SectorPage from "@/components/SectorPage";
import { SECTOR_CONTENT } from "../../../shared/const";

export default function Setor1() {
  const content = SECTOR_CONTENT.setor1;

  return (
    <SectorPage
      sectorId="setor1"
      title={content.title}
      subtitle={content.subtitle}
      paragraphs={content.paragraphs}
      audioUrl={content.audioUrl}
    />
  );
}
