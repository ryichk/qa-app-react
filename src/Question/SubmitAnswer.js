import React, {Component, Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import auth0Client from '../Auth';

class SubmitAnswer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: '',
    };
  }

  updateAnswer(value) {
    this.setState({
      answer: value,
    });
  }

  submit() {
    this.props.submitAnswer(this.state.answer);

    this.setState({
      answer: '',
    });
  }

  render() {
    if (!auth0Client.isAuthenticated()) return null;
    return (
      <Fragment>
        <div className="form-group text-center">
          <label htmlFor="exampleInputEmail1">回答：</label>
          <input
            type="text"
            onChange={(e) => {this.updateAnswer(e.target.value)}}
            className="form-control"
            placeholder="あなたの回答を共有してください。"
            value={this.state.answer}
          />
        </div>
        <button
          className="btn btn-primary"
          onClick={() => {this.submit()}}>
          送信
        </button>
        <hr className="my-4" />
      </Fragment>
    )
  }
}

export default withRouter(SubmitAnswer);