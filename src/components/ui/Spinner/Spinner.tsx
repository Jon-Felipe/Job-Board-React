// extras
import { SpinnerContainer } from './Spinner.styles';

export type Size = 'small' | 'medium' | 'large';
export type Variant = 'primary' | 'secondary' | 'success' | 'danger';

type SpinnerProps = {
  size?: Size;
  variant?: Variant;
};

function Spinner({ size = 'medium', variant = 'primary' }: SpinnerProps) {
  return <SpinnerContainer $size={size} $variant={variant} />;
}

export default Spinner;
