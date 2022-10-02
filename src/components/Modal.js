import PropTypes from 'prop-types'
import { useEffect } from 'react'
import styles from '../../styles/Modal.module.css'

function Modal({ open, onClose, children }) {

  useEffect(() => {
    const close = (e) => {
      if(e.keyCode === 27){
        onClose()
      }
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  },[onClose])

  if(!open) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modalDialog}>
        {children}
      </div>
    </div>
  )
}

Modal.defaultProps = {
  open: false,
  onClose: () => {},
}

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default Modal