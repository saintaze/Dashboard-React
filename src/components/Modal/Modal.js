import React from 'react'
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner'

import { closeModal } from '../../store/actions/modalActions'

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import './Modal.scss'

const Modal = ({dispatch, isOpen, formData, loading}) => {
  const onModalClose = () => {
    dispatch(closeModal());
  }

  const renderIcon = () => {
    let classes = 'far ModalContent__icon';
    if (formData && formData.status === 'Success'){
      classes += ` ModalContent__icon--success fa-check-circle`;
    }else {
      classes += ` ModalContent__icon--failure fa-times-circle`;
    }
    return <i className={classes}></i>;
  }


  const renderButton = () => {
    let classes = 'ModalContent__btn';
    if (formData && formData.status === 'Success') {
      classes += ` ModalContent__btn--success`;
    } else {
      classes += ` ModalContent__btn--failure`;
    }
    return <button className={classes} onClick={onModalClose}>Close</button>;
  }

  return (
    <div className="Modal" style={{ display: isOpen ? 'block' : 'none' }}>
      <div className="ModalBackdrop" onClick={onModalClose}>
        {loading ? 
        <Loader
          className="Loader"
          type="Puff"
          color="#73c2fb"
          height={100}
          width={100}
        />
        :
        <div className="ModalContent" onClick={e => e.stopPropagation()}>
          <i className="fas fa-times ModalContent__close" onClick={onModalClose}></i>
          <div className="ModalContent__header">
            {renderIcon()}
          </div>
          <div className="ModalContent__body">
            <h2 className="ModalContent__status">{formData && formData.status}!</h2>
            <p className="ModalContent__message">{formData && formData.message}!</p>
          </div>
          <div className="ModalContent__footer">
            {renderButton()}
          </div> 
        </div>  
        }
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  isOpen: state.modal.isOpen,
  formData: state.form.data, 
  loading: state.form.loading
});

export default connect(mapStateToProps)(Modal)
