import React from 'react';

function Header(props) {

    return (
      <div className="header-container">
        <h1 className="ml-5">Student Grade Table</h1>
        <div className="average-container ml-3">
          <label>Average Grade</label>
          <h3 className="average ml-3 pl-3 pr-3">{props.average}</h3>
        </div>
      </div>

    );
}

export default Header;
