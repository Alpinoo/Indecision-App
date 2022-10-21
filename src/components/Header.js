import React from 'react';

const Header = (props) => (
   //?When component only represent data, use functional component
   //?When component manipulates data, use class component (when you need state)
   <div className="header">
      <div className="container">
         <h1 className="header__title">
            {props.title}
         </h1>

         {props.subtitle && (
            <h2 className="header__subtitle">
               {props.subtitle}
            </h2>
         )}
      </div>
   </div>
);

Header.defaultProps = {
   //default values
   title: 'Indecision App',
};

export default Header;
