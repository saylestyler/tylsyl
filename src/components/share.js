import React from 'react'

const Share = props => (
  <div>
    <ul className='social'>
      <li>
        <a
          href={
            `https://twitter.com/intent/tweet?
            url=${props.url + props.pathname}&
            text=${props.title} 
            by @saylesopenhauer`
          }
          target='blank'>
          share -> twitter
        </a>
      </li>
    </ul>
  </div>
)

export default Share
