import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { MenuItem } from '@pop-menu/api-interfaces';
import {Grid, makeStyles } from '@material-ui/core';
import { DeleteItemButton } from '@pop-menu/ui';

const useStyles = makeStyles({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  cardMedia: {
    height: '12em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    textAlign: 'left'
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    textAlign: 'left'
  },
  cardActions: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  editIcon: {
    float: 'right'
  }
});

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
    <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
      <Card className={classes.card}>
        <CardMedia
          component="img"
          className={classes.cardMedia}
          image={imageUrl}
          alt="food item image"
        />

        <CardContent className={classes.cardContent}>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            spacing={1}
          >
            <Grid item xs={12}>
            </Grid>

            <Grid item xs={12}>
            </Grid>

            <Grid item xs={12}>
            </Grid>
          </Grid>
        </CardContent>

        <CardActions className={classes.cardActions}>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Item;
