import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FamilyBlogsComponent } from './family-blogs.component';

const FamilyBlogs_Route = [{ path: '', component: FamilyBlogsComponent }];

@NgModule({
    declarations: [FamilyBlogsComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(FamilyBlogs_Route)
    ]
})
export class FamilyBlogsModule { }
