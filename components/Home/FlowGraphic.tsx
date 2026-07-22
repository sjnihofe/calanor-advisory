import Logo from "./Logo";

export default function FlowGraphic() {
  return (
    <div className="relative mx-auto h-[220px] w-[280px] lg:h-[500px] lg:w-[900px]">

      {/* Logo */}
      <div className="absolute left-[45px] top-[5px] lg:left-[250px] lg:top-[20px]">
        <Logo
          size={450}
          className="h-auto w-[170px] lg:w-[450px]"
        />
      </div>

      {/* Strategie */}
      <p className="absolute left-[-30px] top-[32px] w-[70px] text-right text-[9px] font-light leading-tight text-accent-secondary lg:left-0 lg:top-[92px] lg:w-[235px] lg:text-lg">
        Strategie &
        <br />
        Entscheidungen
      </p>

      {/* Daten */}
      <p className="absolute left-[-9px] top-[60px] w-[48px] text-right text-[9px] font-light leading-tight text-text-secondary lg:left-[90px] lg:top-[172px] lg:w-[145px] lg:text-lg">
        Daten &
        <br />
        Prozesse
      </p>

      {/* IT */}
      <p className="absolute left-[-17px] top-[89px] w-[55px] text-right text-[9px] font-light leading-tight text-accent lg:left-[75px] lg:top-[248px] lg:w-[160px] lg:text-lg">
        IT &
        <br />
        Technologie
      </p>

      {/* Ergebnis */}
      <div className="absolute left-[220px] top-[56px] lg:left-[710px] lg:top-[166px]">
        <p className="text-[10px] font-light leading-snug text-text-primary lg:text-xl">
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