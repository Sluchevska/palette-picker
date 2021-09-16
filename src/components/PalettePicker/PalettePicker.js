import { ColorPicker, useColor } from 'react-color-palette';
import 'react-color-palette/lib/css/styles.css';
import { useTheme } from '../../context/theme';
export const PalettePicker = () => {
  const { theme, updateTheme, resetTheme } = useTheme();
  const [pColor, setPColor] = useColor('hex', theme.colors.primary);
  const [sColor, setSColor] = useColor('hex', theme.colors.secondary);

  const updatePrimaryColor = color => {
    setPColor(color);
    updateTheme({
      colors: { primary: color.hex },
    });
  };

  const updateSecondaryColor = color => {
    setSColor(color);
    updateTheme({
      colors: { secondary: color.hex },
    });
  };

  return (
    <>
      <button onClick={resetTheme}>Reset theme</button>
      <div style={{ display: 'flex', gap: 20 }}>
        <div>
          <p>
            Select <b>BUTTON BACKGROUND</b> color
          </p>
          <ColorPicker
            width={300}
            height={200}
            color={pColor}
            onChange={updatePrimaryColor}
            hideHSV
            dark
          />
        </div>

        <div>
          <p>
            Select <b>BUTTON TEXT</b> color
          </p>
          <ColorPicker
            width={300}
            height={200}
            color={sColor}
            onChange={updateSecondaryColor}
            hideHSV
            dark
          />
        </div>
      </div>
    </>
  );
};