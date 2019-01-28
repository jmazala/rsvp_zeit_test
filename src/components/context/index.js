import React, { Component } from 'react';

const RSVPContext = React.createContext();

export class Provider extends Component {
  state = {
    guests: [{
      name: 'Michaelangelo',
      id: 1,
      isConfirmed: false,
      isEditing: false
    },
    {
      name: 'Leonardo',
      id: 2,
      isConfirmed: true,
      isEditing: false
    },
    {
      name: 'Donatello',
      id: 3,
      isConfirmed: false,
      isEditing: false
    },
    {
      name: 'Rafael',
      id: 4,
      isConfirmed: false,
      isEditing: false
    }],
    isFiltered: false,
    pendingGuestName: ''
  };

  lastGuestId = 4;

  //HANDLER FUNCTIONS
  handlePendingGuestName = (name) => {
    this.setState({ pendingGuestName: name });
  }

  handleRemoveGuest = (id) => {
    this.setState(prevState => ({
      guests: prevState.guests.filter(p => p.id !== id)
    }));
  };

  handleAddGuest = (name) => {
    this.setState(prevState => {
      const newGuest = {
        name,
        isConfirmed: false,
        isEditing: false,
        id: ++this.lastGuestId
      };

      return { pendingGuestName: '', guests: [newGuest].concat(prevState.guests) };
    });
  }

  handleChangeGuestName = (id, newName) => {
    if (!newName.length) {
      return;
    }

    this.setState(prevState => {
      const guestToModify = prevState.guests.find(i => i.id === id);
      guestToModify.name = newName;
      return { guests: prevState.guests };
    })
  }

  handleToggleFilterUnconfirmed = () => {
    this.setState(prevState => ({ isFiltered: !prevState.isFiltered }));
  }

  handleConfirmationToggle = (id) => this.toggleProperty('isConfirmed', id);
  handleEditingToggle = (id) => this.toggleProperty('isEditing', id);

  //HELPER METHODS
  getGuestById = (id) => this.state.guests.find(i => i.id === id);
  getConfirmed = () => this.state.guests.filter(i => i.isConfirmed);
  getUnconfirmed = () => this.state.guests.filter(i => !i.isConfirmed);
  getTotalInvited = () => this.state.guests.length;
  getTotalConfirmed = () => this.getConfirmed().length;
  getTotalUnconfirmed = () => this.getTotalInvited() - this.getTotalConfirmed();

  toggleProperty(property, id) {
    this.setState(prevState => {
      const guestToModify = prevState.guests.find(i => i.id === id);
      guestToModify[property] = !guestToModify[property];
      return { guests: prevState.guests };
    });
  }

  render() {
    return (
      <RSVPContext.Provider value={
        {
          guests: this.state.guests,
          isFiltered: this.state.isFiltered,
          pendingGuestName: this.state.pendingGuestName,
          actions: {
            addGuest: this.handleAddGuest,
            removeGuest: this.handleRemoveGuest,
            confirmGuest: this.handleConfirmationToggle,
            editGuest: this.handleEditingToggle,
            changeGuestName: this.handleChangeGuestName,
            hideUnconfirmed: this.handleToggleFilterUnconfirmed,
            pendingGuest: this.handlePendingGuestName
          },
          methods: {
            getGuestById: (id) => this.getGuestById(id),
            getTotalInvited: this.getTotalInvited(),
            getTotalConfirmed: this.getTotalConfirmed(),
            getTotalUnconfirmed: this.getTotalUnconfirmed(),
            getConfirmedGuests: this.getConfirmed(),
            getUnconfirmedGuests: this.getUnconfirmed()
          }
        }
      }>
        {this.props.children}
      </RSVPContext.Provider>
    );
  }
};

export const Consumer = RSVPContext.Consumer;
