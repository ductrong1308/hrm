import { Directive, Input, Renderer2, ElementRef } from '@angular/core';

import { ColorService } from './color.service';

@Directive({
  selector: '[hrmColor]',
  providers: [ColorService]
})
export class BackgroundColorDirective {
  /**
   * @method constructor
   * @param elementRef   [description]
   * @param renderer2    [description]
   * @param colorService [description]
   */
  constructor(
    private elementRef: ElementRef,
    private renderer2: Renderer2,
    private colorService: ColorService
  ) {}

  @Input('hrmColorCondition') condition = true;
  @Input('hrmColorPrefix') prefix: string;
  @Input('hrmColorProperty') property: string;
  @Input('hrmColor') set color(color: string) {
    this.colorService.setBackgroundColor(color, this.condition, this.property, this.prefix);
  }
}

@Directive({
  selector: '[hrmFontColor]',
  providers: [ColorService]
})
export class ColorDirective {
  /**
   * @method constructor
   * @param elementRef   [description]
   * @param renderer2    [description]
   * @param colorService [description]
   */
  constructor(
    private elementRef: ElementRef,
    private renderer2: Renderer2,
    private colorService: ColorService
  ) {}

  @Input('hrmFontColor') set color(color: string) {
    this.colorService.setFontColor(color);
  }
}
