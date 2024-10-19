import { createSelector } from "reselect";
import { selectFilter } from "../filters/selectors";

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) 
      || contact.number.toLowerCase().includes(filter.toLowerCase()) 
    );
  }
);