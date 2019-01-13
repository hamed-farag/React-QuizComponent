import React, { Component } from "react";

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
            <li>{quizQuestion.answer_options[0]}</li>
          </ul>
        </section>
      </main>
    );
  }
}

export default QuizQuestion;
