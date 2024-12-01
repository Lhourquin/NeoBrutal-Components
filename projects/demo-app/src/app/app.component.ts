import { Component, inject, OnChanges, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NeoButton, NeoDropdownItem, NeoInput } from 'neo-ui';
import { NeoUiService } from 'neo-ui';
import { NeoCard, NeoDropdown } from 'neo-ui';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NeoDropdown,
    NeoDropdownItem,
    RouterOutlet,
    NeoButton,
    NeoCard,
    NeoInput,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  categories = [
    { id: 1, title: 'Catégorie 1' },
    { id: 2, title: 'Catégorie 2' },
    { id: 3, title: 'Catégorie 3' },
    { id: 4, title: 'Catégorie 4' },
    { id: 5, title: 'Catégorie 5' },
    { id: 6, title: 'Catégorie 6' },
    { id: 7, title: 'Catégorie 7' },
    { id: 8, title: 'Catégorie 8' },
    { id: 9, title: 'Catégorie 9' },
    { id: 10, title: 'Catégorie 10' },
  ];

  searchValue: string = '';
  group1Items = this.categories.slice(0, 5); // Premiers 5 éléments
  group2Items = this.categories.slice(5); // Reste des éléments
  globalTheme = inject(NeoUiService).updateGlobalTheme({
    roundedType: 'medium',
    themeColor: 'red',
  });
  selectedCategory: string = '';
  loginForm = new FormGroup({
    identifier: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  label = signal('Sélectionner une catégorie');

  ngOnInit(): void {
    this.loginForm.get('identifier')?.valueChanges.subscribe((value) => {
      console.log('Valeur actuelle :', value);
    });
  }
  filterItems(items: any[]): any[] {
    if (!this.searchValue) return items;
    return items.filter((item) =>
      item.title.toLowerCase().includes(this.searchValue),
    );
  }
  // Optionnel : méthode pour gérer la recherche
  onSearch(searchValue: string): void {
    console.log('Recherche :', searchValue);
    this.searchValue = searchValue;
  }
  selectCategory(id: number, items: any[]) {
    console.log(id);
    this.selectedCategory = items.find((c) => c.id == id).title;
    this.label.set(this.selectedCategory);
    console.log(this.selectedCategory);
  }
  getSelection(event: any) {
    console.log(event);
  }
}
