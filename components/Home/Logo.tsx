import Image from "next/image";

type LogoProps = {
  size?: number;
  className?: string;
};

export default function Logo({
  size = 72,
  className = "",
}: LogoProps) {
  return (
    <Image
      src="/Logo.svg"
      alt="Calanor Advisory Logo"
      width={size}
      height={size}
      priority
      className={className}
    />
  );
}