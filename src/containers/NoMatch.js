
import React from 'react'

const NoMatch = (props) => {
  console.log(props.location.pathname)
  return(
    <div className='no-match' > 404 Not Found for {props.location.pathname}</div>
    )
}

export default NoMatch
