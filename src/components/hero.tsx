"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Play,
  Pause,
  ArrowRight,
  Volume2,
  VolumeX,
  Volume1,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Squares } from "@/components/ui/squares";
import Image from "next/image";

const formatTime = (time: number) => {
  if (isNaN(time)) return "0:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

export function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);

    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      if (isMuted && newVolume > 0) {
        setIsMuted(false);
        audioRef.current.muted = false;
      }
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    const newMutedState = !isMuted;
    audioRef.current.muted = newMutedState;
    setIsMuted(newMutedState);
  };

  return (
    <section id="hero" className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center overflow-hidden bg-background py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 z-0">
        <Squares
          direction="diagonal"
          speed={0.5}
          squareSize={40}
          borderColor="#666"
          hoverFillColor="#222"
          className="opacity-15 sm:opacity-30 w-full h-full"
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-background/60 to-background pointer-events-none" />
      </div>

      <div className="container relative z-10 px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col gap-5 text-center lg:text-left pt-4 sm:pt-0"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              I build{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-blue-400">
                interactive
              </span>{" "}
              web experiences that last.
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              Building fast and thoughtful web experiences with a focus on performance and longevity.
              <br />
              <span className="text-foreground font-medium">
                Press play, set the vibe, and explore my work.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-1">
              <Button
                size="default"
                className="h-11 sm:h-12 rounded-full px-7 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
                asChild
              >
                <a href="#projects">
                  View Projects <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex justify-center lg:justify-end pb-6 sm:pb-0"
          >
            <div className="relative w-full max-w-xs sm:max-w-sm bg-card/40 backdrop-blur-xl border border-white/10 rounded-3xl p-5 sm:p-6 shadow-2xl shadow-black/40">
              <div className="relative flex flex-col gap-4">
                <div className="aspect-square relative rounded-2xl overflow-hidden bg-muted ring-1 ring-white/5">
                  <Image
                    src="/images/bread-cover.png"
                    alt="Bread Cover"
                    fill
                    className={`object-cover transition-transform duration-700 ${
                      isPlaying ? "scale-110" : "scale-100"
                    }`}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">Bread</h3>
                    <p className="text-sm text-muted-foreground">Lukrembo</p>
                  </div>

                  <button
                    onClick={togglePlay}
                    className="w-11 h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg transition-transform active:scale-95"
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4 fill-current" />
                    ) : (
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    )}
                  </button>
                </div>

                <audio
                  ref={audioRef}
                  src="/music/bread.mp3"
                  onTimeUpdate={() =>
                    audioRef.current &&
                    setCurrentTime(audioRef.current.currentTime)
                  }
                  onLoadedMetadata={() => {
                    if (audioRef.current) {
                      setDuration(audioRef.current.duration);
                      audioRef.current.volume = volume;
                    }
                  }}
                  onEnded={() => {
                    setIsPlaying(false);
                    setCurrentTime(0);
                  }}
                  preload="metadata"
                />

                <input
                  type="range"
                  min={0}
                  max={duration}
                  value={currentTime}
                  onChange={(e) => {
                    if (!audioRef.current) return;
                    audioRef.current.currentTime = Number(e.target.value);
                    setCurrentTime(Number(e.target.value));
                  }}
                  className="w-full h-1 bg-secondary rounded-lg accent-primary cursor-pointer"
                />

                <div className="flex justify-between text-[10px] text-muted-foreground font-mono">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
                
                <div className="flex items-center justify-between pt-2 border-t border-white/5">
                  <div className="flex items-center gap-2 group">
                    <button
                      onClick={toggleMute}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {isMuted || volume === 0 ? (
                        <VolumeX className="w-4 h-4" />
                      ) : volume < 0.5 ? (
                        <Volume1 className="w-4 h-4" />
                      ) : (
                        <Volume2 className="w-4 h-4" />
                      )}
                    </button>
                    <input
                      type="range"
                      min={0}
                      max={1}
                      step={0.01}
                      value={isMuted ? 0 : volume}
                      onChange={handleVolumeChange}
                      className="w-16 h-1 bg-secondary rounded-lg accent-primary cursor-pointer opacity-50 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <span className="text-[10px] text-muted-foreground">
                    No Copyright Music
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}