// extras
import { SpinnerContainer } from './Spinner.styles';

export type Size = 'small' | 'medium' | 'large';

type SpinnerProps = {
  size?: Size;
};

function Spinner({ size = 'medium' }: SpinnerProps) {
  return <SpinnerContainer $size={size} />;
}

export default Spinner;
