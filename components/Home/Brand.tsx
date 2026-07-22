import Logo from "./Logo";

type BrandProps = {
  variant?: "hero" | "header";
};

export default function Brand({ variant = "header" }: BrandProps) {
  const styles = {
    hero: {
      logo: 220,
      dividerHeight: "h-40",
      gap: "gap-10",
      title: "text-6xl",
      subtitle: "text-3xl",
      titleTracking: "tracking-[0.30em]",
      subtitleTracking: "tracking-[0.18em]",
      subtitleMargin: "mt-3 ml-[3px]",
    },

    header: {
      logo: 72,
      dividerHeight: "h-14",
      gap: "gap-6",
      title: "text-3xl",
      subtitle: "text-lg",
      titleTracking: "tracking-[0.30em]",
      subtitleTracking: "tracking-[0.18em]",
      subtitleMargin: "mt-1 ml-[2px]",
    },
  };

  const s = styles[variant];

  return (
    <div className={`flex items-center ${s.gap}`}>
      <Logo size={s.logo} />

      <div className={`${s.dividerHeight} w-[2px] bg-accent`} />

      <div className="-translate-y-[2px]">
        <h1
          className={`${s.title} font-light uppercase leading-none text-text-primary ${s.titleTracking}`}
        >
          CALANOR
        </h1>

        <p
          className={`${s.subtitle} font-extralight uppercase leading-none text-accent ${s.subtitleTracking} ${s.subtitleMargin}`}
        >
          ADVISORY
        </p>
      </div>
    </div>
  );
}