import { Component } from '@angular/core';
import { RouterOutlet,  RouterLink} from '@angular/router';

@Component({
  selector: 'app-root',
   imports: [RouterOutlet, RouterLink],
  template: `
    <nav>
      <a routerLink="/employees">Employees</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class App {
  protected title = 'employeeui';
}