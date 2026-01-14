import { Component } from '@angular/core';
import { RandomBgColorDirective } from './directives/random-bg-color.directive';

@Component({
  selector: 'app-first-task',
  imports: [RandomBgColorDirective],
  templateUrl: './first-task.html',
  styleUrl: './first-task.scss',
})
export class FirstTask {

}
