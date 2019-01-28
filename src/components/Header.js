import React from 'react';

import AddGuestForm from './AddGuestForm';

const Header = () => {
  return (
    <header>
      <h1>RSVP</h1>
      <p>A Treehouse App</p>
      <AddGuestForm />
    </header>
  );
};

export default Header;