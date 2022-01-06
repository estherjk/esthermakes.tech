import { useState } from 'react';

import { AppearanceListGroupItem } from '@src/components/AppearanceListGroup';
import { ListGroup } from '@src/components/ListGroup';
import { appearanceControls } from '@src/data';
import { ApperanceMode } from '@src/types';

export const AppearanceListGroup = () => {
  const [mode, setMode] = useState<ApperanceMode>('system');

  const onModeSelected = (mode: ApperanceMode) => {
    setMode(mode);
    console.log(`Selected ${mode}`);
  };

  return (
    <ListGroup className="rounded-lg border border-gray-200 dark:border-gray-700">
      {appearanceControls.map((item, index) => {
        if (index === 0) {
          return (
            <AppearanceListGroupItem
              key={item.mode}
              type="first"
              mode={item.mode}
              icon={item.icon}
              active={mode === item.mode ? true : false}
              onClick={() => onModeSelected(item.mode)}
            />
          );
        } else if (index === appearanceControls.length - 1) {
          return (
            <AppearanceListGroupItem
              key={item.mode}
              type="last"
              mode={item.mode}
              icon={item.icon}
              active={mode === item.mode ? true : false}
              onClick={() => onModeSelected(item.mode)}
            />
          );
        } else {
          return (
            <AppearanceListGroupItem
              key={item.mode}
              mode={item.mode}
              icon={item.icon}
              active={mode === item.mode ? true : false}
              onClick={() => onModeSelected(item.mode)}
            />
          );
        }
      })}
    </ListGroup>
  );
};
