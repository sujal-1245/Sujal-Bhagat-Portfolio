import React from 'react'


const Button = React.forwardRef(({ text, className = '', id, ...rest }, ref) => {
  return (
    <a
      ref={ref}
      id={id}
      className={`${className} cta-wrapper`}
      {...rest} 
    >
      <div className='cta-button group'>
        <div className='bg-circle' />
        <p className='text'>{text}</p>
        <div className='arrow-wrapper'>
          <img src='/images/arrow-down.svg' alt='arrow' />
        </div>
      </div>
    </a>
  )
})

export default Button
