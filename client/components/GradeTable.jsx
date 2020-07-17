import React from 'react';
import Grade from './Grade';

function GradeTable(props) {
  return (
    <table className="table table-bordered">
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
  );
}

export default GradeTable;
