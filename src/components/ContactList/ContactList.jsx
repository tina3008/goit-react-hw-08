import { useSelector } from "react-redux";
// import { selectContacts, selectNameFilter } from "../../redux/selectors";
import {visibleContacts} from '../../redux/contactsSlice'
import css from "./ContactList.module.css";
import ContactItem from "../Contact/Contact";

export default function ContactList() {
  // const contacts = useSelector(selectContacts);
  // const filters = useSelector(selectNameFilter);
  // const visibleContacts = contacts.filter((contact) => {
  //     return contact.name.toLowerCase().includes(filters.toLowerCase());
  // });
  const filtrContacts = useSelector(visibleContacts);
  ;
  return (
    <ul className={css.list}>
      {filtrContacts.map((contact) => {
        return (
          <li key={contact.id}>
            <ContactItem contact={contact} />
          </li>
        );
      })}
    </ul>
  );
}
