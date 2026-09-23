"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import { Play, ExternalLink } from "lucide-react";

interface VideoFrameProps {
  youtubeId?: string;
  driveEmbedUrl?: string;
  vimeoEmbedUrl?: string;
  vimeoId?: string;
  videoSrc?: string;
  imageSrc?: string;
  poster?: string;
  title?: string;
  caption?: string; // e.g., "Clip · 16:9 · motion graphic"
  aspectRatio?: "16:9" | "9:16" | "16:10" | "4:3" | "1:1";
  placeholderLabel?: string;
  placeholderSub?: string;
  href?: string;
  autoplay?: boolean;
  priority?: boolean;
  className?: string;
}

const VIMEO_THUMBNAILS: Record<string, string> = {
  "1228864565": "https://i.vimeocdn.com/video/2203378630-49cfec185685048ee6d010c68eb24e6d54bece6450224e6401e19793dfeb1ce7-d_960x540.jpg",
  "1229461675": "https://i.vimeocdn.com/video/2204124504-dce320bdb2eecd4f0cd2d48e99e9357a974429e61e52b9e6bab27e123afc3ce9-d_720x1280.jpg",
  "1228851755": "https://i.vimeocdn.com/video/2203362364-dbf425ec3aa4c4c81b4349e58f31afbc5dac9c50639df0a079020a406a2c5a65-d_720x1280.jpg",
  "1228848532": "https://i.vimeocdn.com/video/2203359061-2665e9a470f23457c5d62445a89e57b5da2932aa5b5f3fa4b5a5004fd3a12fc5-d_960x540.jpg",
};

