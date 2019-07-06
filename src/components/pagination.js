import React from 'react'

const Pagination = (props) => (
  <div style={{ textAlign: 'center', marginTop: '2rem' }}>
    {
      props.first === false &&
      <div className='previousLink'>
        <props.NavLink
          test={props.first}
          url={props.previousUrl}
          text='before'
        />
      </div>
    }
    {
      props.last === false &&
      <div className='nextLink'>
        <props.NavLink
          test={props.last}
          url={props.nextUrl}
          text='after' />
      </div>
    }
  </div>
)

export default Pagination
