
import React from 'react'

const NoMatch = (props) => {
  return(
    <div className='no-match' > 404 Not Found for {props.location.pathname}</div>
    )
}

export default NoMatch
