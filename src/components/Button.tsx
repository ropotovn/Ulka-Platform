import { cn } from '../utils/cn';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement> & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className,
  href,
  ...props 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-[#5BC0EB] text-white hover:bg-[#4AB0DB] focus:ring-[#5BC0EB] active:scale-[0.98]',
    secondary: 'bg-[#FF6B9A] text-white hover:bg-[#E85A88] focus:ring-[#FF6B9A] active:scale-[0.98]',
    outline: 'border-2 border-[#5BC0EB] text-[#5BC0EB] hover:bg-[#5BC0EB]/5 focus:ring-[#5BC0EB]',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
}
