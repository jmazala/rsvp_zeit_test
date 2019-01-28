import React from 'react';
import { Consumer } from './context';

const PendingGuest = () => {
  return (
    <Consumer>
      {({ pendingGuestName }) => {
        if (!pendingGuestName) {
          return;
        }

        return (
          <li className="pending">
            <span>{pendingGuestName}</span>
          </li>
        );
      }}
    </Consumer>
  );
};

export default PendingGuest;