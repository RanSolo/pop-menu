import * as React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useTheme } from '@material-ui/core/styles';
import Button from '../button';
import { MenuItem } from '@pop-menu/api-interfaces';
import Input from '../input';
import { Grid } from '@material-ui/core';

interface NewMenuItemProps {
  item: MenuItem
  setItem: React.Dispatch<React.SetStateAction<MenuItem>>
}

export function ItemForm({item, setItem}: NewMenuItemProps) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event: any ) => {
    const { value, name } = event.target;
    setItem((old) => ({
    ...old,
    [name]: value,
  }));
    console.log('value', value);
  }

  return (
    <Grid container direction='column' justifyContent='flex-start' spacing={1}>
    <Grid item xs={12}>
      <Input 
        label={'Title'} 
        name={'title'} 
        value={item.title as string} 
        onChange={handleChange} 
      />
      </Grid>
      <Grid item xs={12}>
        <Input 
          label={'Price'} 
          name={'price'} 
          value={item.price as number} 
          onChange={handleChange} 
        />
      </Grid>
      <Grid item xs={12}>
        <Input 
          label={'Description'} 
          name={'description'} 
          value={item.description as string} 
          onChange={handleChange} 
        />
      </Grid>
      <Grid item xs={12}>      
        <Input 
          label={'Image Url'} 
          name={'imageUrl'} 
          value={item.imageUrl as string} 
          onChange={handleChange} 
        />
      </Grid>
    </Grid>
  );
}
export default ItemForm
