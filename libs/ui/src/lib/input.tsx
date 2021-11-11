import { OnClick } from '@pop-menu/api-interfaces';
import {
  Box,
  Button as MuiButton,
  Color,
  makeStyles,
  TextField
} from '@material-ui/core';
import { text } from 'express';
import { ChangeEventHandler } from 'react';

const useStyles = makeStyles({
  input: {
    marginTop: 0
  }
});

/* eslint-disable-next-line */
export interface UiInputProps {
  label: string;
  name: string;
  value: string | number;
  onChange:
    | ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  adornment?: JSX.Element | undefined;
  multiline?: boolean;
}

export function Input({
  label,
  name,
  value,
  onChange,
  adornment,
  multiline
}: UiInputProps) {
  const classes = useStyles();
  return (
    <TextField
      fullWidth
      variant="standard"
      placeholder={label}
      name={name}
      onChange={onChange}
      defaultValue={value === 0 ? '' : value}
      label={label}
      margin="dense"
      multiline={multiline}
      InputProps={{
        endAdornment: adornment,
        className: classes.input,
        'aria-label': 'input'
      }}
    />
  );
}

export default Input;
