import React from 'react'

const Pagination = (props) => (
  <div >
    {
      props.first === false &&
      <div className='previousLink'>
        <props.NavLink
          test={props.first}
          url={props.previousUrl}
          text='left'
        />
      </div>
    }
    {
      props.last === false &&
      <div className='nextLink'>
        <props.NavLink
          test={props.last}
          url={props.nextUrl}
          text='right' />
      </div>
    }
  </div>
)

export default Pagination
