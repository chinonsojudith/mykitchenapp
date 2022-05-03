import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// importing our components and defining an object for each route
import { MenupageComponent } from './menupage/menupage.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';


// defining the routes inside the routes constant.
const routes: Routes = [
  {
    path: '', 
    component: HomeComponent
  },

  {path:'menu',
    component: MenuComponent
  },

  {path:'menu/:id',
    component: MenupageComponent
  },


  {path:'about',
    component: AboutComponent
  },
  
  {path:'contact',
  component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
