import React from 'react'
import {connect} from 'react-redux'

import { closeModal } from '../../store/actions/modalActions'

import './Modal.scss'

const Modal = ({dispatch, isOpen, formData}) => {

  const onModalClose = () => {
    dispatch(closeModal());
  }

  const renderIcon = () => {
    let classes = 'far fa-check-circle ModalContent__icon';
    if (formData.data && formData.data.status === 'Success'){
      classes += ` ModalContent__icon--success`;
    }else {
      classes += ` ModalContent__icon--failure`;
    }
    return <i className={classes}></i>;
  }

  const renderButton = () => {
    let classes = 'ModalContent__btn';
    if (formData.data && formData.data.status === 'Success') {
      classes += ` ModalContent__btn--success`;
    } else {
      classes += ` ModalContent__btn--failure`;
    }
    return <button className={classes} onClick={onModalClose}>Close</button>;
  }

  return (
    <div className="Modal" style={{ display: isOpen ? 'block' : 'none' }}>
      <div className="ModalBackdrop" onClick={onModalClose}>
        <div className="ModalContent" onClick={e => e.stopPropagation()}>
          <i className="fas fa-times ModalContent__close" onClick={onModalClose}></i>
          <div className="ModalContent__header">
            {renderIcon()}
          </div>
          <div className="ModalContent__body">
            <h2 className="ModalContent__status">{formData.data && formData.data.status}!</h2>
            <p className="ModalContent__message">{formData.data && formData.data.message}!</p>
          </div>
          <div className="ModalContent__footer">
            {renderButton()}
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state, props) => ({
  isOpen: state.modal.isOpen,
  formData: state[props.formType] 
});

export default connect(mapStateToProps)(Modal)
