import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

export default function ContactList({ data, onDeleteContact }) {
  return (
    <ul className={css.list}>
      {data.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact list={contact} onDeleteContact={onDeleteContact}/>
        </li>
      ))}
    </ul>
  );
}
