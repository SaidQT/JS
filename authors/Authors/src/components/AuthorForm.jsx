import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const AuthorForm = (props) => {
  const { onSubmit, error, initialName } = props;
  const [name, setName] = useState(initialName);
  const navigate= useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ name })
    setName("")
    navigate(-1)
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