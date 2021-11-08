import { OnClick } from '@pop-menu/api-interfaces';
import { Button as MuiButton, Color } from '@material-ui/core';

/* eslint-disable-next-line */
export interface UiButtonProps {
  text: string
  onClick: OnClick
  color?: string
  variable?: string
}

export function Button({
  text, 
  onClick, 
  color='primary', 
  variable = ''
  }: UiButtonProps) {
  return (
    <MuiButton 
      fullWidth
      variant="contained"
      color={color as any}
      onClick={onClick}
      size="large"
    >
      {text}
    </MuiButton>
  );
}

export default Button;
