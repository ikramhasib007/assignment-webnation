import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import styles from '../../styles/UserForm.module.css'

const schema = yup.object().shape({
  name: yup.string().label('Name').required(),
  email: yup.string().email().label('E-mail').required(),
  phone: yup.string().label('Phone').when(['phone'], {
    is: (val) => !!val,
    then: yup.string().matches(/^(?:(?:\+|00)88|01)?\d{11}$/, 'Phone number is not valid')
  }).required(),
}, [
  ['phone', 'phone']
])

function UserForm({ onCancel }) {

  const { register, control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      phone: ''
    }
  })

  function onSubmit(data) {
    console.log('data: ', data);

  }

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className={styles.grid}>
        <div className={styles.gridItem}>
          <label htmlFor='name'>
            Name
          </label>
          <input
            type="text"
            name='name'
            {...register('name')}
          />
          {errors.name && <p className={styles.errMsg}>{errors.name?.message}</p>}
        </div>
        <div className={styles.gridItem}>
          <label htmlFor='email'>
            E-mail
          </label>
          <input
            type="email"
            id='email'
            {...register('email')}
          />
          {errors.email && <p className={styles.errMsg}>{errors.email?.message}</p>}
        </div>
        <div className={styles.gridItem}>
          <label htmlFor='phone'>
            Phone
          </label>
          <input
            type="text"
            id='phone'
            {...register('phone')}
          />
          {errors.phone && <p className={styles.errMsg}>{errors.phone?.message}</p>}
        </div>
      </div>

      <div className={styles.btnContainer}>
        <button
          className={styles.cancelBtn}
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          className={styles.btn}
          type='submit'
        >
          Add
        </button>
      </div>
    </form>
  )
}

UserForm.defaultProps = {
  onCancel: () => {}
}

UserForm.propTypes = {
  onCancel: PropTypes.func.isRequired
}

export default UserForm