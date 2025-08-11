interface ChipProps {
  element: string;
}

export default function Chip({ element }: ChipProps) {
  return (
    <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-700 dark:text-green-100 text-sm font-medium rounded-full">
      {element}
    </span>
  );
}
