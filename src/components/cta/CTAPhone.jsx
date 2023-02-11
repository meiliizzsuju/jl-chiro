import React from 'react';

const CTAPhone = ({title,button,phone_no}) => {
  return (
    <section className='section__padding-lx text-center bg-tertiary'> 
      <h3 className='font-h2 mx-auto mb-5 max-w-4xl'>{title}</h3>
      <a href={'tel:'+phone_no} className="btn btn-primary">{button}</a>
    </section>
  )
}

export default CTAPhone