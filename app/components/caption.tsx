import Balancer from "react-wrap-balancer";
import type { ReactNode } from "react";

interface CaptionProps {
  children: ReactNode;
  align?: 'left' | 'center' | 'right';
}

export function CaptionComponent({ children, align = 'center' }: CaptionProps) {
  const alignClass = align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center';

  return (
    <span className={`block w-full text-xs my-3 font-mono text-gray-500 ${alignClass} leading-normal`}>
      <Balancer>
        <span className="[&>a]:post-link">{children}</span>
      </Balancer>
    </span>
  );
}
