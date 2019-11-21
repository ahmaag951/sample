import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteComponent } from './components/delete/delete.component';
import { DataTableComponent } from './components/data-table/data-table.component';

@NgModule({
  declarations: [DeleteComponent, DataTableComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
