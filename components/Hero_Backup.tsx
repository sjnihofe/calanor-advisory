import Button from "./Button";
import FlowGraphic from "./FlowGraphic";

export default function Hero() {
  return (
    <section className="mx-auto mt-5 flex max-w-screen-2xl items-start justify-between px-8">

      {/* Linke Seite */}
      <div className="max-w-[760px] -ml-20 flex-shrink-0">

        <h1 className="text-6xl font-light leading-tight text-surface-dark">
          Bessere Entscheidungen
          <br />
          beginnen mit dem richtigen
          <br />
          <span className="text-accent">Informationsfluss.</span>
        </h1>

        <p className="mt-2 max-w-[500px] text-xl font-light leading-relaxed text-text-primary">
          Wir verstehen Ihre Fragestellungen und verbessern
          <br /> 
          <span className="text-accent-secondary">
            {" "}Ihre Entscheidungsfähigkeit{" "}
          </span>
          
          indem wir die richtigen Informationen zur richtigen Zeit zu Ihren Entscheidern
          bringen.
        </p>

        {/* 
        <div className="mt-12">
          <Button text="Kontakt aufnehmen" />
        </div>
        */}

      </div>

      {/* Rechte Seite */}
      <div className="-mt-0.8  -ml-10 translate-x-8">
          <FlowGraphic />
      </div>

    </section>
  );
}