import React, { Fragment } from 'react';

import { Consumer } from './context';

const Counter = () => {
  return (
    <table className="counter">
      <tbody>
        <Consumer>
          {context => {
            return (
              <Fragment>
                <tr>
                  <td>Attending:</td>
                  <td>{context.methods.getTotalConfirmed}</td>
                </tr>
                <tr>
                  <td>Unconfirmed:</td>
                  <td>{context.methods.getTotalUnconfirmed}</td>
                </tr>
                <tr>
                  <td>Total:</td>
                  <td>{context.methods.getTotalInvited}</td>
                </tr>
              </Fragment>
            );
          }}
        </Consumer>
      </tbody>
    </table>
  );
};

export default Counter;