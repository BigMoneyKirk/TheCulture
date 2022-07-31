import { Directive, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[topMargin]'
})
export class TopMarginDirective implements OnInit {
  @HostBinding('style.marginTop') marginTop: string = '';
  @Input() marginTopValue: string = `50px`;

  constructor() { }

  ngOnInit() {
    this.marginTop = this.marginTopValue;
  }

}
