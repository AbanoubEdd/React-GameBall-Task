import React from 'react'
import Chalanges from '../Chalanges/Chalanges'
import Levels from '../Levels/Levels'
import Quests from '../Quests/Quests'
function ContainerTab(props) {

    const activeClassLevels = props.levels
    const activeClassChallenges = props.chalanges
    const activeClassQuests = props.quests
    

  return (
    <>
    {activeClassLevels&& <Levels />}
    {activeClassChallenges&& <Chalanges />}
    {activeClassQuests&& <Quests />}
    
    </>
  )
}

export default ContainerTab