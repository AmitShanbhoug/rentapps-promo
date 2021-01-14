import React from 'react'
import TextField from '@material-ui/core/TextField';
import "./Beta.css"

function Beta() {
    return (
        <div className="beta-container">
          <div className="beta-signup" id="/beta">Sign up for early access!</div>
            <div className="beta-form">
              <TextField id="filled-search" label="Email Address" type="Email" variant="outlined"/>
              <button className="beta-signup-button">Sign up</button>
            </div>
        </div>
    )
}

export default Beta
