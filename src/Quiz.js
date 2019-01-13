import React, { Component } from "react";

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
        <div className="QuizQuestion">{quizQuestions[0].instruction_text}</div>
      </div>
    );
  }
}

export default Quiz;