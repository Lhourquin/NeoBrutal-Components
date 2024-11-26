import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NeoButton } from 'neo-ui';
import { NeoUiService } from 'neo-ui';
import { NeoCard } from 'neo-ui';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NeoButton, NeoCard],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  globalTheme = inject(NeoUiService).updateGlobalTheme({
      roundedType: 'medium',
      color:'lime'
  });
  title = 'demo-app';
  isDisabled = false;
  
}

