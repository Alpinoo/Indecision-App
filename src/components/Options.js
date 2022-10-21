import React from 'react';
import Option from '../components/Option';

const Options = (props) => (
   <div>
      <div className="widget-header">
         <h3 className="widget-header__title">
            Your Options
         </h3>
         <button
            onClick={props.handleDeleteOptions}
            className="button button--link"
         >
            Remove All
         </button>
      </div>
      {props.options.length === 0 && (
         <p className="widget__message">
            Please enter an option
         </p>
      )}

      {props.options.map((opt, index) => (
         <Option
            key={opt}
            optionText={opt} //?defined optionText for using options array in different components (to reach in this.props.optionText)
            count={index + 1}
            handleDeleteOption={
               props.handleDeleteOption
            }
         />
      ))}
   </div>
);

export default Options;
