import Button from "./Button";
import FlowGraphic from "./FlowGraphic";

export default function Hero() {
  return (
    <section className="mx-auto mt-5 flex max-w-screen-2xl flex-col items-center justify-between px-6 lg:mt-5 lg:flex-row lg:items-start lg:px-8">

      {/* Linke Seite */}
      <div className="max-w-[760px] lg:-ml-20 lg:flex-shrink-0">

        <h1 className="text-center text-2xl font-light leading-tight text-surface-dark sm:text-5xl lg:text-left lg:text-6xl">
          Sie brauchen nicht noch {" "}<span className="text-accent">mehr Daten.</span>
          <br className="hidden lg:block" />
          {" "}Sie brauchen ein besseres{" "}
          <span className="text-accent-secondary">Steuerungsmodell.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-[500px] text-center text-base font-light leading-relaxed text-text-primary lg:mx-0 lg:mt-2 lg:text-left lg:text-xl">
          Wir entwickeln Steuerungsmodelle für Unternehmen,
          <br className="hidden lg:block" />
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
      <div className="mt-6 flex justify-center lg:mt-0 lg:-ml-10 lg:translate-x-8">
        <FlowGraphic />
      </div>

    </section>
  );
}