type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Title = (props: Props) => {
  const { children, className } = props;

  return <h1 className={`text-3xl sm:text-4xl lg:text-5xl ${className}`}>{children}</h1>;
};
