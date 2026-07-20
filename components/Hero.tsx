import Button from "./Button";
import FlowGraphic from "./FlowGraphic";

export default function Hero() {
  return (
    <section className="mx-auto mt-5 flex max-w-screen-2xl flex-col items-center justify-between px-6 md:mt-5 md:flex-row md:items-start md:px-8">

      {/* Linke Seite */}
      <div className="max-w-[760px] md:-ml-20 md:flex-shrink-0">

        <h1 className="text-center text-2xl font-light leading-tight text-surface-dark sm:text-5xl md:text-left md:text-6xl">
          Sie brauchen nicht noch <span className="text-accent">mehr Daten.</span>
          <br className="hidden md:block" />
          {" "}Sie brauchen ein besseres{" "}
          <span className="text-accent-secondary">Steuerungsmodell.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-[500px] text-center text-base font-light leading-relaxed text-text-primary md:mx-0 md:mt-2 md:text-xl md:text-left">
          Wir entwickeln Steuerungsmodelle für Unternehmen,
          <br className="hidden md:block" />
          {" "}mit denen die richtigen Informationen zur richtigen Zeit vorliegen.
          Wir verbessern Ihre{" "}
          <span className="text-accent-secondary">
            Entscheidungsfähigkeit.
          </span>
        </p>

        {/*
        <div className="mt-12">
          <Button text="Kontakt aufnehmen" />
        </div>
        */}

      </div>

      {/* Rechte Seite */}
      <div className="mt-6 flex justify-center md:mt-0 md:-ml-10 md:translate-x-8">
        <FlowGraphic />
      </div>

    </section>
  );
}