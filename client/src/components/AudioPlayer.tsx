import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AudioPlayerProps {
  audioUrl: string;
  title: string;
  ariaLabel?: string;
}

export default function AudioPlayer({
  audioUrl,
  title,
  ariaLabel,
}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  const formatTime = (time: number) => {
    if (!time) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current && duration) {
      const rect = e.currentTarget.getBoundingClientRect();
      const percent = (e.clientX - rect.left) / rect.width;
      audioRef.current.currentTime = percent * duration;
    }
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  return (
    <div className="w-full bg-slate-50 rounded-lg p-6 border border-slate-200">
      <audio
        ref={audioRef}
        src={audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
      />

      <div className="flex items-center gap-4 mb-4">
        <Button
          onClick={togglePlayPause}
          size="lg"
          className="h-14 w-14 rounded-full flex-shrink-0"
          aria-label={
            ariaLabel || (isPlaying ? "Pausar áudio" : "Reproduzir áudio")
          }
        >
          {isPlaying ? (
            <Pause className="h-6 w-6" />
          ) : (
            <Play className="h-6 w-6" />
          )}
        </Button>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <Volume2 className="h-5 w-5 text-slate-600 flex-shrink-0" />
            <span className="text-sm font-medium text-slate-700">{title}</span>
          </div>

          {/* Progress bar */}
          <div
            onClick={handleProgressClick}
            className="w-full h-2 bg-slate-300 rounded-full cursor-pointer hover:bg-slate-400 transition-colors"
            role="progressbar"
            aria-valuenow={Math.round((currentTime / duration) * 100) || 0}
            aria-valuemin={0}
            aria-valuemax={100}
            tabIndex={0}
            onKeyDown={(e) => {
              if (audioRef.current && duration) {
                if (e.key === "ArrowRight") {
                  audioRef.current.currentTime = Math.min(
                    audioRef.current.currentTime + 5,
                    duration
                  );
                } else if (e.key === "ArrowLeft") {
                  audioRef.current.currentTime = Math.max(
                    audioRef.current.currentTime - 5,
                    0
                  );
                }
              }
            }}
          >
            <div
              className="h-full bg-blue-600 rounded-full transition-all"
              style={{
                width: `${duration ? (currentTime / duration) * 100 : 0}%`,
              }}
            />
          </div>

          {/* Time display */}
          <div className="flex justify-between items-center mt-2 text-xs text-slate-600">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
