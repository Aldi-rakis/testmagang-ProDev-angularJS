// src/app/pages/pages.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule],
  exports: [TableComponent]  // Eksport komponen agar bisa digunakan di modul lain
})
export class PagesModule {}
