import React from 'react'
import Filtration from './Filtiration/Filtration';
import Items from './Items/Items';
function Chalanges() {
  return (
    <div className="sub-tabs-content _100 w-tab-content">
        <div className="sub-tab-pane-tab w-tab-pane w--tab-active">
            <div>
                <Filtration />
                <Items />
            </div>
        </div>
    </div>
  )
}

export default Chalanges