type Props = {
  children: React.ReactNode;
  className?: string;
};

export const ListGroup = (props: Props) => {
  const { children, className } = props;

  return <ul className={className}>{children}</ul>;
};
