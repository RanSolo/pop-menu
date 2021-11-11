import { OnClick, MenuItem, EditControls } from '@pop-menu/api-interfaces';
import { NewItemButton } from '@pop-menu/ui';
import { Item } from '../menu-item/menu-item';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
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
        <Grid container direction="column" justifyContent="flex-start">
          <Grid item>
            <h1>Menu</h1>
          </Grid>
          <Grid item>
            <NewItemButton items={items} setItems={setItems} />
          </Grid>
        </Grid>
        <Grid container direction="row" spacing={2}>
          {items.map((item) => (
            <Item
              key={`${item?.id}`}
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
