import React from "react";

function Tabs(props) {
  const activeClassLevels = props.levels ? "w--current" : "";
  const activeClassChallenges = props.chalanges ? "w--current" : "";
  const activeClassQuests = props.quests ? "w--current" : "";

  const handleLevels = (e) => {
    props.setlevels(true);
    props.setchalanges(false);
    props.setquests(false);
  };

  const handleChalanges = (e) => {
    props.setlevels(false);
    props.setchalanges(true);
    props.setquests(false);
  };

  const handleQuests = (e) => {
    props.setlevels(false);
    props.setchalanges(false);
    props.setquests(true);
  };

  return (
    <div className="sub-tabs-menu w-tab-menu">
      <a
        onClick={handleLevels}
        className={"sub-tab w-inline-block w-tab-link " + activeClassLevels}
      >
        <div className="tab-name _400">Levels</div>
      </a>
      <a
        onClick={handleChalanges}
        className={"sub-tab w-inline-block w-tab-link " + activeClassChallenges}
      >
        <div className="tab-name _400">Challenges</div>
      </a>
      <a
        onClick={handleQuests}
        className={"sub-tab w-inline-block w-tab-link " + activeClassQuests}
      >
        <div className="tab-name _400">Quests</div>
      </a>
    </div>
  );
}

export default Tabs;
