interface ChipProps {
  element: string;
}

export default function Chip({ element }: ChipProps) {
  return (
    <span className="px-3 py-1 dark:bg-green-100 text-green-100 bg-green-700 dark:text-green-700 text-sm font-medium rounded-full">
      {element}
    </span>
  );
}
