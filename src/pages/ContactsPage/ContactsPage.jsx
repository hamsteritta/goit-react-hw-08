import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import { useDispatch, useSelector } from "react-redux";
import { selectFilteredContacts, selectLoading } from "../../redux/contacts/selectors";
import { addContact, deleteContact, fetchContacts } from "../../redux/contacts/operations";
import { useEffect } from "react";
import SearchBox from "../../components/SearchBox/SearchBox";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Contacts</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;