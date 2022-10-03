import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import styles from '@/styles/CreateUser.module.css'
import { useMutation, useReactiveVar } from '@apollo/client'
import { CREATE_USER, GET_USERS } from '@/src/operations/user'
import { searchQueryVar } from '@/src/stores'

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

function CreateUser({ onClose }) {
  const searchQuery = useReactiveVar(searchQueryVar)
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      phone: ''
    }
  })

  const [mutate, { loading }] = useMutation(CREATE_USER, {
    update(cache, { data: { createUser } }) {
      const cacheData = cache.readQuery({
        query: GET_USERS,
        variables: { query: searchQuery }
      })

      cache.writeQuery({
        query: GET_USERS,
        variables: { query: searchQuery },
        data: {
          users: [createUser, ...cacheData.users]
        }
      })
    }
  })

  function onSubmit(data) {
    if (!loading) {
      mutate({
        variables: { data },
        optimisticResponse: {
          createUser: {
            id: 'somerandomid',
            ...data,
            __typename: 'User'
          }
        }
      })
      .then(() => {
        onClose()
      }).catch((err) => {
        console.log('err: ', err);
      })
    }
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
            data-testid="name"
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
            data-testid="email"
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
            data-testid="phone"
            {...register('phone')}
          />
          {errors.phone && <p className={styles.errMsg}>{errors.phone?.message}</p>}
        </div>
      </div>

      <div className={styles.btnContainer}>
        <button
          className={styles.cancelBtn}
          onClick={onClose}
        >
          Cancel
        </button>
        <button
          data-testid="add-user"
          className={styles.btn}
          type='submit'
        >
          Add
        </button>
      </div>
    </form>
  )
}

CreateUser.defaultProps = {
  onClose: () => {}
}

CreateUser.propTypes = {
  onClose: PropTypes.func.isRequired
}

export default CreateUser