import React from 'react';
import PropTypes from 'prop-types';

import { Consumer } from './context';

const GuestName = ({ id, children }) => {
  return (
    <Consumer>
      {({ methods, actions, guests }) => {
        let guest = methods.getGuestById(id);

        if (guest.isEditing) {
          return (
            <input type="text" value={children} placeholder={guest.name}
              onChange={event => actions.changeGuestName(id, event.target.value)} />
          );
        }

        return (<span >{guest.name}</span>);
      }}
    </Consumer>
  );
};

GuestName.propTypes = {
  id: PropTypes.number.isRequired,
  children: PropTypes.object
};

export default GuestName;