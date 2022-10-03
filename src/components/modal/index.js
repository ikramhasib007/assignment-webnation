import PropTypes from 'prop-types'
import { useEffect } from 'react'
import styles from '@/styles/Modal.module.css'

function Modal({ open, onClose, children, title }) {

  useEffect(() => {
    const close = (e) => {
      if(e.keyCode === 27){
        onClose()
      }
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  },[onClose])

  useEffect(() => {
    if(open) document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = null; }
  }, [open]);

  if(!open) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modalDialog}>
        <div className={styles.header}>
          <p>{title}</p>
          <span onClick={() => onClose()} className={styles.crossBtn}>{"\u274C"}</span>
        </div>
        {children}
      </div>
    </div>
  )
}

Modal.defaultProps = {
  open: false,
  onClose: () => {},
  title: 'Modal Title'
}

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string
}

export default Modal