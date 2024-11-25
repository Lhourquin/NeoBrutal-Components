import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NeoButton } from 'neo-ui';
import { NeoUiService } from 'neo-ui';
import { NeoCardComponent } from "../../../neo-ui/src/lib/components/neo-card/neo-card.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NeoButton, NeoCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  globalTheme = inject(NeoUiService).updateGlobalTheme({
      roundedType: 'full',
      color:'lime'
  });
  title = 'demo-app';
  toDisable = false;
  
}

