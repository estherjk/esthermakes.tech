import { AppearanceListGroupItem } from '@src/components/AppearanceControl';
import { ListGroup } from '@src/components/ListGroup';
import { appearanceControls } from '@src/data';
import { AppearanceControls, AppearanceMode } from '@src/types';

type Props = {
  mode: AppearanceMode;
  onModeSelected: (mode: AppearanceMode) => void;
};

export const AppearanceListGroup = (props: Props) => {
  const { mode, onModeSelected } = props;

  return (
    <ListGroup className="rounded-lg border border-gray-200 dark:border-gray-700">
      {Object.keys(appearanceControls).map((item, index) => {
        const modeKey: keyof AppearanceControls = item as AppearanceMode;

        if (index === 0) {
          return (
            <AppearanceListGroupItem
              key={modeKey}
              type="first"
              mode={modeKey}
              icon={appearanceControls[modeKey].icon}
              active={mode === modeKey ? true : false}
              onClick={() => onModeSelected(modeKey)}
            />
          );
        } else if (index === Object.keys(appearanceControls).length - 1) {
          return (
            <AppearanceListGroupItem
              key={modeKey}
              type="last"
              mode={modeKey}
              icon={appearanceControls[modeKey].icon}
              active={mode === modeKey ? true : false}
              onClick={() => onModeSelected(modeKey)}
            />
          );
        } else {
          return (
            <AppearanceListGroupItem
              key={item}
              mode={modeKey}
              icon={appearanceControls[modeKey].icon}
              active={mode === modeKey ? true : false}
              onClick={() => onModeSelected(modeKey)}
            />
          );
        }
      })}
    </ListGroup>
  );
};
