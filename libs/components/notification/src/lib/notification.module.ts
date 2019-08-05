import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from '@syncfusion/ej2-angular-notifications';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  imports: [CommonModule, ToastModule],
  declarations: [NotificationComponent],
  exports: [NotificationComponent]
})
export class NotificationModule {}
