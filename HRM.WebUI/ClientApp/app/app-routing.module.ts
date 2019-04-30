import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: 'Home', loadChildren: './pages/home-blogs/home-blogs.module#HomeBlogsModule' },
    { path: 'Friends', loadChildren: './pages/friends-blogs/friends-blogs.module#FriendsBlogsModule' },
    { path: 'Family', loadChildren: './pages/family-blogs/family-blogs.module#FamilyBlogsModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
