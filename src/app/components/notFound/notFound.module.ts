import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './notFound.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path:'',
      component:NotFoundComponent
    }])
  ],
  exports:[NotFoundComponent],
  declarations: [NotFoundComponent]
})
export class NotFoundModule { }
