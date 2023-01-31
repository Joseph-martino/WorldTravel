import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { SingleTravelComponent } from "./single-travel/single-travel.component";
import { TravelsListComponent } from "./travels-list/travels-list.component";

const routes: Routes = [
    { path: '', component: LandingPageComponent},
    { path: 'travels', component: TravelsListComponent},
    { path: 'travels/:id', component: SingleTravelComponent}
];

@NgModule(
    {
        imports: [
            RouterModule.forRoot(routes)

        ],
        exports: [
            RouterModule
        ]

    }
)

export class AppRoutingModule {

}