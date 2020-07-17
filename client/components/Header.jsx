import React from 'react';

function Header(props) {

  return (
    <div className="container">
      <div className="row">
        <div className="col-9">
          <h1>Student Grade Table</h1>
        </div>
        <div className="col-3 d-flex align-items-center text-center">
            <label>Average Grade</label>
            <h3 className="ml-3 pl-3 pr-3 bg-primary text-white border border-dark rounded">{props.average}</h3>
        </div>
      </div>

    </div>
  );
}

export default Header;
