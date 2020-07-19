import React from 'react';

export default class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetGradeForm = this.resetGradeForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.add(this.state);
    this.resetGradeForm();
  }

  resetGradeForm() {
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    const { name, course, grade } = this.state;
    return (
      <div>
        <h5>Add A Grade</h5>
        <form onSubmit={this.handleSubmit}>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fa fa-user" aria-hidden="true"></i>
              </span>
            </div>
            <input onChange={this.handleChange} value={name} type="text" className="form-control" placeholder="Student Name" name="name" id="name"></input>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fa fa-list-alt" aria-hidden="true"></i>
              </span>
            </div>
            <input onChange={this.handleChange} type="text" value={course} className="form-control" placeholder="Student Course" name="course" id="course"></input>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fa fa-graduation-cap" aria-hidden="true"></i>
              </span>
            </div>
            <input onChange={this.handleChange} value={grade} type="text" className="form-control" placeholder="Student Grade" name="grade" id="grade"></input>
          </div>

          <div className="form-group">
            <button onClick={this.handleSubmit} type="submit" className="btn btn-success">Add</button>
            <button type="reset" onClick={this.resetGradeForm} className="btn btn-outline-secondary ml-2">Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}
