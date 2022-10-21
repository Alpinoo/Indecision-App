class VisibilityToggle extends React.Component {
   constructor(props) {
      super(props);
      this.handleToggleVisibility =
         this.handleToggleVisibility.bind(this);
      this.state = {visibility: false};
   }
   handleToggleVisibility() {
      this.setState((prevState) => {
         console.log(prevState);
         return {
            visibility: !prevState.visibility,
         };
      });
   }
   render() {
      return (
         <div>
            <h1>Visibility Toggle</h1>
            <button
               onClick={
                  this.handleToggleVisibility
               }
               name="btn"
            >
               {this.state.visibility
                  ? 'Hide Details'
                  : 'Show Details'}
            </button>
            {
               <p>
                  {this.state.visibility &&
                     'Hello there'}
               </p>
            }
         </div>
      );
   }
}

let appRoot = document.getElementById('app');
ReactDOM.render(<VisibilityToggle />, appRoot);
