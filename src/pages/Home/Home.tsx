import { DropdownMenu } from '../../components/DropdownMenu/DropdownMenu';
import { ThemeSwitcherButton } from '../../components/ThemeSwitcherButton/ThemeSwitcherButton';
import { Translation } from '../../components/Translation/Translation';
import { useLanguage } from '../../hooks/useLanguage';

import './style.scss';

export function Home() {
  const { locale } = useLanguage();

  return (
    <div className="container">
      <ThemeSwitcherButton/>
      
      <div className="language-code">
        <h1>{locale.toUpperCase()}</h1>
      </div>

      <h1 className="translation-text">
        <Translation id="app.message"/>
      </h1>

      <DropdownMenu/>
    </div>
  )
}