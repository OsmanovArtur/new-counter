import React, { Component } from "react";
import classes from "./App.module.css";
import { Button } from "react-bootstrap";

import { connect } from "react-redux";
import {
  changeCounter,
  saveIntermediateResult,
  deleteItem,
} from "./Actions/ActionCreator";

class App extends Component {
  render() {
    return (
      <>
        <div className={classes.Container}>
          <div className={classes.BtnArea}>
            <Button
              variant="outline-secondary"
              className={classes.Btn}
              onClick={() => this.props.onClickBtn(-20)}
            >
              -20
            </Button>
            <Button
              variant="outline-secondary"
              className={classes.Btn}
              onClick={() => this.props.onClickBtn(-10)}
            >
              -10
            </Button>
            <Button
              variant="outline-secondary"
              className={classes.Btn}
              onClick={() => this.props.onClickBtn(0)}
            >
              0
            </Button>
            <Button
              variant="outline-secondary"
              className={classes.Btn}
              onClick={() => this.props.onClickBtn(5)}
            >
              5
            </Button>
            <Button
              variant="outline-secondary"
              className={classes.Btn}
              onClick={() => this.props.onClickBtn(10)}
            >
              10
            </Button>
            <Button
              variant="outline-secondary"
              className={classes.Btn}
              onClick={() => this.props.onClickBtn(20)}
            >
              20
            </Button>

            <h1> Результат:{this.props.results}</h1>
            <div>
              <h2
                onClick={() =>
                  this.props.showIntermediateResult(this.props.results)
                }
              >
                Промежуточный результат:
              </h2>
              {this.props.intermediateResult.map((item, index) => {
                return (
                  <ul key={index} className={classes.intermediateResult}>
                    {index + 1} )
                    <li onClick={() => this.props.deleteItem(index)}>{item}</li>
                  </ul>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    results: state.AddReducer.results,
    intermediateResult: state.intermadiateResultReducer.intermediateResult,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onClickBtn: (number) => dispatch(changeCounter(number)),
    showIntermediateResult: (number) =>
      dispatch(saveIntermediateResult(number)),
    deleteItem: (index) => dispatch(deleteItem(index)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
