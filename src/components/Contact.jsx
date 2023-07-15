import React from 'react'
import "../styles/contact.css"
function Contact() {
  return (
    <>
        <div className="block">
            <main>
                <h1>contact us</h1>
                <form>
                  <div>
                  <label>Name</label>
                  <input type="text" />
                  </div>
                  <div>
                  <label>Email</label>
                  <input type="text"></input>
                  </div>
                  <div>
                  <label>Message</label>
                  <input type='text'></input>
                  </div>
                  <button>send</button>
                </form>
            </main>
        </div>
</>
  )
}

export default Contact