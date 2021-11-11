import React, { MouseEventHandler, useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/save';
import CancelIcon from '@material-ui/icons/Cancel';
import Typography from '@material-ui/core/Typography';
import { EditControls, MenuItem } from '@pop-menu/api-interfaces';
import { Button, DeleteItemButton, Input } from '@pop-menu/ui';
import IconButton from '@material-ui/core/IconButton';

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
  item: MenuItem;
  items: MenuItem[];
  setItems: React.Dispatch<React.SetStateAction<MenuItem[]>>;
}

export function Item({ item, items, setItems }: MenuItemProps) {
  const classes = useStyles();
  const { id, title, imageUrl, description, price } = item || {};

  const handleDelete = async () => {
    const originalItems = [...items];
    try {
      // Delete the item from the ui state
      const filteredItems = originalItems.filter((i) => i.id !== id);
      setItems(filteredItems);
      // now delete the item from the database
      // return await deleteItem(itemId);
    } catch (ex) {
      // If delete fails notify the user and set the ui
        // If delete fails notify the user and set the ui 
      // If delete fails notify the user and set the ui
      // state back to original items
      console.error(`${ex}`);
      setItems(originalItems);
    }
  };

  const getItem = (clonedItems: MenuItem[]) =>
    clonedItems.find((i) => i.id === id) || ({} as MenuItem);

  const handleChange = (event: any) => {
    const clonedItems = [...items];
    const { value, name } = event.target;
    const item = getItem(clonedItems);
    item[name as keyof typeof item] = value;

    setItems(clonedItems);
  };

  const renderEditSaveBtns = (
    name: string,
    controlName: string,
    value: string | number
  ) =>
    editControls && editControls[controlName] ? (
      ''
    ) : (
      <IconButton
        aria-label="edit-btn"
        size="small"
        className={classes.editIcon}
        onClick={(e: any) => handleEditClick(e, controlName)}
      >
    >      
      >
        <EditIcon />
      </IconButton>
    );

  const renderEditableInline = (
    name: string,
    controlName: string,
    label: string,
    value: string | number,
    variant = 'body2',
    multiline = false
  ) => (
    <Typography variant={variant as any} component="div">
      {editControls && editControls[controlName] ? (
        <Input
          label=""
          name={name as string}
          value={value as string}
          onChange={handleChange}
          multiline={multiline}
          adornment={
            <IconButton
              size="small"
              onClick={(e) => {
                handleCancelClick(e, controlName);
              }}
            >
              <CancelIcon />
            </IconButton>
          }
        />
      ) : name === 'price' ? (
        `Price: $${value}`
      ) : (
        value
      )}
      &nbsp;&nbsp;
      {renderEditSaveBtns(name as string, controlName, value)}
    </Typography>
  );

  return (
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
          <Grid container alignContent="flex-end">
            <DeleteItemButton text="Remove Item" onDelete={handleDelete} />
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Item;
