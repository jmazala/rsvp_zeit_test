import React from 'react';
import PropTypes from 'prop-types';

import { Consumer } from './context';
import GuestName from './GuestName';

const Guest = ({ id }) => {
  return (
    <Consumer>
      {({ methods, guests, actions }) => {
        const guest = methods.getGuestById(id);
        return (
          <li className={guest.isConfirmed ? 'pending' : 'responded'}>
            <GuestName id={id} />
            <label>
              <input type="checkbox" onChange={() => actions.confirmGuest(id)} checked={guest.isConfirmed} />
              Confirmed
            </label>
            <button onClick={() => actions.editGuest(id)}>{guest.isEditing ? 'save' : 'edit'}</button>
            <button onClick={() => actions.removeGuest(id)}>remove</button>
          </li>
        );
      }}
    </Consumer>
  );
};

Guest.propTypes = {
  id: PropTypes.number.isRequired
};

export default Guest;