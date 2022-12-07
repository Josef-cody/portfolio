import React from 'react'
const ContactForm = () => {
  return (
    <div className="container mt-5">
      <form action="https://getform.io/f/84b208cd-7623-4e4b-ba3d-2fc8d4b18318" method="POST">
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" name="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" name="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" name="message" required />
        </div>
        <input type="hidden" name="_gotcha" style={{display:"none !important"}}></input>
        <button className="btn btn-warning" type="submit">
        Send
        </button>
      </form>
    </div>
  )
}
export default ContactForm