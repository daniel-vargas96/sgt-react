import React from 'react';
import Grade from './Grade';

function GradeTable(props) {
  const studentRows = props.grades.map((student, index) => {
    return <Grade key={ index } grade={student.grade} name={student.name} course={student.course}/>;
  });

  return (

    <div className="table-container ml-5 border border-dark">
      <table className="table table-bordered table-striped">
        <thead className="thead">
          <tr>
            <th>Student Name</th>
            <th>Course</th>
            <th>Grade</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {studentRows}
        </tbody>
      </table>
    </div>
  );
}

export default GradeTable;
