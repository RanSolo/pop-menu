import * as React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useTheme } from '@material-ui/core/styles';
import { OnClick } from '@pop-menu/api-interfaces';
import Button from '../button';

interface DeleteMenuItem {
  text: string
  onDelete: any
}

export function DeleteItemButton({text, onDelete}: DeleteMenuItem) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    handleClose()
    onDelete()
  }

  return (
    <div>
      <Button text="Remove Item" onClick={handleClickOpen} />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Confirm Delete?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Confirm you wish to delete item {text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button 
            text="Cancel"
            onClick={handleClose}
            color="default"
          />
          <Button 
            text="Delete"
            onClick={handleDelete}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default DeleteItemButton
