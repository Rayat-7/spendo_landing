"use client";
import React, { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Maximize2, X } from "lucide-react";
import { useInView } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
// Simple hook to detect mobile devices
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
}

type VideoSectionProps = {
  videoId: string;
  title?: string;
  description?: string;
};

const VideoSection: React.FC<VideoSectionProps> = ({
  videoId,
  title = "Spendo in Action",
  description = "Watch our demo video to discover how Spendo can transform your financial management.",
}) => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLIFrameElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.25 });
  const isMobile = useIsMobile();
  
  // Load YouTube API
  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
  }, []);

  // Handle loading state
  useEffect(() => {
    if (isInView) {
      // Set a timeout to ensure the placeholder shows for at least a moment
      // This improves perceived performance
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full py-20 bg-tekgeo-darker overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mt-6 mx-auto text-center mb-10  flex-col items-center justify-center">
          <h2 className="text-xl md:text-4xl font-semibold text-gradient-blue mb-4">
            {title}
          </h2>
          <p className="text-lg text-slate-400 mb-8">
            {description}
          </p>
        </div>
        <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-xl shadow-[0px_20px_207px_0px_rgba(93,_6,_164,_0.51)] overflow-hidden  glass-card border-4 border-violet-500 hover:border-5 hover:border-violet-400">
          {/* Placeholder or Preview */}
          {isLoading && (
            <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
              <img 
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} 
                alt="Video thumbnail"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Skeleton className="h-16 w-16 rounded-full bg-tekgeo-blue/20" />
              </div>
            </div>
          )}
          
          {/* Silent Autoplay Video with extra parameters to hide UI elements */}
          {isInView && (
            <iframe
              ref={videoRef}
              src={`https://www.youtube.com/embed/${videoId}?start=13&autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&loop=1&playlist=${videoId}&iv_load_policy=3&fs=0&disablekb=1&origin=${window.location.origin}&enablejsapi=1&playsinline=1&color=white&hl=en&cc_load_policy=0&autohide=1`}
              title="Silent preview video"
              className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onLoad={() => {
                // Give a slight delay before removing the loading state
                // to ensure the video has actually started playing
                setTimeout(() => setIsLoading(false), 300);
              }}
            ></iframe>
          )}
          
          {/* Custom expand button */}
          <button 
            onClick={() => setOpen(true)}
            aria-label="Open full video"
            className="absolute bottom-4 right-4 p-2 bg-violet-500 rounded-full hover:bg-tekgeo-blue-light transition-colors z-10 group"
          >
            <Maximize2 className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>
          
        </div>
        
        
        
      </div>

      {/* Full-screen video dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className={`p-0 bg-black border-none ${isMobile ? 'max-w-[95vw] h-auto aspect-[9/16]' : 'max-w-6xl w-[90vw] h-[80vh]'}`}>
          <div className="w-full h-full relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 z-50 p-2 bg-black/60 hover:bg-black/80 rounded-full transition-colors"
              aria-label="Close video"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&iv_load_policy=3&fs=1&playsinline=1&color=white&hl=en&cc_load_policy=0`}
              title="YouTube video player"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </DialogContent>
        
      </Dialog>
      
    </section>
  );
};

export default VideoSection;


// export const VideoSection = () => {
//   return (
//     <div className="relative -mt-[30px] py-16 md:py-24 ">
//       <div className="container  px-4 sm:px-6 lg:px-8">
//         <div className="mx-auto max-w-4xl">
//           {/* Video Container with Violet Border */}
//           <div className="relative w-full max-w-3xl mx-auto">
//             <div className="relative aspect-video w-full overflow-hidden rounded-lg border-[5px] border-violet-700 bg-gray-100 dark:bg-gray-900 shadow-2xl">
//               <iframe
//                 src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
//                 title="Spendo AI Demo"
//                 className="absolute inset-0 h-full w-full rounded-[3px]"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }