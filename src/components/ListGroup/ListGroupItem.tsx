type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export const ListGroupItem = (props: Props) => {
  const { children, className, onClick } = props;

  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <li onClick={handleClick} className={className}>
      {children}
    </li>
  );
};
