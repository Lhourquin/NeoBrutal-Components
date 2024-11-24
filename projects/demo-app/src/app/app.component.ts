import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NeoButton } from 'neo-ui';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NeoButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'demo-app';
  bgColorBtn = '#807dfa';
  toDisable = false;
}

