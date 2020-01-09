import { Component, OnInit, ViewChild } from "@angular/core";
import { SwiperContainer } from "../swiper/swiper.component";

@Component({
  selector: "app-child1",
  templateUrl: "./child1.component.html",
  styleUrls: ["./child1.component.scss"]
})
export class Child1Component implements OnInit {
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
