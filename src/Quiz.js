import React, { Component } from "react";

import QuizQuestion from "./QuizQuestion";

let quizData = require("./quiz_data.json");
class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = { quiz_position: 1 };
  }

  render() {
    const quizQuestions = quizData.quiz_questions;
    return (
      <div>
        <QuizQuestion
          quiz_question={quizQuestions[this.state.quiz_position - 1]}
        />
      </div>
    );
  }
}

export default Quiz;
