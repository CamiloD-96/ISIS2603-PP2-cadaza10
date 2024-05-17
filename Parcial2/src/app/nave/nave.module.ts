import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaveListComponent } from './nave-list/nave-list.component';
import { NaveDetailComponent } from './nave-detail/nave-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NaveListComponent, NaveDetailComponent],
  exports: [NaveListComponent]
})
export class NaveModule { }
