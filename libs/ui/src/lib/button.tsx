import { OnClick } from '@pop-menu/api-interfaces';
import { Button as MuiButton, Color } from '@material-ui/core';

/* eslint-disable-next-line */
export type UiButtonProps = {
  text: string
  onClick: any
  color?: string
  variable?: string
  name?: string
}

export function Button({
  text, 
  onClick, 
  color='primary', 
  variable = '',
  name= ''
  }: UiButtonProps) {
  return (
    <MuiButton 
      fullWidth
      variant="contained"
      color={color as any}
      onClick={(e) => onClick(e, name)}
      size="large"
    >
      {text}
    </MuiButton>
  );
}

export default Button;
