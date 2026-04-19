import { cn } from '../utils/cn';

type QRVisualSize = 'sm' | 'md' | 'lg';

interface QRVisualProps {
  size?: QRVisualSize;
  className?: string;
  withDetails?: boolean;
}

const pattern = [
  '111111100100101111111',
  '100000101001001000001',
  '101110101111101011101',
  '101110100011101011101',
  '101110101110101011101',
  '100000100010001000001',
  '111111101010101111111',
  '000000001111100000000',
  '110011101001011011010',
  '011100010111100100110',
  '001011110101011100100',
  '111000001110010011011',
  '010111011001100111000',
  '000000001010001000000',
  '111111100111101011110',
  '100000101100001100010',
  '101110101011111010111',
  '101110100110010011001',
  '101110101101011001100',
  '100000101000110010011',
  '111111101101001111101',
];

const sizes: Record<QRVisualSize, { card: string; box: number; details: string }> = {
  sm: { card: 'p-1.5 rounded-lg', box: 34, details: 'text-[8px]' },
  md: { card: 'p-2.5 rounded-2xl', box: 84, details: 'text-[10px]' },
  lg: { card: 'p-4 rounded-[28px]', box: 228, details: 'text-sm' },
};

export function QRVisual({ size = 'md', className, withDetails = false }: QRVisualProps) {
  const current = sizes[size];
  const cell = current.box / pattern.length;

  return (
    <div className={cn('bg-white shadow-[0_8px_20px_rgba(15,23,42,0.08)] border border-black/5', current.card, className)}>
      <div className="rounded-[inherit] bg-white">
        <svg
          viewBox={`0 0 ${current.box} ${current.box}`}
          width={current.box}
          height={current.box}
          className="block h-auto w-full rounded-[inherit]"
          aria-label="QR code visual"
          role="img"
        >
          <rect width={current.box} height={current.box} rx={size === 'lg' ? 22 : size === 'md' ? 16 : 8} fill="white" />
          {pattern.flatMap((row, y) =>
            row.split('').map((value, x) =>
              value === '1' ? (
                <rect
                  key={`${x}-${y}`}
                  x={x * cell}
                  y={y * cell}
                  width={cell}
                  height={cell}
                  fill="#000"
                />
              ) : null,
            ),
          )}
        </svg>
      </div>

      {withDetails && (
        <div className={cn('pt-4 text-center text-[#2F3542] leading-tight', current.details)}>
          <div className="font-medium">Осипенко Анастасия Максимовна</div>
          <div className="mt-1.5">Номер договора 5131892696</div>
        </div>
      )}
    </div>
  );
}
