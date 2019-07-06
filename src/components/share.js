import React from 'react'

const Share = props => (
  <div>
    <h4 style={{ textAlign: 'center', margin: '0 0 .5rem 1rem' }}>Dist</h4>
    <ul className='social'>
      <li>
        <a
          href={
            `https://twitter.com/intent/tweet?url=${props.url +
            props.pathname}&text=${props.title} by @saylestyler`
          }
          target='blank'>
          share -> twitter
        </a>
      </li>
    </ul>
  </div>
)

export default Share
