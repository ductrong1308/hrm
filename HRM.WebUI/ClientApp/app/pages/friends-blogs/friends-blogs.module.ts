import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FriendsBlogsComponent } from './friends-blogs.component';

const FriendsBlogs_Route = [
    { path: '', component: FriendsBlogsComponent }
];

@NgModule({
    declarations: [FriendsBlogsComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(FriendsBlogs_Route)
    ]
})
export class FriendsBlogsModule { }
