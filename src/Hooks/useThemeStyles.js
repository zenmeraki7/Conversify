import { useTheme } from '../contexts/ThemeContext';
import { themes } from '../Themes/index';

export const useThemeStyles = () => {
  const { theme } = useTheme();
  return themes[theme];
};
