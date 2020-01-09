import { Component, OnInit, ViewChild } from "@angular/core";
import { SwiperContainer } from "../swiper/swiper.component";

@Component({
  selector: "app-child2",
  templateUrl: "./child2.component.html",
  styleUrls: ["./child2.component.scss"]
})
export class Child2Component implements OnInit {
  @ViewChild("homeSlide", { static: false }) public homeSlide: SwiperContainer;
  public swipeOptions = {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets"
    }
  };

  constructor() {}

  ngOnInit() {}
}
