import { DropdownMenu } from '../../components/DropdownMenu/DropdownMenu';

import './style.scss';

export function Home() {
  return (
    <div className="container">
      <div className="language-code">
        <h1>PT-BR</h1>
      </div>
      <h1>Sample text</h1>
      <DropdownMenu/>
    </div>
  )
}