import * as $ from "jquery";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CoreModule } from "@angular/flex-layout";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing.module";
import { AuthModule } from "./auth/auth.module";
import { HeaderComponent, SidebarComponent } from "./shared";
import { HelpModule } from "./help/help.module";
import { HomeModule } from "./home/home.module";
import { SharedModule } from "./shared/shared.module";
import { SpinnerComponent } from "./shared/spinner.component";

@NgModule({
  declarations: [AppComponent, HeaderComponent, SidebarComponent, SpinnerComponent],
  imports: [
    BrowserAnimationsModule,
    CoreModule,
    AuthModule,
    SharedModule,
    HomeModule,
    HelpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
