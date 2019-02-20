import { NgModule, ErrorHandler } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { MaterialModule } from "./material.module";
import { ShowAuthedDirective } from "./show-authed.directive";
import { GlobalErrorHandler } from "./global-error-handler";
import { GraphQLModule } from "./graphql.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ListErrorsComponent } from "./list-errors";

// TODO: Add the GlobalErrorHandler back

@NgModule({
  imports: [CommonModule, FormsModule, HttpClientModule, ReactiveFormsModule, RouterModule],
  declarations: [ListErrorsComponent, ShowAuthedDirective],
  exports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    GraphQLModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
    ListErrorsComponent,
    ShowAuthedDirective
  ],
  // providers: [{ provide: ErrorHandler, useClass: GlobalErrorHandler }]
  providers: []
})
export class SharedModule {}
