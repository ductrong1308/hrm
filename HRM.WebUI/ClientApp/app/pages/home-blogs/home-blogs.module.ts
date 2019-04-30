import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeBlogsComponent } from './home-blogs.component';

const HomeBlogs_Route = [{ path: '', component: HomeBlogsComponent }];

@NgModule({
    declarations: [HomeBlogsComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(HomeBlogs_Route)
    ],
    providers: []
})
export class HomeBlogsModule { }
