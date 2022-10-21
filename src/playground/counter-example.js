class Counter extends React.Component {
   constructor(props) {
      //?for overriding constructor, we use props
      super(props);
      this.handleAddOne =
         this.handleAddOne.bind(this); //for binding 'this' to Counter component
      this.handleMinusOne =
         this.handleMinusOne.bind(this);
      this.handleReset =
         this.handleReset.bind(this);

      this.state = {
         //set initial state of count to 0
         count: 0,
      };
   }
   handleAddOne() {
      this.setState((prevState) => {
         //?setState changes the state
         return {count: prevState.count + 1}; //we just write the values we want to change (it's not overwriting all of the state)
      });
   }
   handleMinusOne() {
      this.setState((prevState) => {
         return {
            count: prevState.count - 1,
         };
      });
   }
   handleReset() {
      this.setState(() => {
         //previous state is not important because we'll reset it soon.
         return {
            count: 0,
         };
      });
   }

   componentDidMount() {
      const num = localStorage.getItem('count');
      const count = parseInt(num, 10);

      if (!isNaN(count)) {
         //set the state if it's a number (NaN: not a number)
         this.setState(() => ({
            count,
         }));
      }
   }

   componentDidUpdate(prevProps, prevState) {
      if (prevState.count !== this.state.count) {
         localStorage.setItem(
            'count',
            this.state.count
         );
      }
   }

   render() {
      return (
         <div>
            <h1>Count : {this.state.count}</h1>
            <button onClick={this.handleAddOne}>
               +1
            </button>
            <button onClick={this.handleMinusOne}>
               -1
            </button>
            <button onClick={this.handleReset}>
               reset
            </button>
         </div>
      );
   }
}

ReactDOM.render(
   <Counter />,
   document.getElementById('app')
);

// let count = 0;

// const addOne = () => {
//    count++;
//    renderApp();
// };
// const minusOne = () => {
//    count--;
//    renderApp();
// };
// const reset = () => {
//    count = 0;
//    renderApp();
// };

// let appRoot = document.getElementById('app'); // This is the root element in the index.html file

// const renderApp = () => {
//    const templateTwo = (
//       <div>
//          <h1>Count: {count}</h1>
//          <button onClick={addOne}>+1</button>
//          <button onClick={minusOne}>-1</button>
//          <button onClick={reset}>Reset</button>
//       </div>
//    );
//    ReactDOM.render(templateTwo, appRoot);
// };

// renderApp();
