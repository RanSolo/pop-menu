import * as React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '../button';
import { MenuItem } from '@pop-menu/api-interfaces';
import ItemForm from './item-form';
import { Container, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  title: {
    paddingBottom: 0
  }
});

interface NewMenuItemProps {
  items: MenuItem[];
  setItems: React.Dispatch<React.SetStateAction<MenuItem[]>>;
}

export function NewItemButton({ items, setItems }: NewMenuItemProps) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [itemToAdd, setItemToAdd] = React.useState<MenuItem>({
    title: '',
    description: '',
    imageUrl: '',
    price: 0
  });

  const handleClickOpen = () => {
    setItemToAdd({});
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = () => {
    handleClose();
    // add to ui
    const originalItems = [...items];
    setItems([itemToAdd, ...originalItems]);
    try {
      //add items to api
      // addItem(item)
    } catch (error) {
      // if error notify user and set items back to original items in ui
      console.log('error', error);
      setItems(originalItems);
    }
  };

  return (
    <div>
      <Grid container direction="column">
        <Grid item xs={6} sm={6} md={4} lg={4} xl={3}>
          <Button text="Add Item" onClick={handleClickOpen} />
        </Grid>
      </Grid>
      <Dialog open={open} onClose={handleClose} aria-labelledby="dialog-title">
        <DialogTitle className={classes.title} id="dialog-title">
          Add Menu Item
        </DialogTitle>
        <DialogContent>
          <ItemForm item={itemToAdd} setItem={setItemToAdd} />
        </DialogContent>
        <DialogActions>
          <Container>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              spacing={8}
            >
              <Grid item xs={3}>
                <Button text="Add" onClick={handleAdd} />
              </Grid>
              <Grid item xs={6}>
                <Button text="Cancel" onClick={handleClose} color="default" />
              </Grid>
            </Grid>
          </Container>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default NewItemButton;
