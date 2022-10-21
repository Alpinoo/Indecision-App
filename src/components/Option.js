import React from 'react';

const Option = (props) => (
   <div className="option">
      <p className="option__text">
         {props.count}. {props.optionText}
      </p>

      <button
         className="button button--link" //
         onClick={(
            e //?we wrote with 'e' because when clicked, it also calls the event and we don't want that
         ) =>
            props.handleDeleteOption(
               props.optionText
            )
         }
      >
         Remove
      </button>
   </div>
);

export default Option;
