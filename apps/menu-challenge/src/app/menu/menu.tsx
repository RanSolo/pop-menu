import { OnClick, MenuItem } from '@pop-menu/api-interfaces';
import { Item } from '../menu-item/menu-item';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { useEffect, useState } from 'react';

export function Menu() {
  const [items, setItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then((r) => setItems(r));
  }, []);

  return (
    <div>
      <Container maxWidth="xl">
        <h1>Menu</h1>
        <Grid container direction='row' spacing={2}>
          {items.map((item) => (
            <Item 
              key={item?.title} 
              item={item} 
              items={items} 
              setItems={setItems} 
            />
          ))}  
        </Grid>
      </Container>
    </div>
  );
}

export default Menu;
