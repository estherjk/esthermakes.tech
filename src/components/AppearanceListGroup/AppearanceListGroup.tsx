import { AppearanceListGroupItem } from '@src/components/AppearanceListGroup';
import { ListGroup } from '@src/components/ListGroup';
import { appearanceControls } from '@src/data';
import { useAppearance } from '@src/hooks';
import { AppearanceControls, AppearanceMode } from '@src/types';

export const AppearanceListGroup = () => {
  const [mode, setMode] = useAppearance(AppearanceMode.SYSTEM);

  const onModeSelected = (mode: AppearanceMode) => {
    setMode(mode);
  };

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
