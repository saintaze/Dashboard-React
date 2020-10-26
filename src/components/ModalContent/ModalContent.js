import React from 'react'
import './ModalContent.scss'

const ModalContent = () => {
  return (
    <div className="ModalContent">
      <i className="fas fa-times ModalContent__close"></i>
      <div className="ModalContent__header">
        <i className="far fa-check-circle ModalContent__icon  ModalContent__icon--success"></i>
        <i className="far fa-times-circle ModalContent__icon  ModalContent__icon--failure"></i>
      </div>
      <div className="ModalContent__body">
        <h2 className="ModalContent__status">Success!</h2>
        <p className="ModalContent__message">Failure!</p>
      </div>
      <div className="ModalContent__footer">
        <button className="ModalContent__btn">Close</button>
        <button className="ModalContent__btn">Close</button>
      </div>
    </div>
  )
}

export default ModalContent
