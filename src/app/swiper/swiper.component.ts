import {
  Injectable,
  Inject,
  Component,
  ElementRef,
  Host,
  Input
} from "@angular/core";
import Swiper from "swiper";

@Injectable()
@Component({
  selector: "swiper-container",
  template: `
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <ng-content></ng-content>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  `
})
export class SwiperContainer {
  @Input() public options: any;
  public swiper: any;

  constructor(@Inject(ElementRef) private elementRef: ElementRef) {}

  public ngOnInit() {
    let options = this.setDefaultOptions({}, this.options);

    const nativeElement = this.elementRef.nativeElement;
    this.swiper = new Swiper(nativeElement.children[0], this.options);
  }

  public update() {
    setTimeout(() => {
      this.swiper.update();
    });
  }

  private setDefaultOptions(dest: any, ...args: any[]) {
    for (let i = arguments.length - 1; i >= 1; i--) {
      let source = arguments[i] || {};
      for (let key in source) {
        if (source.hasOwnProperty(key) && !dest.hasOwnProperty(key)) {
          dest[key] = source[key];
        }
      }
    }
    return dest;
  }
}

@Injectable()
@Component({
  selector: "swiper-slide",
  template: "<div><ng-content></ng-content></div>"
})
export class SwiperSlide {
  private ele: HTMLElement;

  constructor(
    @Inject(ElementRef) elementRef: ElementRef,
    @Host() @Inject(SwiperContainer) swiper: SwiperContainer
  ) {
    this.ele = elementRef.nativeElement;
    this.ele.classList.add("swiper-slide");

    swiper.update();
  }
}
