import { useState } from 'react'
const AuthorForm = (props) => {
  const { onSubmit, error, initialName } = props;
  const [name, setName] = useState(initialName);

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ name })
    setName("")
  }

  return (
    <form onSubmit={handleSubmit} >
      <p>
        <label className='form-label'>Name</label><br />
        <input
          type="text"
          name="name" value={name}
          className='form-control'
          onChange={(e) => { setName(e.target.value) }} />
        {error.name && <small className="text-danger">{error.name.message}</small>}
      </p>

      <input type="submit" value="Submit" className='btn btn-success' />
    </form>
  )
}

export default AuthorForm