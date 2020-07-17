import React from 'react';

function Grade(props) {
  return (
    props.grade.map((student, index) =>
      <tr key={index} className="trow">
        <td>{student.name}</td>
        <td>{student.course}</td>
        <td>{student.grade}</td>
      </tr>
    )
  );
}

export default Grade;
