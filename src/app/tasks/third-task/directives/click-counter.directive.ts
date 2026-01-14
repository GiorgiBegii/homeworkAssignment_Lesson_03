import { Directive, HostBinding, HostListener } from '@angular/core';

/**
 * Directive that counts the number of times an element is clicked
 * and updates the element's inner text to show the click count.
 */
@Directive({
  selector: '[appClickCounter]' // Use this as an attribute: <div appClickCounter></div>
})
export class ClickCounterDirective {

  /**
   * Keeps track of how many times the element has been clicked.
   */
  private count = 0;

  /**
   * Binds the host element's innerText property to this variable.
   * Whenever hostText is updated, the element's text content updates automatically.
   */
  @HostBinding('innerText')
  hostText!: string;

  /**
   * Initialize the element's text when the directive is created.
   */
  constructor() {
    this.hostText = 'Clickable div — Click count: 0';
  }

  /**
   * Listens for the 'click' event on the host element.
   * Every click increments the count and updates the host text.
   */
  @HostListener('click')
  onClick(): void {
    this.count++; // Increase click count
    this.hostText = `Clickable div — Click count: ${this.count}`; // Update displayed text
  }
}
