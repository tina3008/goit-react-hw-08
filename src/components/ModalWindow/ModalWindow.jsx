import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/modal/slice";
import { deleteContact } from "../../redux/contacts/operations";
import css from './ModalWindow.module.css';
import {
  selectIsModalOpen,
  selectIsModalDelete,
} from "../../redux/modal/selectors";
import toast, { Toaster } from "react-hot-toast";


const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    borderRadius: "10px",
    background: "#e9d8ff",
    overflow: "visible",
    height: "auto",
    width: "auto",
  },
};

Modal.setAppElement("#root");

export default function ModalWindow()  {
  const isModalOpen = useSelector(selectIsModalOpen);
  const isModalDelete = useSelector(selectIsModalDelete);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeModal());
   
  };

  const handleConfirm = () => {
    if (isModalDelete) {
      dispatch(deleteContact(isModalDelete))
        .unwrap()
        .then(() => {
          // toast("The contact has been deleted", {
          //   duration: 4000,
          //   position: "top-center",
          //   style: { background: "red" },
          //   containerStyle:{
          //   top: 150,
          //   left: 20,
          //   bottom: 20,
          //   right: 20,
          // },
          // });
           toast.success("The contact has been deleted");
        })
        .catch(() => {
          toast("Contact  deleted failed!");
        });
      dispatch(closeModal());
    }
  };


  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleClose}
      style={customStyles}
    >
      <h3> Please confirm delete the contact</h3>
      <div className={css.modal}>
        <button onClick={handleConfirm} className={css.btnYes}>
          Yes
        </button>
        <button onClick={handleClose} className={css.btnNo}>
          No
        </button>

        {/* <Toaster
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
        /> */}
      </div>
    </Modal>
  );
}
