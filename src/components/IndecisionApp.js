import React from 'react';
import AddOption from './AddOption'; //didn't add .js because webpack will take it as .js automatically
import Header from './Header';
import Actions from './Actions';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
   state = {
      options: [],
      selectedOption: undefined, //it's undefined in the beginning(false)
   };
   handleDeleteOptions = () => {
      this.setState(() => ({options: []})); //?in arrow functions after arrow, we have to use () before declaring an object (options in this case) because unless we do, it's treated as function
   };
   handleDeleteOption = (optionSelected) => {
      this.setState((prevState) => ({
         options: prevState.options.filter(
            //?we filtered options that aren't equal to our selected option in order to only delete selected option
            (option) => optionSelected !== option //returns every other element but the option we selected so, rest will be shown in the screen
         ),
      }));
   };

   handlePick = () => {
      //?props can't go from child to parent. So, we write function as props to send child to parent

      const randomNum = Math.floor(
         Math.random() * this.state.options.length
      );
      const selected =
         this.state.options[randomNum];
      this.setState(() => ({
         selectedOption: selected,
      }));
   };

   handleOptionModal = () => {
      this.setState(() => ({
         selectedOption: undefined,
      }));
   };

   handleAddOption = (option) => {
      if (!option) {
         return 'Enter a valid option';
      } else if (
         this.state.options.indexOf(option) > -1
      ) {
         return 'Enter a unique option';
      }

      //didn't need else because if one of two doesn't execute, this code will run
      this.setState((prevState) => ({
         options:
            prevState.options.concat(option), //with concat, we create a new array with data of prevState+option(not push because we don't want to change data)
      }));
   };

   componentDidMount = () => {
      //?Ran when component used for the first time

      try {
         //when component runs, check if there's any option and show it
         const json =
            localStorage.getItem('options');
         const options = JSON.parse(json); //converts JSON to js
         if (options) {
            this.setState(() => ({
               options,
            }));
         }
      } catch (e) {}
   };
   componentDidUpdate = (
      prevProps,
      prevState
   ) => {
      //?Ran when component updated
      if (
         prevState.options.length !==
         this.state.options.length
      ) {
         //if there's new item, add it to local storage
         const json = JSON.stringify(
            //converts js to JSON
            this.state.options
         );
         localStorage.setItem('options', json);

         console.log('saving data');
      }
   };
   componentWillUnmount = () => {
      //?Ran when component is gone
      console.log('componentWillUnmount');
   };

   //!Lifecycle methods can only ran in class components.

   render() {
      const subtitle =
         ' Put your life in hands of a computer';

      return (
         <div>
            <Header
               subtitle={subtitle} //?we define title&subtitle here in order to use and change them in other components
            />
            <div className="container">
               <Actions
                  hasOption={
                     this.state.options.length > 0
                  }
                  handlePick={this.handlePick}
               />
               <div className="widget">
                  <Options
                     options={this.state.options}
                     handleDeleteOption={
                        this.handleDeleteOption
                     }
                     handleDeleteOptions={
                        this.handleDeleteOptions
                     }
                  />
                  <AddOption
                     handleAddOption={
                        this.handleAddOption
                     }
                  />
               </div>
            </div>
            <OptionModal
               selectedOption={
                  this.state.selectedOption
               }
               handleOptionModal={
                  this.handleOptionModal
               }
            />
         </div>
      );
   }
}
