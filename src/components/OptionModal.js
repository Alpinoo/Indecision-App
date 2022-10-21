import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app'); //for a react error

const OptionModal = (props) => (
   <Modal
      isOpen={!!props.selectedOption} //it converts undefined to false and other values to true (!!undefined=false, !!anything=true)
      contentLabel="Selected Option"
      onRequestClose={props.handleOptionModal} //when clicked to esc or outside of modal, it's closed
      closeTimeoutMS={200} //wait before closing modal
      className="modal"
   >
      <h3 className="modal__title">
         Selected Option
      </h3>
      {props.selectedOption && (
         <p className="modal__body">
            {props.selectedOption}
         </p>
      )}
      <button
         onClick={props.handleOptionModal}
         className="button"
      >
         Okay
      </button>
   </Modal>
);

export default OptionModal;
