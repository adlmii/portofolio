"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Pause, ArrowRight, Github, Volume2, VolumeX } from "lucide-react";
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
      audioRef.current.volume = volume;
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      setIsMuted(newVolume === 0);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      const newMutedState = !isMuted;
      setIsMuted(newMutedState);
      audioRef.current.muted = newMutedState;
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
    if (audioRef.current) audioRef.current.currentTime = 0;
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
      
      <div className="absolute inset-0 w-full h-full z-0">
         {/* UPDATED SQUARES */}
         <Squares 
            direction="diagonal"
            speed={0.5}
            squareSize={40}
            borderColor="#666" 
            hoverFillColor="#222"
            className="opacity-30 w-full h-full absolute inset-0"
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-background/50 to-background pointer-events-none" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6 text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.15]">
              I craft{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-blue-400">
                interactive
              </span>{" "}
              web experiences.
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              Building fast, responsive, and memorable web experiences. 
              But the best experiences need the right atmosphere.{" "}
              <strong className="text-foreground font-semibold">
                Go ahead, hit Play on the card to the right
              </strong>
              , set the vibe, and enjoy exploring my work below.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <Button size="lg" className="rounded-full px-8 h-12 text-base font-medium shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all" asChild>
                <a href="#projects">
                  View Projects <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base bg-background/50 backdrop-blur-sm border-border hover:bg-secondary/50" asChild>
                 <a href="https://github.com/adlmii" target="_blank" rel="noopener noreferrer">
                   <Github className="mr-2 w-4 h-4" />
                   GitHub Profile
                 </a>
              </Button>
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.9, y: 30 }}
             animate={{ opacity: 1, scale: 1, y: 0 }}
             transition={{ delay: 0.2, duration: 0.8 }}
             className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm bg-card/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl shadow-black/50 overflow-hidden group">
              
              {/* Glow Effect */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col gap-5">
                
                <div className="aspect-square w-full relative rounded-2xl overflow-hidden bg-muted shadow-inner ring-1 ring-white/5">
                    <Image 
                        src="/images/bread-cover.png" 
                        alt="Bread Cover" 
                        fill 
                        className={`object-cover transition-transform duration-700 ${isPlaying ? 'scale-110' : 'scale-100'}`}
                    />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h3 className="font-semibold text-xl text-card-foreground tracking-tight">Bread</h3>
                    <p className="text-sm text-muted-foreground font-medium">Lukrembo</p>
                  </div>

                  <button 
                    onClick={togglePlay}
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
                  >
                     {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-1" />}
                  </button>
                </div>

                <div className="space-y-2">
                    <input
                        type="range"
                        min={0}
                        max={duration || 0}
                        value={currentTime}
                        onChange={handleSeek}
                        className="w-full h-1 bg-secondary/80 rounded-lg appearance-none cursor-pointer accent-primary hover:accent-primary/90"
                    />
                    <div className="flex justify-between text-[10px] text-muted-foreground font-medium font-mono">
                        <span>{formatTime(currentTime)}</span>
                        <span>{formatTime(duration)}</span>
                    </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/5">
                    <div className="flex items-center gap-2 group/vol">
                        <button onClick={toggleMute} className="text-muted-foreground hover:text-foreground transition-colors">
                            {isMuted || volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                        </button>
                        <input 
                            type="range"
                            min={0}
                            max={1}
                            step={0.01}
                            value={isMuted ? 0 : volume}
                            onChange={handleVolumeChange}
                            className="w-16 h-1 bg-secondary/80 rounded-lg appearance-none cursor-pointer accent-foreground hover:accent-foreground/80 opacity-50 group-hover/vol:opacity-100 transition-opacity"
                        />
                    </div>
                    
                    <span className="text-[10px] text-muted-foreground">No Copyright Music</span>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <audio 
        ref={audioRef}
        src="/music/bread.mp3" 
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
        preload="metadata"
      />
    </section>
  );
}