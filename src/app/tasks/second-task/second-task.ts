import { Component } from '@angular/core';
import { HideOnDblClickDirective } from './directives/hide-on-dblclick.directive';

@Component({
  selector: 'app-second-task',
  imports: [HideOnDblClickDirective],
  templateUrl: './second-task.html',
  styleUrl: './second-task.scss',
})
export class SecondTask {

}
