import React, { useState } from 'react';

import chevronIcon from '../../assets/chevron.png';

const Toggle = ({item}) => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className='jl-pricing__toggle section__padding'  data-toggle={toggle}
      onClick={() => setToggle(!toggle)}
      >
        <div className='container mx-auto'>
          <div className='jl-pricing__toggle--icon'>
            <img src={chevronIcon} alt="chevron" />
          </div>
          <div className='jl-pricing__toggle--titile'>
            <h3 className='font-h2'>{item.titile}</h3>
          </div>
          <div className='jl-pricing__toggle--content'>
            <ul>
              {item.content.map((tc,i)=>(
                <li dangerouslySetInnerHTML={{__html: tc}} key={tc+i}></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Toggle