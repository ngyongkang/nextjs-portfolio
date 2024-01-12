import React from 'react'

function EmailTemplate({firstName}) {
  return (
    <div>
        <h1>Welcome, {firstName}!</h1>
    </div>
  )
}

export default EmailTemplate