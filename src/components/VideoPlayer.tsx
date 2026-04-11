import { Play } from 'lucide-react';

interface VideoPlayerProps {
  title: string;
  subtitle?: string;
}

export function VideoPlayer({ title, subtitle }: VideoPlayerProps) {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900 aspect-video group cursor-pointer">
      {/* Video placeholder with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#5BC0EB]/20 via-[#FF6B9A]/10 to-[#3ED598]/20" />
      
      {/* Mock video content - children playing */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center p-8">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Play className="w-8 h-8 text-white ml-1" fill="white" />
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 inline-block">
            <h3 className="text-white font-bold text-xl mb-1">{title}</h3>
            {subtitle && <p className="text-white/80 text-sm">{subtitle}</p>}
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-4 left-4 flex gap-2">
        <div className="w-3 h-3 rounded-full bg-[#FF6B9A]" />
        <div className="w-3 h-3 rounded-full bg-[#5BC0EB]" />
        <div className="w-3 h-3 rounded-full bg-[#3ED598]" />
      </div>
      
      {/* Corner decorations */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#5BC0EB]/20 rounded-tr-full" />
      <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF6B9A]/20 rounded-bl-full" />
    </div>
  );
}
