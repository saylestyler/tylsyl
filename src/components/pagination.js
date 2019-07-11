import React from 'react'

const Pagination = (props) => (
  <ul>
    {props.first === false &&
      <li className='previousLink'>
        <props.NavLink
          test={props.first}
          url={props.previousUrl}
          text='back in time'/>
      </li>}
    {props.last === false &&
      <li className='nextLink'>
        <props.NavLink
          test={props.last}
          url={props.nextUrl}
          text='forward in time'/>
      </li>}
  </ul>
)

export default Pagination
