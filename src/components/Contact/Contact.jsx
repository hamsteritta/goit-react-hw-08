import css from "./Contact.module.css";
import { IoPerson, IoCall } from "react-icons/io5";

const Contact = ({ contact, onDelete }) => {
    return (
    <div className={css.contactBox}>
        <div className={css.contact}>
            <div className={css.field}>
                <IoPerson/>
                <p>{contact.name}</p>
            </div>
            <div className={css.field}>
                <IoCall/>
                <p>{contact.number}</p>
            </div>
            </div>
            <button className={css.btn} onClick={() => onDelete(contact.id)}>Delete</button>            
    </div>
    )
}
export default Contact;