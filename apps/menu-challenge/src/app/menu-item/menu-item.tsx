import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import { MenuItem } from '@pop-menu/api-interfaces';
import {Grid, makeStyles } from '@material-ui/core';
import { DeleteItemButton } from '@pop-menu/ui';

const useStyles = makeStyles({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }
})

interface MenuItemProps {
  item: MenuItem
  items: MenuItem[]
  setItems: React.Dispatch<React.SetStateAction<MenuItem[]>>
}

export function Item({item, items, setItems}: MenuItemProps) {
  const classes = useStyles();
  const {  id, title, imageUrl, description, price} = item || {}

  const handleDelete = async () => {
    const originalItems = [...items];
    try {
        // Delete the item from the ui state
        const filteredItems = originalItems.filter(
          (i) => i.id !== id
        );
        setItems(filteredItems);
        // now delete the item from the database
        // return await deleteItem(itemId);
    } catch (ex) {
        // If delete fails notify the user and set the ui 
        // state back to original items
        console.error(`${ex}`);
        setItems(originalItems);
    }
  };

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      xl={2}
    >      
      <Card 
        className={classes.card}
      >
        <CardMedia
          component="img"
          height="240"
          image={imageUrl}
          alt="food item image"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
          >
            {title}
          </Typography>
          <Typography variant="body2">
            {description}
          </Typography>
          <Typography variant="body2">
            Price: ${price}
          </Typography>
        </CardContent>
        <CardActions>
          <DeleteItemButton 
            text="Remove Item"
            onDelete={handleDelete}
          />
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Item;
