import React, { useState } from 'react'

const ContactForm = (props) => {
  
  const [values, setValues] = useState({ name: '', email: '', phone: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleChange = (e) => {
    setValues(prevValues => ({ ...prevValues, [e.target.name]: e.target.value }))
    console.log(values);
  };

  return (
    <div style={{marginTop: 20}}>
      <form onSubmit={handleSubmit} className='contact-form'>
        <label htmlFor='name'>Name: </label>
        <input type='text' name='name' value={values.name} onChange={handleChange} required />
        <br />
        <label htmlFor='email'>Email: </label>
        <input type='text' name='email' value={values.email} onChange={handleChange} required />
        <br />
        <label htmlFor='phone'>Phone: </label>
        <input type='text' name='phone' value={values.phone} onChange={handleChange} />
        <br />
        <label htmlFor='phone'>Message: </label>
        <br /><br />
        <textarea type='text' rows='6' name='message' value={values.message} onChange={handleChange} required />
        <div className='flex-center'>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
};

export default ContactForm;