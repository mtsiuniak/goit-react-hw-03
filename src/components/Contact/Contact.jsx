import css from './Contact.module.css'
import { AiFillPhone } from "react-icons/ai";
import { IoPerson } from "react-icons/io5";

export default function Contact({ onDeleteContact, list: {id, name, number }, }) {
    const handleDelete = () => {
        onDeleteContact(id);
    };
    
    return <div className={css.container}>
        <div>
            <div className={css.textBlock}>
            <IoPerson  className={css.iconPerson} />
            <p className={css.text}>{name}</p>
           
        </div>
        <div className={css.textBlock}>
            <AiFillPhone className={css.iconPhone} />
            <p className={css.text}>{number}</p>
        </div>
        </div>
        
        <button className={css.button} onClick={handleDelete}>Delete</button>
    </div>
}