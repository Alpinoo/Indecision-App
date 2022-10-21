class IndecisionApp extends React.Component {
   constructor(props) {
      super(props);
      this.handleDeleteOptions =
         this.handleDeleteOptions.bind(this);
      this.handlePick =
         this.handlePick.bind(this);
      this.handleAddOption =
         this.handleAddOption.bind(this);
      this.handleDeleteOption =
         this.handleDeleteOption.bind(this);
      this.state = {
         options: [],
      };
   }
   componentDidMount() {
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
   }
   componentDidUpdate(prevProps, prevState) {
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
   }
   componentWillUnmount() {
      //?Ran when component is gone
      console.log('componentWillUnmount');
   }

   //!Lifecycle methods can only ran in class components.

   handleDeleteOptions() {
      this.setState(() => ({options: []})); //?in arrow functions after arrow, we have to use () before declaring an object (options in this case) because unless we do, it's treated as function
   }
   handleDeleteOption(optionSelected) {
      this.setState((prevState) => ({
         options: prevState.options.filter(
            //?we filtered options that aren't equal to our selected option in order to only delete selected option
            (option) => optionSelected !== option //returns every other element but the option we selected so, rest will be shown in the screen
         ),
      }));
   }

   handlePick() {
      //?props can't go from child to parent. So, we write function as props to send child to parent

      const randomNum = Math.floor(
         Math.random() * this.state.options.length
      );
      const selected =
         this.state.options[randomNum];
      alert(selected);
   }

   handleAddOption(option) {
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
   }

   render() {
      const subtitle =
         ' Put your life in hands of a computer';

      return (
         <div>
            <Header
               subtitle={subtitle} //?we define title&subtitle here in order to use and change them in other components
            />
            <Actions
               hasOption={
                  this.state.options.length > 0
               }
               handlePick={this.handlePick}
            />
            <Options
               options={this.state.options}
               handleDeleteOptions={
                  this.handleDeleteOptions
               }
               handleDeleteOption={
                  this.handleDeleteOption
               }
            />
            <AddOption
               handleAddOption={
                  this.handleAddOption
               }
            />
         </div>
      );
   }
}

const Header = (props) => {
   //?When component only represent data, use functional component
   //?When component manipulates data, use class component (when you need state)
   return (
      <div>
         <h1>{props.title}</h1>

         {props.subtitle && (
            <h2>{props.subtitle}</h2>
         )}
      </div>
   );
};

Header.defaultProps = {
   //default values
   title: 'Indecision App',
};

const Actions = (props) => {
   return (
      <button
         disabled={!props.hasOption}
         onClick={props.handlePick}
      >
         What should I do?
      </button>
   );
};

const Options = (props) => {
   return (
      <div>
         {props.options.length === 0 && (
            <p>Please enter an option</p>
         )}
         <button
            onClick={props.handleDeleteOptions}
         >
            Remove All
         </button>
         {props.options.map((opt) => (
            <Option
               key={opt}
               optionText={opt} //?defined optionText for using options array in different components (to reach in this.props.optionText)
               handleDeleteOption={
                  props.handleDeleteOption
               }
            />
         ))}
      </div>
   );
};

const Option = (props) => {
   return (
      <div>
         {props.optionText}
         <button
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
};

class AddOption extends React.Component {
   constructor(props) {
      super(props);
      this.handleOption =
         this.handleOption.bind(this);

      this.state = {
         error: undefined, //in the beginning, there's no error
      };
   }
   handleOption(e) {
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
   }
   render() {
      return (
         <div>
            <p>{this.state.error}</p>{' '}
            {/* logs the error message dependent on state in handleAddOption */}
            <form onSubmit={this.handleOption}>
               <input
                  type="text"
                  name="opt"
               ></input>
               <button>Add Option</button>
            </form>
         </div>
      );
   }
}

ReactDOM.render(
   <IndecisionApp />,
   document.getElementById('app')
);
