import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'bionic-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.css']
})
export class BreadCrumbComponent implements OnInit {
  crumbFormat: { label: string; url: string };
  breadcrumbs: Array<{ label: string; url: string }>;
  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit() {
    this.createBreadCrum();
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => this.createBreadCrum());
  }

  private createBreadCrum(): void {
    this.breadcrumbs = [];
    let currentRoute = this.route.root,
      url = '';

    do {
      const childrenRoutes = currentRoute.children;

      currentRoute = null;

      childrenRoutes.forEach((route, i) => {
        const routeSnapshot = route.snapshot;

        url += '/' + routeSnapshot.url.map(segment => segment.path).join('/');
        this.breadcrumbs.push({
          label: route.snapshot.data.breadCrum,
          url: url
        });

        currentRoute = route;
      });
    } while (currentRoute);
    //console.log(this.breadcrumbs);
    this.breadcrumbs.splice(1, 1);
  }
}
