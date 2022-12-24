import React from 'react'
import Tabs from '../../components/GamePlane/Tabs/Tabs'

import { useState } from 'react';
import ContainerTab from '../../components/GamePlane/ContainerTab/ContainerTab';
function GamePlane() {

  const [levels, setlevels] = useState(false);
  const [chalanges, setchalanges] = useState(true);
  const [quests, setquests] = useState(false);


  return (
    <div className="tab-pane-tab-2 w-tab-pane w--tab-active">
        <h4 className="tab-title">Game Plan</h4>
        <div className="tab-container">
            <div className="tabs-2 w-tabs">
                <Tabs
                  levels={levels} 
                  setlevels={setlevels}

                  chalanges = {chalanges}
                  setchalanges = {setchalanges}

                  quests = {quests}
                  setquests = {setquests}



                  
                  />

                <ContainerTab 
                
                levels={levels} 
                setlevels={setlevels}

                chalanges = {chalanges}
                setchalanges = {setchalanges}

                quests = {quests}
                setquests = {setquests}

                />
            </div>
        </div>
    </div>
  )
}

export default GamePlane