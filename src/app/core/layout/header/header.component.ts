import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ShowAuthedDirective } from '../../../shared/directives/show-authed.directive';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [
    RouterLinkActive,
    RouterLink,
    AsyncPipe,
    NgIf,
    ShowAuthedDirective
  ],
  standalone: true,
})
export class HeaderComponent {

}
