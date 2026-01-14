import { Component } from '@angular/core';
import { ClickCounterDirective } from './directives/click-counter.directive';

@Component({
  selector: 'app-third-task',
  imports: [ClickCounterDirective],
  templateUrl: './third-task.html',
  styleUrl: './third-task.scss',
})
export class ThirdTask {
  
}
