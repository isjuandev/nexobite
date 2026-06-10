import Image from "next/image";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  markClassName?: string;
  showWordmark?: boolean;
}

export function BrandLogo({
  className,
  markClassName,
  showWordmark = true,
}: BrandLogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <span className={cn("relative block shrink-0", markClassName)}>
        <Image
          src="/logo-mark-dark.svg"
          width={34}
          height={30}
          alt=""
          className="object-contain"
          aria-hidden="true"
        />
      </span>
      {showWordmark && (
        <span className="font-display text-lg font-medium tracking-tight text-foreground">
          Nexobite
        </span>
      )}
    </span>
  );
}
