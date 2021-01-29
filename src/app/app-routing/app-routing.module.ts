import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { OverviewComponent } from '../overview/overview.component';
import { VismisComponent } from '../vismis/vismis.component';
import { PhillosophyComponent } from '../phillosophy/phillosophy.component';
import { CbseComponent } from '../cbse/cbse.component';
import { ContactusComponent } from '../contactus/contactus.component';

const appRoutes: Routes =[
  {path:'overview',component:OverviewComponent},
  {path:'',redirectTo:'/overview',pathMatch:'full'},
  {path:'vismis',component:VismisComponent},
  {path:'phillosophy',component:PhillosophyComponent},
  {path:'cbse',component:CbseComponent},
  {path:'contact',component:ContactusComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
