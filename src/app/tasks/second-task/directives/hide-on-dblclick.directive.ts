import { Directive, HostBinding, HostListener } from '@angular/core';

/**
 * Directive to hide an element when it is double-clicked.
 */
@Directive({
  selector: '[appHideOnDblClick]' // This directive can be applied as an attribute: <div appHideOnDblClick></div>
})
export class HideOnDblClickDirective {

  /**
   * Binds the 'style.display' property of the host element to this variable.
   * Setting it to 'none' will hide the element from the DOM visually.
   */
  @HostBinding('style.display')
  display: string | null = null; // null means the element keeps its default display style

  /**
   * Listens for the 'dblclick' (double-click) event on the host element.
   * When the element is double-clicked, this method is called.
   */
  @HostListener('dblclick')
  onDoubleClick(): void {
    // Hide the element by setting display to 'none'
    this.display = 'none';
  }
}
