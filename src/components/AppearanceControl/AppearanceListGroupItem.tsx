import { useEffect, useState } from 'react';

import { ListGroupItem } from '@src/components/ListGroup';
import { AppearanceMode } from '@src/types';

type ListItemType = 'default' | 'first' | 'last';

type Props = {
  mode: AppearanceMode;
  icon: string;
  active?: boolean;
  type?: ListItemType;
  onClick?: () => void;
};

export const AppearanceListGroupItem = (props: Props) => {
  const { mode, icon, active = false, type = 'default', onClick } = props;

  const baseStyle = 'w-full px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800';
  const bottomBorderStyle = 'border-b border-gray-200 dark:border-gray-700';
  const firstItemStyle = `rounded-t-lg ${bottomBorderStyle}`;
  const lastItemStyle = 'rounded-b-lg';
  const activeStyle = 'text-red-500 dark:text-red-400 font-medium';

  const [style, setStyle] = useState(baseStyle);

  useEffect(() => {
    setStyle(`${baseStyle}
    ${type == 'first' ? firstItemStyle : type === 'last' ? lastItemStyle : bottomBorderStyle}
    ${active ? activeStyle : ''}`);
  }, [active, firstItemStyle, type]);

  return (
    <ListGroupItem onClick={onClick} className={style}>
      <span className="mr-4">
        <i className={icon} />
      </span>
      <span className="capitalize">{mode}</span>
    </ListGroupItem>
  );
};
