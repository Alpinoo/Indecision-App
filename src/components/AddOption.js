import React from 'react';

export default class AddOption extends React.Component {
   state = {
      error: undefined, //in the beginning, there's no error
   };
   //used default because there's only one class to export
   handleOption = (e) => {
      //?used arrow function because it doesn't have 'this', instead it uses class' this.
      e.preventDefault();
      const option =
         e.target.elements.opt.value.trim(); //?for handling space
      const error =
         this.props.handleAddOption(option); //if this returns something(error deu to return values) error will be changed and we'll use it for changing she state and show error message
      this.setState(() => ({
         error, //equals to error:error
      }));
      if (!error)
         e.target.elements.opt.value = '';
   };
   render() {
      return (
         <div>
            <p className="add-option-error">
               {this.state.error}
            </p>{' '}
            {/* logs the error message dependent on state in handleAddOption */}
            <form
               className="add-option"
               onSubmit={this.handleOption}
            >
               <input
                  className="add-option__input"
                  type="text"
                  name="opt"
               />
               <button className="button">
                  Add Option
               </button>
            </form>
         </div>
      );
   }
}
