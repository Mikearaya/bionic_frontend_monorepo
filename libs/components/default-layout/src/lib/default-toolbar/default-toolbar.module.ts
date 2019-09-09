import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BionicToolbarComponent } from './bionic-toolbar/bionic-toolbar.component';
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BionicToolbarComponent],
  imports: [CommonModule, ToolbarModule, RouterModule],
  exports: [BionicToolbarComponent]
})
export class DefaultToolbarModule {}
