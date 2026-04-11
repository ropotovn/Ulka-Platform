import { cn } from '../utils/cn';

type MascotSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type MascotEmotion = 'happy' | 'proud' | 'wink' | 'curious' | 'excited';
type MascotAccessory = 'cap' | 'glasses' | 'medal' | 'headphones' | 'scarf' | 'star';
type MascotPose = 'stand' | 'wave' | 'tilt';
type MascotDirection = 'left' | 'right';

interface MascotProps {
  size?: MascotSize;
  className?: string;
  emotion?: MascotEmotion;
  accessory?: MascotAccessory | MascotAccessory[];
  pose?: MascotPose;
  direction?: MascotDirection;
}

export function Mascot({
  size = 'md',
  className,
  emotion = 'happy',
  accessory,
  pose = 'stand',
  direction = 'right',
}: MascotProps) {
  const sizes: Record<MascotSize, string> = {
    xs: 'w-10 h-12',
    sm: 'w-16 h-20',
    md: 'w-24 h-32',
    lg: 'w-32 h-40',
    xl: 'w-44 h-56',
  };

  const accessories = Array.isArray(accessory) ? accessory : accessory ? [accessory] : [];
  const has = (item: MascotAccessory) => accessories.includes(item);

  const smilePath = {
    happy: 'M52 43 Q60 49 68 43',
    proud: 'M51 44 Q60 48 69 44',
    wink: 'M52 43 Q60 50 68 43',
    curious: 'M53 44 Q60 46 67 43',
    excited: 'M51 42 Q60 52 69 42',
  }[emotion];

  const leftEye = {
    happy: <><circle cx="48" cy="32" r="6" fill="white" /><circle cx="48" cy="32" r="3" fill="#1F2937" /><circle cx="49.2" cy="30.8" r="1" fill="white" /></>,
    proud: <><circle cx="48" cy="31.5" r="6" fill="white" /><circle cx="48" cy="31.5" r="3" fill="#1F2937" /><circle cx="49.2" cy="30.4" r="1" fill="white" /></>,
    wink: <path d="M43.5 31.5 Q48 28.5 52.5 31.5" stroke="#1F2937" strokeWidth="2.5" strokeLinecap="round" fill="none" />,
    curious: <><circle cx="48" cy="31.5" r="6.5" fill="white" /><circle cx="48.3" cy="31.5" r="3.2" fill="#1F2937" /><circle cx="49.3" cy="30.2" r="1" fill="white" /></>,
    excited: <><circle cx="48" cy="31" r="6.5" fill="white" /><circle cx="48" cy="31" r="3.1" fill="#1F2937" /><circle cx="49.2" cy="29.8" r="1" fill="white" /></>,
  }[emotion];

  const rightEye = {
    happy: <><circle cx="72" cy="32" r="6" fill="white" /><circle cx="72" cy="32" r="3" fill="#1F2937" /><circle cx="73.2" cy="30.8" r="1" fill="white" /></>,
    proud: <><circle cx="72" cy="31.5" r="6" fill="white" /><circle cx="72" cy="31.5" r="3" fill="#1F2937" /><circle cx="73.2" cy="30.4" r="1" fill="white" /></>,
    wink: <><circle cx="72" cy="31.5" r="6" fill="white" /><circle cx="72" cy="31.5" r="3" fill="#1F2937" /><circle cx="73.1" cy="30.3" r="1" fill="white" /></>,
    curious: <><circle cx="72" cy="31.5" r="6" fill="white" /><circle cx="72.4" cy="31.5" r="3.1" fill="#1F2937" /><circle cx="73.3" cy="30.2" r="1" fill="white" /></>,
    excited: <><circle cx="72" cy="31" r="6.5" fill="white" /><circle cx="72" cy="31" r="3.1" fill="#1F2937" /><circle cx="73.2" cy="29.8" r="1" fill="white" /></>,
  }[emotion];

  const headRotation = pose === 'tilt' ? -8 : pose === 'wave' ? 4 : 0;
  const rootTransform = direction === 'left' ? 'translate(120 0) scale(-1 1)' : undefined;

  return (
    <div className={cn(sizes[size], className)}>
      <svg viewBox="0 0 120 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
        <g transform={rootTransform}>
          <ellipse cx="60" cy="146" rx="28" ry="6" fill="#0F172A" opacity="0.08" />

          <g transform={pose === 'wave' ? 'rotate(2 60 94)' : undefined}>
            <path d="M35 128 C26 122 24 111 28 102 C31 95 36 92 41 94" stroke="#D97706" strokeWidth="5" strokeLinecap="round" opacity="0.7" />
            <circle cx="27" cy="101" r="3.5" fill="#FF8C42" opacity="0.8" />

            <ellipse cx="60" cy="124" rx="31" ry="22" fill="#FFB347" />
            <ellipse cx="60" cy="127" rx="26" ry="16" fill="#FFC76B" opacity="0.65" />

            <rect x="46" y="50" width="28" height="79" rx="12" fill="#FFB347" />
            <rect x="49" y="53" width="22" height="73" rx="10" fill="#FFC76B" opacity="0.55" />

            <circle cx="55" cy="67" r="5.5" fill="#FF8C42" opacity="0.65" />
            <circle cx="65" cy="86" r="6" fill="#FF8C42" opacity="0.65" />
            <circle cx="53" cy="105" r="4.3" fill="#FF8C42" opacity="0.65" />
            <circle cx="48" cy="123" r="6" fill="#FF8C42" opacity="0.65" />
            <circle cx="71" cy="132" r="5" fill="#FF8C42" opacity="0.65" />
            <circle cx="61" cy="126" r="4" fill="#FF8C42" opacity="0.65" />

            {has('scarf') && (
              <g>
                <path d="M43 61 C49 56 71 56 77 61 C75 68 71 70 60 70 C49 70 45 68 43 61Z" fill="#FF6B9A" />
                <path d="M64 69 L73 86" stroke="#FF6B9A" strokeWidth="6" strokeLinecap="round" />
                <circle cx="74" cy="88" r="3" fill="#FFD7E4" />
              </g>
            )}

            {has('medal') && (
              <g>
                <path d="M53 71 L58 83 L63 71" fill="#5BC0EB" opacity="0.9" />
                <path d="M57 71 L62 83 L67 71" fill="#FF6B9A" opacity="0.9" />
                <circle cx="60" cy="89" r="8.5" fill="#FBBF24" />
                <circle cx="60" cy="89" r="5" fill="#FDE68A" />
              </g>
            )}

            <rect x="38" y="139" width="8" height="18" rx="4" fill="#FFB347" />
            <rect x="50" y="143" width="8" height="14" rx="4" fill="#FFB347" />
            <rect x="63" y="143" width="8" height="14" rx="4" fill="#FFB347" />
            {pose === 'wave' ? (
              <rect x="78" y="130" width="8" height="27" rx="4" fill="#FFB347" transform="rotate(-16 78 130)" />
            ) : (
              <rect x="75" y="139" width="8" height="18" rx="4" fill="#FFB347" />
            )}
          </g>

          <g transform={`rotate(${headRotation} 60 35)`}>
            <ellipse cx="60" cy="35" rx="28" ry="22" fill="#FFB347" />
            <ellipse cx="59" cy="37" rx="22" ry="15" fill="#FFC76B" opacity="0.55" />

            <ellipse cx="31" cy="29" rx="8" ry="12" fill="#FFB347" transform="rotate(-25 31 29)" />
            <ellipse cx="89" cy="29" rx="8" ry="12" fill="#FFB347" transform="rotate(25 89 29)" />
            <ellipse cx="32" cy="31" rx="4" ry="6" fill="#FFD6A6" opacity="0.8" transform="rotate(-25 32 31)" />
            <ellipse cx="88" cy="31" rx="4" ry="6" fill="#FFD6A6" opacity="0.8" transform="rotate(25 88 31)" />

            <line x1="50" y1="18" x2="48" y2="8" stroke="#FFB347" strokeWidth="4" strokeLinecap="round" />
            <line x1="70" y1="18" x2="72" y2="8" stroke="#FFB347" strokeWidth="4" strokeLinecap="round" />
            <circle cx="48" cy="6" r="4" fill="#8B4513" />
            <circle cx="72" cy="6" r="4" fill="#8B4513" />

            {has('cap') && (
              <g>
                <path d="M36 20 C42 8 78 8 86 20 L84 24 C76 18 44 18 38 24 Z" fill="#5BC0EB" />
                <path d="M82 21 C89 22 95 25 98 29 C90 30 84 29 78 27" fill="#3AA9D4" />
                <path d="M43 18 C48 13 73 13 79 18" stroke="#DFF7FF" strokeWidth="2" strokeLinecap="round" />
              </g>
            )}

            {has('headphones') && (
              <g>
                <path d="M38 21 C42 10 78 10 82 21" stroke="#8B5CF6" strokeWidth="4" strokeLinecap="round" />
                <rect x="29" y="25" width="8" height="16" rx="4" fill="#A78BFA" />
                <rect x="83" y="25" width="8" height="16" rx="4" fill="#A78BFA" />
              </g>
            )}

            {leftEye}
            {rightEye}

            {has('glasses') && (
              <g>
                <circle cx="48" cy="32" r="9" stroke="#1F2937" strokeWidth="2.5" />
                <circle cx="72" cy="32" r="9" stroke="#1F2937" strokeWidth="2.5" />
                <line x1="57" y1="32" x2="63" y2="32" stroke="#1F2937" strokeWidth="2.5" strokeLinecap="round" />
              </g>
            )}

            <path d={smilePath} stroke="#1F2937" strokeWidth="2.3" strokeLinecap="round" fill="none" />
            {emotion === 'excited' && <circle cx="60" cy="46" r="1.8" fill="#1F2937" />}

            <ellipse cx="54" cy="40" rx="3" ry="2" fill="#FF8C42" opacity="0.5" />
            <ellipse cx="66" cy="40" rx="3" ry="2" fill="#FF8C42" opacity="0.5" />
            <circle cx="41" cy="40" r="3.3" fill="#FF8DAA" opacity="0.3" />
            <circle cx="79" cy="40" r="3.3" fill="#FF8DAA" opacity="0.3" />
          </g>

          {has('star') && (
            <g>
              <path d="M93 53 L95.8 59.4 L102.7 60.1 L97.5 64.8 L99 71.5 L93 67.9 L87 71.5 L88.5 64.8 L83.3 60.1 L90.2 59.4 Z" fill="#FBBF24" />
              <circle cx="93" cy="60.8" r="1.6" fill="#FFF7CC" />
            </g>
          )}
        </g>
      </svg>
    </div>
  );
}
