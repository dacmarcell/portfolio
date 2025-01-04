interface TitleProps {
  children: React.ReactNode;
}

export default function Title(props: TitleProps) {
  const { children } = props;
  return <h1 className="text-4xl font-semibold mt-16 mb-8">{children}</h1>;
}
