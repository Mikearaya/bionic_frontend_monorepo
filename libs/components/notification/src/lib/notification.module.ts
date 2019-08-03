import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from '@syncfusion/ej2-angular-notifications';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ToastComponent, NotificationComponent],
  exports: [NotificationComponent]
})
export class NotificationModule {}
