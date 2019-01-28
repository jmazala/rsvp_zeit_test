import React from 'react';
import { Consumer } from './context';
import Guest from './Guest';
import PendingGuest from './PendingGuest';

const GuestList = () => {
  return (
    <ul>
      <PendingGuest />
      <Consumer>
        {({ guests, methods, isFiltered }) => {
          const guestsToDisplay = isFiltered ? methods.getConfirmedGuests : guests;
          return guestsToDisplay.map((guest) => <Guest id={guest.id} />);
        }
        }
      </Consumer>
    </ul>
  );
};

export default GuestList;