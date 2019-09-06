import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: 'purchase-orders',
		loadChildren: '@bionic/procurment/purchase-order#PurchaseOrderModule',
		data: {
			breadCrum: 'Purchase orders',
			title: 'Purchase Order',
			claimType: 'canViewPurchaseOrders'
		}
	},
	{
		path: 'purchase-recievings',
		loadChildren:
			'@bionic/procurment/purchase-recieving#PurchaseRecievingModule',
		data: {
			breadCrum: 'Purchase requests',
			title: 'Purchase requests',
			claimType: 'canViewPurchaseRequests'
		}
	},
	{
		path: 'purchase-order-payments',
		loadChildren:
			'@bionic/procurment/purchase-order-payment#PurchaseOrderPaymentModule',
		data: {
			breadCrum: 'Purchase Order Payment',
			title: 'Purchase Order Payments',
			claimType: 'canViewPurchaseOrderPayments'
		}
	},
	{
		path: 'purchase-terms',
		loadChildren: '@bionic/procurment/purchase-term#PurchaseTermModule',
		data: {
			breadCrum: 'Purchase Terms',
			title: 'Purchase Terms',
			claimType: 'canViewPurchaseTerms'
		}
	},
	{
		path: 'vendors',
		loadChildren: '@bionic/procurment/vendor#VendorModule',
		data: {
			breadCrum: 'Vendors',
			title: 'Vendors',
			claimType: 'canViewVendors'
		}
	},
	{
		path: 'settings',
		data: {
			breadCrum: 'Settings',
			claimType: 'canViewSystemLookups'
		},
		children: []
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ProcurmentRoutingModule {}
