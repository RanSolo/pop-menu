import { OnClick } from '@pop-menu/api-interfaces';
import { Box, Button as MuiButton, Color, TextField } from '@material-ui/core';
import { text } from 'express';
import { ChangeEventHandler } from 'react';

/* eslint-disable-next-line */
export interface UiInputProps {
  label: string
  name: string
  value: string | number
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined
}

export function Input({
  label,
  name,
  value,
  onChange, 
  }: UiInputProps) {
  return (
    <TextField 
      fullWidth
      variant="outlined"
      placeholder={label}
      name={name}
      onChange={onChange}
      defaultValue={value === 0 ? '' : value}
      label={label}
    />
  );
}

export default Input;
