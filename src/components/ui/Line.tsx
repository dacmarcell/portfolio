interface LineProps {
  color?: string;
  width?: string;
}

export default function Line({ color, width }: LineProps) {
  return (
    <hr
      className={`
          ${width ? width : "w-full"}
          border-t-2
          border-solid
          border-foreground
          dark:border-background
          rounded-full
          sm:w-1/4
          dark:border-opacity-50
          my-5
          ${color ? color : "border-green-800"}
        `}
    />
  );
}
