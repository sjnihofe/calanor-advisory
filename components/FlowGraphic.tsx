import Logo from "./Logo";

export default function FlowGraphic() {
  return (
    <div className="relative mx-auto h-[220px] w-[280px] md:h-[500px] md:w-[900px]">

      {/* Logo */}
      <div className="absolute left-[45px] top-[5px] md:left-[250px] md:top-[20px]">
        <Logo
          size={450}
          className="w-[170px] h-auto md:w-[450px]"
        />
      </div>

      {/* Strategie */}
      <p className="absolute left-[-30px] top-[32px] w-[70px] text-right text-[9px] font-light leading-tight text-accent-secondary md:left-0 md:top-[92px] md:w-[235px] md:text-lg">
        Strategie &
        <br />
        Entscheidungen
      </p>

      {/* Daten */}
      <p className="absolute left-[-9px] top-[60px] w-[48px] text-right text-[9px] font-light leading-tight text-text-secondary md:left-[90px] md:top-[172px] md:w-[145px] md:text-lg">
        Daten &
        <br />
        Prozesse
      </p>

      {/* IT */}
      <p className="absolute left-[-17px] top-[89px] w-[55px] text-right text-[9px] font-light leading-tight text-accent md:left-[75px] md:top-[248px] md:w-[160px] md:text-lg">
        IT &
        <br />
        Technologie
      </p>

      {/* Ergebnis */}
      <div className="absolute left-[220px] top-[56px] md:left-[710px] md:top-[166px]">
        <p className="text-[10px] font-light leading-snug text-text-primary md:text-xl">
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