import React from 'react'

// ✅ Forward `ref` and all motion/animation props using forwardRef
const Button = React.forwardRef(({ text, className = '', id, ...rest }, ref) => {
  return (
    <a
      ref={ref}
      id={id}
      className={`${className} cta-wrapper`}
      {...rest} // ⬅️ Spreads motion props like `initial`, `animate`, `variants`, etc.
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
