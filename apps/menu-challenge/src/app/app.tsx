import React, { useEffect, useState } from 'react';
import { MenuItem } from '@pop-menu/api-interfaces';

export const App = () => {
  const [item, setItem] = useState<MenuItem>({ title: '', imageUrl: '', price: 0, description: '' });

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then((r) =>setItem(r));
  }, []);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome to menu-challenge!</h1>
        <img
          width="450"
          src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png"
          alt="Nx - Smart, Extensible Build Framework"
        />
      </div>
      <h2>{item.title}</h2>
    </>
  );
};

export default App;
