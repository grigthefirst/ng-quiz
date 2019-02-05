import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { QUESTIONS } from '../mock-questions';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.styl']
})
export class QuestionsComponent implements OnInit {

  questions: Question[] = QUESTIONS;

  selectedQuestion: Question;
  onSelect(question: Question): void {
    console.log(question);
    this.selectedQuestion = question;
  }

  constructor() { }

  ngOnInit() {
  }

}
