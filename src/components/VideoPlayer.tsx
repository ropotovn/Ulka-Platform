import { Play } from 'lucide-react';

interface VideoPlayerProps {
  title: string;
  subtitle?: string;
}

export function VideoPlayer({ title, subtitle }: VideoPlayerProps) {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900 aspect-video">
      <iframe
        src="https://rutube.ru/video/private/818504848d85e4826521d6cf2590182e/?r=wd&p=Tpf4kBVAibq16v2pLKIpsQ"
        className="w-full h-full"
        style={{ border: "none" }}
        allow="clipboard-write; autoplay"
        allowFullScreen
        title={title || "ULKA Platform video"}
      />
    </div>
  );
}

