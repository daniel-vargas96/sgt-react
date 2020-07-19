import React from 'react';
import Header from './Header';
import GradeTable from './GradeTable';
import GradeForm from './GradeForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { grades: [] };
    this.addGrade = this.addGrade.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
  }

  componentDidMount() {
    fetch('/api/grades')
      .then(response => response.json())
      .then(data => this.setState({ grades: data }));
  }

  getAverageGrade() {
    const grades = this.state.grades;
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
      sum += parseInt(grades[i].grade, 10);
    }
    const newAverage = Math.trunc(sum / grades.length);
    return newAverage.toString();
  }

  addGrade(newGrade) {
    const currentGrades = this.state.grades;
    const newGrades = currentGrades.slice();
    fetch('/api/grades', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newGrade, null, 2)
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ grades: newGrades.concat(data) });
      });
  }

  deleteGrade(gradeId) {
    const currentGrades = this.state.grades;
    const newGrades = currentGrades.filter(student => student.id !== gradeId);

    fetch(`/api/grades/${gradeId}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(() => {
        this.setState({ grades: newGrades });
      });
  }

  render() {
    const average = this.getAverageGrade();
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <Header average={average} />
          </div>
          <hr></hr>
          <div className="row">
            <div className="col-8">
              <GradeTable grades={this.state.grades} delete={this.deleteGrade} />
            </div>
            <div className="col-3">
              <GradeForm add={this.addGrade} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
