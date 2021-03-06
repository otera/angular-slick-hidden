import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { Child1Component } from "./child1/child1.component";
import { Child2Component } from "./child2/child2.component";
import { SwiperContainer, SwiperSlide } from "./swiper/swiper.component";

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    SwiperContainer,
    SwiperSlide
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
