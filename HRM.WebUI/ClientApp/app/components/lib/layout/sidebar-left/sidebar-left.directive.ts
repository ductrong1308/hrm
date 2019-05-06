import { Directive, Input, ElementRef } from '@angular/core';

/*
 *
 */
@Directive({
  selector: '[hrmMenuToggle]'
})
export class SidebarLeftToggleDirective {
  @Input('hrmMenuToggle') item;

  /**
   * @method constructor
   * @param elementRef [description]
   */
  constructor(
    public elementRef: ElementRef
  ) {}
}
