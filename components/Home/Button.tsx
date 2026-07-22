type ButtonProps = {
  text: string;
};

export default function Button({ text }: ButtonProps) {
  return (
    <button
      className="
        inline-flex
        items-center
        justify-center
        rounded-xl
        bg-accent
        px-6
        py-3
        font-light
        text-text-inverse
        transition-colors
        duration-200
        hover:bg-accent-hover
        cursor-pointer
      "
    >
      {text}
    </button>
  );
}