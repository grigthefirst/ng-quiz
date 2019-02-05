import { Question } from './question'

export const QUESTIONS: Question[] =
  [
    {
      id: 1,
      level: 3,
      question: "Is this a test question?",
      answers: ["Yes", "No"],
      correctAnswer: "Yes",
      selectedAnswer: null
    },
    {
      id: 1,
      level: 1,
      question: "2 + 2?",
      answers: ["4", "5"],
      correctAnswer: "4",
      selectedAnswer: null
    }
  ]
