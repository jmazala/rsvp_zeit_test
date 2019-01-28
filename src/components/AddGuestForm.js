import React from 'react';
import { Consumer } from './context';

const AddGuestForm = () => {
  let guestInput = React.createRef();

  return (
    <Consumer>
      {({ actions }) => {
        let handleSubmit = (event) => {
          event.preventDefault();
          if (guestInput.current.value) {
            actions.addGuest(guestInput.current.value);
            event.currentTarget.reset();
          }
        };

        let handlePending = (event) => {
          actions.pendingGuest(event.target.value);
        }

        return (
          <form onSubmit={handleSubmit}>
            <input onChange={handlePending} type="text" ref={guestInput} placeholder="Invite Someone" />
            <button type="submit" name="submit" value="submit">Submit</button>
          </form>
        );
      }}
    </Consumer>
  );
};

export default AddGuestForm;