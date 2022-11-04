import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <button (outSideEventHandler)="reportAnalytics($event, 'Action')">Report to analytics</button>
  <p>Status: {{status}}</p>
  <button (click)="status = 'Change detection running!'">Run change detection</button>
`,
})
export class AppComponent {
  status;
  constructor() {
    this.status = '';
  }

  reportAnalytics($event, action) {
    console.log(action);
  }

  //ngAfterViewChecked: A lifecycle hook that is called after the default change detector has completed checking a component's view for changes.
  ngAfterViewChecked() {
    console.log('View checked!!!!!');
  }
}
