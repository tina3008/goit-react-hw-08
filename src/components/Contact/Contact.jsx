import { FaPhoneAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import toast, { Toaster } from "react-hot-toast";
// import Button from "@mui/material/Button";

export default function ContactItem({ contact: { id, name, number } }) {
  const dispatch = useDispatch();
 
  const handleDelete = () => {
    dispatch(deleteContact(id));
    toast("The contact has been deleted");
  };
  return (
    <div className={css.fullContact}>
      <div className={css.contactInfo}>
        <p>
          <IoPerson /> {name}
        </p>
        <p>
          <FaPhoneAlt /> {number}
        </p>
      </div>

      <button className={css.btn} onClick={handleDelete} >
        Delete
      </button>
      <Toaster
        toastOptions={{
          style: {
            background: "red",
            color: "white",
          },
        }}
        containerStyle={{
          top: 150,
          left: 20,
          bottom: 20,
          right: 20,
        }}
      />
    </div>
  );
}
