import { Routes } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { UserComponent } from '../pages/user/user.component';

export const routes: Routes = [

    {
        path: '',
        component: DashboardComponent
    },

    { path: 'user/:id', component: UserComponent } // Rute untuk detail pengguna

]
  
