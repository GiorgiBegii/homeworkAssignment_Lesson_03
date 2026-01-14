import { Component, signal } from '@angular/core';
import { FirstTask } from './tasks/first-task/first-task';
import { SecondTask } from './tasks/second-task/second-task';
import { ThirdTask } from './tasks/third-task/third-task';

@Component({
  selector: 'app-root',
  imports: [FirstTask, SecondTask, ThirdTask],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('homeworkAssignment_Lesson_03');
}
