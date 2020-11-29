import { HomeComponent } from "./home/home.component";
import { Routes, RouterModule } from "@angular/router";
const APP_ROUTES:Routes=[
    {path:'Home',component:HomeComponent},
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: '**', redirectTo: 'Home', pathMatch: 'full' }
]

export const routingModule = RouterModule.forRoot(APP_ROUTES);
