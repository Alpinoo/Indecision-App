import React from 'react';

const Actions = (props) => (
   <div>
      <button
         className="big-button"
         disabled={!props.hasOption}
         onClick={props.handlePick}
      >
         What should I do?
      </button>
      <div></div>
   </div>
);

export default Actions;
