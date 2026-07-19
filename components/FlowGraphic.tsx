import Logo from "./Logo";

export default function FlowGraphic() {
  return (
    <div className="relative h-[500px] w-[900px]">

      {/* Logo */}
      <div className="absolute left-[250px] top-[20px]">
        <Logo size={450} />
      </div>

      {/* Strategie */}
      <p className="absolute left-0 top-[87px] w-[235px] text-right text-lg font-light text-accent-secondary">
        Strategie & 
        <br /> 
        Entscheidungen
      </p>

      {/* Daten */}
      <p className="absolute left-[90px] top-[177px] w-[145px] text-right text-lg font-light text-text-secondary">
        Daten & Prozesse
      </p>

      {/* IT */}
      <p className="absolute left-[75px] top-[252px] w-[160px] text-right text-lg font-light text-accent">
        IT & Technologie
      </p>

      {/* Ergebnis */}
      <div className="absolute left-[710px] top-[167px]">
        <p className="text-xl font-light leading-snug text-text-primary">
          Verbesserte
          <br />
          <span className="text-primary">
            Entscheidungsfähigkeit
          </span>
        </p>
      </div>

    </div>
  );
}