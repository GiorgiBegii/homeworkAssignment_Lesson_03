import { Directive, HostBinding, HostListener } from '@angular/core';

/**
 * Directive to change the background color of an element to a random color when clicked.
 */
@Directive({
  selector: '[appRandomBgColor]' // This directive can be used as an attribute: <div appRandomBgColor></div>
})
export class RandomBgColorDirective {

  /**
   * Binds the 'style.backgroundColor' property of the host element to this variable.
   * Whenever this.backgroundColor changes, Angular updates the element's background color automatically.
   */
  @HostBinding('style.backgroundColor')
  backgroundColor!: string; // '!' tells TypeScript that this property will be initialized later.

  /**
   * Listens for the 'click' event on the host element.
   * When the element is clicked, this method is called.
   */
  @HostListener('click')
  onClick(): void {
    // Update the background color to a new random color
    this.backgroundColor = this.getRandomColor();
  }

  /**
   * Generates a random RGB color string.
   * returns {string} The random color in 'rgb(r, g, b)' format.
   */
  private getRandomColor(): string {
    // Generate random values between 0 and 255 for red, green, and blue
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // Return the color as an RGB string
    return `rgb(${r}, ${g}, ${b})`;
  }
}
