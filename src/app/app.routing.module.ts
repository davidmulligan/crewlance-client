import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "client",
    loadChildren: "./client/client.module#ClientModule"
  }
  // {
  //   path: "settings",
  //   loadChildren: "./settings/settings.module#SettingsModule"
  // },
  // {
  //   path: "profile",
  //   loadChildren: "./profile/profile.module#ProfileModule"
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
