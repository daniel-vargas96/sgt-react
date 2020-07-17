import React from 'react';
import Grade from './Grade';

function GradeTable(props) {
  return (
    <div className="table-container">
      <table className="table table-bordered table-striped">
        <thead className="thead">
          <tr>
            <th>Student Name</th>
            <th>Course</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <Grade grade={props.grades} />
        </tbody>
      </table>
    </div>

  );
}

export default GradeTable;
