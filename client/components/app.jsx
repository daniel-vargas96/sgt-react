import React from 'react';
import Header from './Header';
import GradeTable from './GradeTable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { grades: [] };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    const prevGrades = this.state.grades;
    const newGrades = prevGrades.splice();
    fetch('/api/grades')
      .then(response => response.json())
      .then(data => this.setState({ grades: newGrades.concat(data) }));
  }

  render() {
    return (
      <>
        <Header />
        <GradeTable grades={this.state.grades}/>
      </>
    );
  }
}

export default App;
