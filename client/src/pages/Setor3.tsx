import SectorPage from "@/components/SectorPage";
import { SECTOR_CONTENT } from "../../../shared/const";

export default function Setor3() {
  const content = SECTOR_CONTENT.setor3;

  return (
    <SectorPage
      sectorId="setor3"
      title={content.title}
      subtitle={content.subtitle}
      paragraphs={content.paragraphs}
      audioUrl={content.audioUrl}
    />
  );
}
