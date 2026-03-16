import SectorPage from "@/components/SectorPage";
import { SECTOR_CONTENT } from "../../../shared/const";

export default function Apresentacao() {
  const content = SECTOR_CONTENT.apresentacao;

  return (
    <SectorPage
      sectorId="apresentacao"
      title={content.title}
      subtitle={content.subtitle}
      paragraphs={content.paragraphs}
      audioUrl={content.audioUrl}
    />
  );
}
