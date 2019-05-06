import { Directive, Input, ElementRef } from '@angular/core';

/*
 *
 */
@Directive({
  selector: '[hrmTabToggle]'
})
export class TabToggleDirective {
  @Input('hrmTabToggle') tabComponent;

  /**
   * @method constructor
   * @param elementRef [description]
   */
  constructor(
    public elementRef: ElementRef
  ) {}
}
