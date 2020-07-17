import React from 'react';

function Grade(props) {
  return (
    props.grade.map((obj, index) =>
      <tr key={index} className="trow">
        <td>{obj.name}</td>
        <td>{obj.course}</td>
        <td>{obj.grade}</td>
      </tr>
    )
  );
}

export default Grade;
