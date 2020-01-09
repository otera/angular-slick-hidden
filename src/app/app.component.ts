import { Component, ViewChild } from "@angular/core";
import { SwiperContainer } from "./swiper/swiper.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  @ViewChild("homeSlide", { static: false }) public homeSlide: SwiperContainer;
  public swipeOptions = {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets"
    }
  };

  title = "swiper-test";

  isChild1 = true;
  isChild2 = false;

  display1() {
    this.isChild1 = true;
    this.isChild2 = false;
  }
  display2() {
    this.isChild1 = false;
    this.isChild2 = true;
  }
}
