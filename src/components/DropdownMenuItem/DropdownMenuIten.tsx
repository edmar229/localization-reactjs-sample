import { useLanguage } from '../../hooks/useLanguage';
import { useTheme } from '../../hooks/useTheme';

import './styles.scss';

type Props = {
  children: string;
  code: string;
}

export function DropdownMenuItem(props: Props) {
  const { changeLanguage } = useLanguage();
  const { theme } = useTheme();

  function setLanguage() {
    changeLanguage(props.code);
    localStorage.setItem('languageCode', props.code);
  }
  
  return(
    <button onClick={setLanguage} className={`${theme}`}>
      <span className={`code ${theme}`}>{props.code}</span>
      <span>{props.children}</span>
    </button>
  )
}