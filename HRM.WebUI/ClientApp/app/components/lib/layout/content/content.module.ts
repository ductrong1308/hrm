import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BreadcrumbsModule } from '../../breadcrumbs/breadcrumbs.module';
import { ContentComponent } from './content.component';
import { ButtonModule } from '@progress/kendo-angular-buttons';

@NgModule({
    imports: [CommonModule, RouterModule, BreadcrumbsModule, ButtonModule],
    exports: [ContentComponent],
    declarations: [ContentComponent]
})
export class ContentModule {}
