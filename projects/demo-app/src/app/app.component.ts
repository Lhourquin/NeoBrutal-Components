import { Component, inject, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NeoButton, NeoInput } from 'neo-ui';
import { NeoUiService } from 'neo-ui';
import { NeoCard } from 'neo-ui';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, RouterOutlet, NeoButton, NeoCard, NeoInput],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  globalTheme = inject(NeoUiService).updateGlobalTheme({
    roundedType: 'medium',
    themeColor: 'red',
  });
  title = 'demo-app';
  isDisabled = true;
  loginForm = new FormGroup({
    identifier: new FormControl({ value: '', disabled: true }, [
      Validators.required,
    ]),
    password: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    this.loginForm.get('identifier')?.valueChanges.subscribe((value) => {
      console.log('Valeur actuelle :', value);
    });
    console.log(this.loginForm);
  }
}
