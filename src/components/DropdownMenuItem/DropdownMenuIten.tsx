import './styles.scss';

type Props = {
  children: string;
  code: string;
}

export function DropdownMenuItem(props: Props) {
  return(
    <button>
      <span className="code">{props.code}</span>
      <span>{props.children}</span>
    </button>
  )
}