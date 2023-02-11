import React from 'react';
import {content} from '../../utils/content';
import Toggle from '../toggle/Toggle';

import './Pricing.css'

const Pricing = () => {

  return (
    <section className='jl-pricing'>
      <div className='section__padding'>
        <div className='container mx-auto'>
          <h2 className='text-center'>Pricing</h2>
          <table className='jl-pricing__table'>
            <tbody>
              {
                content.pricing.list.map((item,i)=>(
                  <tr key={"tr"+i}>
                    <td>{item.item}</td>
                    <td>{item.price}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>

          {content.pricing.remark && <p className='jl-pricing__remark text-center'>{content.pricing.remark}</p>}
        </div>
      </div>

      <div className='jl-pricing__toggles'>
        {
         content.pricing.toggles.map((item,i)=>(
          <Toggle item={item} key={'t'+i}/>
         ))
        }
      </div>
    </section>
  )
}

export default Pricing