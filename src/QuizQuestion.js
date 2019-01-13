import React, { Component } from "react";

import QuizQuestionButton from "./QuizQuestionButton";

class QuizQuestion extends Component {
  render() {
    const quizQuestion = this.props.quiz_question;
    return (
      <main>
        <section>
          <p>{quizQuestion.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            <QuizQuestionButton button_text={quizQuestion.answer_options[0]} />
          </ul>
        </section>
      </main>
    );
  }
}

export default QuizQuestion;
