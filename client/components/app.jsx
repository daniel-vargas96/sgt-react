import React from 'react';
import Header from './Header';
import GradeTable from './GradeTable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { grades: [] };
    this.getAverageGrade = this.getAverageGrade.bind(this);
  }

  componentDidMount() {
    fetch('/api/grades')
      .then(response => response.json())
      .then(data => this.setState({ grades: data }));
  }

  getAverageGrade() {
    const grades = this.state.grades;
    let sum = 0;
    let newAverage;
    for (let i = 0; i < grades.length; i++) {
      sum += parseInt(grades[i].grade, 10);
    }
    newAverage = Math.trunc(sum / grades.length);
    return newAverage.toString();
  }

  render() {
    const average = this.getAverageGrade();
    return (
      <>
        <Header average={average} />
        <GradeTable grades={this.state.grades} />
      </>
    );
  }
}

export default App;
