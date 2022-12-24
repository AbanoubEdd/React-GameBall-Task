import React from 'react'
import Filtration from './Filtiration/Filtration';
import Items from './Items/Items';
import { useState } from 'react';
function Chalanges() {


  
const data = [
  {
    title: 'Click & Collect 1',
    description: 'It is a long established fact that a reader will be distracted by the readable eye.',
    active: true,

  },
  {
    title: 'Click & Collect 2',
    description: 'It is a long established fact that a reader will be distracted by the readable eye.',
    active: false,

  },
  {
    title: 'Click & Collect 3',
    description: 'It is a long established fact that a reader will be distracted by the readable eye.',
    active: true,

  },
  {
    title: 'Click & Collect 4',
    description: 'It is a long established fact that a reader will be distracted by the readable eye.',
    active: true,

  }
];

const [items, setitems] = useState(data);




const handleFiltration = (e)=>{
  const val =  e.target.value

  switch(val){
    case 'active' :

    const active = data.filter((item)=>{
      return item.active
    })

    setitems(active)

    break ;

    case 'inactive' : 

    const inactive = data.filter((item)=>{
      return item.active == false
    })

    setitems(inactive)

    break;

    default:

    setitems(data)


  }
}




  return (
    <div className="tabs-content _100 w-tab-content">
        <div className="tab-pane-tab-2-2 w-tab-pane w--tab-active">
            <div>
                <Filtration items={items} setitems={setitems} handleFiltration={handleFiltration} />
                <Items items={items} setitems={setitems} />
            </div>
        </div>
    </div>
  )
}

export default Chalanges