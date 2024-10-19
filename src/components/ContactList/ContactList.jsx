import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectFilteredContacts);

    const handleDelete = id => {
        dispatch(deleteContact(id));
    };    

    return (
        <ul className={css.list}>
              {contacts.map((contact) => {
                return <li key={contact.id}>
                    <Contact contact={contact} onDelete={handleDelete}></Contact>
                </li>;
            })}
        </ul>
    )
}
export default ContactList;