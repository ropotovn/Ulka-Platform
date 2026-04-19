import { Play } from 'lucide-react';

interface VideoPlayerProps {
  title: string;
  subtitle?: string;
}

export function VideoPlayer({ title, subtitle }: VideoPlayerProps) {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900 aspect-video">
      <iframe
        src="https://rutube.ru/play/embed/331e5bb6b8db2f68efee3ae58ca31e0c/?p=6U8Cr9uNevwKksLmYkZStQ&skinColor=7fc6e3"
        className="w-full h-full"
        style={{ border: "none" }}
        allow="clipboard-write; autoplay"
        allowFullScreen
      />
    </div>
  );
}
