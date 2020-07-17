import React from 'react';

export default class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { grades: [] }
  }

  render() {

    return (
      <div>
        <h5>Add A Grade</h5>
        <form>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fa fa-user" aria-hidden="true"></i>
              </span>
            </div>
            <input type="text" className="form-control" placeholder="Student Name" name="name" id="name"></input>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fa fa-list-alt" aria-hidden="true"></i>
              </span>
            </div>
            <input type="text" className="form-control" placeholder="Student Course" name="course" id="course"></input>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fa fa-graduation-cap" aria-hidden="true"></i>
              </span>
            </div>
            <input type="text" className="form-control" placeholder="Student Grade" name="grade" id="grade"></input>
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-success">Add</button>
            <button type="reset" className="btn btn-outline-secondary">Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}
