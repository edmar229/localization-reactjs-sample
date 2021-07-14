import { DropdownMenu } from '../../components/DropdownMenu/DropdownMenu';
import { Translation } from '../../components/Translation/Translation';
import { useLanguage } from '../../hooks/useLanguage';

import './style.scss';

export function Home() {
  const { locale } = useLanguage();

  return (
    <div className="container">
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