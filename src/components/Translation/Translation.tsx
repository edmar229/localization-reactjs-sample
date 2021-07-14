import { FormattedMessage } from 'react-intl';
import { getDefaultMessage } from '../../utils/translationHelper';

type TranslationProps = {
  id: string;
}

// Wrapper on <FormattedMessage /> to always fallback to English
// Use this component for any user-facing string
export function Translation({id} : TranslationProps) {
  return(
    <FormattedMessage id={id} defaultMessage={getDefaultMessage(id)}/>
  )
}