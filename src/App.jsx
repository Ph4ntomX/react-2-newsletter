import { useState } from 'react'

function App() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (name.trim() !== '' && email.trim() !== '') {
      setSubscribed(true)
    }
  }

  const resetForm = () => {
    setName('')
    setEmail('')
    setSubscribed(false)
  }

  return (
    <>
      <div style={{ maxWidth: '700px', margin: '30px auto' }}>
        {!subscribed && (
          <div className="card rounded shadow-sm">
            <div className="card-body">
              <h3 className="card-title mb-3">Newsletter Subscription</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input type="text" placeholder="Your Name" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                  <input type="email" placeholder="Your Email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Subscribe</button>
              </form>
            </div>
          </div>
        )}

        {subscribed && (
          <div className="alert alert-success mt-3">
            Please check your email ({email}) for confirmation
            <button className="btn btn-success mt-2" onClick={resetForm}>Subscribe to another email</button>
          </div>
        )}
      </div>
    </>
  )
}

export default App
