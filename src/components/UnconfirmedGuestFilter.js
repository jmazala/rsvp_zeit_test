import React, { Fragment } from 'react';

import { Consumer } from './context';

const UnconfirmedGuestFilter = () => {
  return (
    <div>
      <h2>Invitees</h2>
      <label>
        <Consumer>
          {({ isFiltered, actions }) => {
            return (
              <Fragment>
                <input checked={isFiltered} onChange={actions.hideUnconfirmed} type="checkbox" />
                Hide those who haven't responded
          </Fragment>
            );
          }}
        </Consumer>
      </label>
    </div>
  );
};

export default UnconfirmedGuestFilter;