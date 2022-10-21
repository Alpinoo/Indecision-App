console.log('App.js is running!');

// JSX - JavaScript XML

const app = {
   title: 'Indecision App',
   subtitle:
      'Put your life in the hands of a computer',
   options: [],
};

const onFormSubmit = (e) => {
   e.preventDefault();
   const option = e.target.elements.option.value;
   if (option) {
      app.options.push(option);
      e.target.elements.option.value = '';
      renderApp();
   }
};
const pickRandom = () => {
   const randomNum = Math.floor(
      Math.random() * app.options.length
   );
   const selected = app.options[randomNum];
   alert(selected);
};

const removeAll = () => {
   app.options = [];

   renderApp();
};
let appRoot = document.getElementById('app');
const renderApp = () => {
   let template = (
      <div>
         <h1>{app.title}</h1>

         {app.subtitle && <p>{app.subtitle}</p>}
         <p>
            {app.options.length > 0
               ? 'Here are your options'
               : 'No options'}
         </p>
         <button
            disabled={app.options.length === 0}
            onClick={pickRandom}
         >
            What should I do?
         </button>
         <button onClick={removeAll}>
            Remove All
         </button>
         <ol>
            {app.options.map(
               (
                  opt //?we map every element in order to put them into list
               ) => (
                  <li key={opt}>{opt}</li>
               )
            )}
         </ol>
         <form onSubmit={onFormSubmit}>
            <input type="text" name="option" />
            <button>Add option</button>
         </form>
      </div>
   );
   ReactDOM.render(template, appRoot);
};
renderApp();