export const VideoFrame: React.FC<VideoFrameProps> = ({
  youtubeId,
  driveEmbedUrl,
  vimeoEmbedUrl,
  vimeoId,
  videoSrc,
  imageSrc,
  poster,
  title,
  caption = "Clip · 16:9 · edit",
  aspectRatio = "16:9",
  placeholderLabel,
  placeholderSub,
  href,
  autoplay = true,
  priority = false,
  className = "",
}) => {
  const [isPlaying] = useState(autoplay);
  const [isMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(priority);
  const [dynamicPoster, setDynamicPoster] = useState<string | undefined>(undefined);
  const containerRef = useRef<HTMLDivElement>(null);

  const aspectClass = {
    "16:9": "aspect-video",
    "9:16": "aspect-[9/16]",
    "16:10": "aspect-[16/10]",
    "4:3": "aspect-[4/3]",
    "1:1": "aspect-square",
  }[aspectRatio];

  const vimeoIdClean = useMemo(() => {
    if (vimeoId) return vimeoId;
    if (vimeoEmbedUrl) {
      const match = vimeoEmbedUrl.match(/video\/(\d+)/) || vimeoEmbedUrl.match(/vimeo\.com\/(\d+)/);
      if (match) return match[1];
    }
    return undefined;
  }, [vimeoId, vimeoEmbedUrl]);

  // Viewport intersection observer: Load video embed when within 450px of viewport
  useEffect(() => {
    if (priority || isIntersecting) return;
    const el = containerRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsIntersecting(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      { rootMargin: "450px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [priority, isIntersecting]);

  // Fetch thumbnail for Vimeo videos not in static cache
  useEffect(() => {
    if (!vimeoIdClean || VIMEO_THUMBNAILS[vimeoIdClean] || poster) return;
    let isCancelled = false;
    fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${vimeoIdClean}`)
      .then((res) => res.json())
      .then((data) => {
        if (!isCancelled && data?.thumbnail_url) {
          setDynamicPoster(data.thumbnail_url);
        }
      })
      .catch(() => {});
    return () => {
      isCancelled = true;
    };
  }, [vimeoIdClean, poster]);

  const posterSrc =
    poster ||
    (youtubeId ? `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg` : undefined) ||
    (vimeoIdClean ? VIMEO_THUMBNAILS[vimeoIdClean] || dynamicPoster : undefined);

  const isPlaceholder = !youtubeId && !driveEmbedUrl && !vimeoEmbedUrl && !vimeoId && !videoSrc && !imageSrc;

  const vimeoCleanSrc = useMemo(() => {
    if (!vimeoEmbedUrl && !vimeoId) return undefined;
    const id = vimeoIdClean;
    const autoPlayParams = autoplay
      ? "&autoplay=1&muted=1&loop=1&playsinline=1&controls=0&background=1"
      : "&controls=0";
    if (id) {
      return `https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0&badge=0&autopause=0&vimeo_logo=0&logo=0&sidedock=0&pip=0&dnt=1&transparent=0${autoPlayParams}`;
    }
    if (vimeoEmbedUrl) {
      try {
        const url = new URL(vimeoEmbedUrl);
        url.searchParams.set("title", "0");
        url.searchParams.set("byline", "0");
        url.searchParams.set("portrait", "0");
        url.searchParams.set("badge", "0");
        url.searchParams.set("vimeo_logo", "0");
        url.searchParams.set("logo", "0");
        url.searchParams.set("sidedock", "0");
        url.searchParams.set("pip", "0");
        url.searchParams.set("dnt", "1");
        url.searchParams.set("transparent", "0");
        url.searchParams.set("autopause", "0");
        url.searchParams.set("controls", "0");
        if (autoplay) {
          url.searchParams.set("autoplay", "1");
          url.searchParams.set("muted", "1");
          url.searchParams.set("loop", "1");
          url.searchParams.set("playsinline", "1");
          url.searchParams.set("background", "1");
        }
        return url.toString();
      } catch {
        return vimeoEmbedUrl;
      }
    }
    return undefined;
  }, [vimeoEmbedUrl, vimeoId, vimeoIdClean, autoplay]);

  return (
    <div className={`group flex flex-col ${className}`}>
      {/* Video / Media Outer Box */}
      <div
        ref={containerRef}
        className={`relative w-full ${aspectClass} rounded-[10px] md:rounded-[14px] overflow-hidden border border-[var(--card-border)] bg-black transition-all duration-300 group-hover:border-[var(--ink)]/30 group-hover:shadow-lg`}
      >
        {/* Instant Poster Thumbnail (Eliminates blank black box while iframe loads) */}
        {posterSrc && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={posterSrc}
            alt={title || "Video preview"}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 pointer-events-none z-0 ${
              isLoaded ? "opacity-0" : "opacity-90"
            }`}
            loading={priority ? "eager" : "lazy"}
          />
        )}

        {/* Sleek loading spinner while video is initializing */}
        {isIntersecting && !isLoaded && !isPlaceholder && (
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center bg-black/25 backdrop-blur-[1px] transition-opacity duration-500 z-10">
            <div className="w-7 h-7 rounded-full border-2 border-white/20 border-t-[var(--accent)] animate-spin" />
          </div>
        )}

        {youtubeId ? (
          <div className="relative w-full h-full bg-black flex items-center justify-center overflow-hidden">
            {isIntersecting && (
              <iframe
                className={`absolute inset-0 w-full h-full border-0 transition-opacity duration-700 ${
                  isLoaded ? "opacity-100" : "opacity-0"
                }`}
                src={`https://www.youtube-nocookie.com/embed/${youtubeId}?controls=0&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1&playsinline=1&enablejsapi=0&autoplay=${
                  isPlaying ? "1" : "0"
                }&mute=${isMuted ? "1" : "0"}&loop=1&playlist=${youtubeId}`}
                title={title || "Video presentation"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading={priority ? "eager" : "lazy"}
                onLoad={() => setIsLoaded(true)}
              />
            )}

            {/* Responsive Watermark Blocker: Guards bottom-right corner where YouTube renders the channel watermark */}
            <div
              className="absolute bottom-0 right-0 w-24 h-16 z-10 pointer-events-auto bg-transparent"
              aria-hidden="true"
            />
          </div>
        ) : vimeoCleanSrc ? (
          <div className="relative w-full h-full bg-black overflow-hidden flex items-center justify-center">
            {isIntersecting && (
              <iframe
                src={vimeoCleanSrc}
                className={
                  aspectRatio === "9:16"
                    ? `absolute inset-0 w-full h-full border-0 scale-[1.08] origin-center pointer-events-auto transition-opacity duration-700 ${
                        isLoaded ? "opacity-100" : "opacity-0"
                      }`
                    : `absolute inset-0 w-full h-full border-0 scale-[1.06] origin-center pointer-events-auto transition-opacity duration-700 ${
                        isLoaded ? "opacity-100" : "opacity-0"
                      }`
                }
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading={priority ? "eager" : "lazy"}
                onLoad={() => setIsLoaded(true)}
                title={title || "Vimeo video player"}
              />
            )}
          </div>
        ) : driveEmbedUrl ? (
          <div className="relative w-full h-full bg-black overflow-hidden flex items-center justify-center">
            {isIntersecting && (
              <iframe
                src={driveEmbedUrl}
                className={`absolute -top-[58px] left-0 w-full h-[calc(100%+58px)] border-0 scale-[1.01] pointer-events-auto transition-opacity duration-700 ${
                  isLoaded ? "opacity-100" : "opacity-0"
                }`}
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
                loading="lazy"
                title={title || "Video presentation"}
                onLoad={() => setIsLoaded(true)}
              />
            )}
          </div>
        ) : videoSrc ? (
          <video
            src={videoSrc}
            autoPlay={autoplay}
            muted={isMuted}
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        ) : imageSrc ? (
          <div className="relative w-full h-full overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageSrc}
              alt={title || "Visual project preview"}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            {href && (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-2 font-mono text-xs uppercase tracking-wider backdrop-blur-sm"
              >
                <span>View Case Study</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        ) : (
          /* Placeholder Hatch Slot */
          <div className="w-full h-full slot-hatch flex flex-col items-center justify-center p-6 text-center border border-dashed border-[var(--hair)]">
            <div className="w-10 h-10 rounded-full border border-dashed border-[var(--accent)]/50 flex items-center justify-center text-[var(--accent)] mb-3">
              <Play className="w-4 h-4 ml-0.5 opacity-80" />
            </div>
            <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[var(--ink)] font-medium">
              {placeholderLabel || "[ FORTHCOMING REEL ]"}
            </p>
            <p className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-[var(--faint)] mt-1.5">
              {placeholderSub || "Source clip in final color render"}
            </p>
          </div>
        )}

        {/* Floating Quick Action Badge */}
        {(href || driveEmbedUrl || vimeoEmbedUrl || vimeoId) && (
          <a
            href={
              href ||
              (vimeoIdClean
                ? `https://vimeo.com/${vimeoIdClean}`
                : vimeoEmbedUrl
                ? vimeoEmbedUrl.replace("player.vimeo.com/video/", "vimeo.com/").split("?")[0]
                : driveEmbedUrl?.replace("/preview", "/view"))
            }
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3 right-3 z-20 px-2.5 py-1 rounded-full bg-[var(--paper)]/90 backdrop-blur-md border border-[var(--hair)] text-[10px] font-mono tracking-wider uppercase text-[var(--ink)] opacity-0 group-hover:opacity-100 transition-all duration-200 flex items-center gap-1.5 hover:bg-[var(--accent)] hover:text-white"
          >
            <span>Open</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>

      {/* Ladybug Metadata Caption */}
      <div className="flex items-center justify-between pt-2.5 px-0.5 text-[10.5px] font-mono tracking-[0.15em] uppercase text-[var(--faint)]">
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--accent)] opacity-70" />
          <span>{caption}</span>
        </span>
        {title && (
          <span className="text-[var(--muted)] normal-case tracking-normal font-sans text-xs hidden sm:inline">
            {title}
          </span>
        )}
      </div>
    </div>
  );
};
