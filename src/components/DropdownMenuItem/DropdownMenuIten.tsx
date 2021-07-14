import { useLanguage } from '../../hooks/useLanguage';

import './styles.scss';

type Props = {
  children: string;
  code: string;
}

export function DropdownMenuItem(props: Props) {
  const { changeLanguage } = useLanguage();

  function setLanguage() {
    changeLanguage(props.code);
    localStorage.setItem('languageCode', props.code);
  }
  
  return(
    <button onClick={setLanguage}>
      <span className="code">{props.code}</span>
      <span>{props.children}</span>
    </button>
  )
}