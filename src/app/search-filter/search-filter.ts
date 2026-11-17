import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-filter.html'
})
export class SearchFilterComponent {

  // Texte indicatif reçu du parent
  @Input() placeholder: string = 'Rechercher';

  // Texte saisi, envoyé au parent à chaque modification
  @Output() filterTextChanged = new EventEmitter<string>();

  searchText: string = '';

  onChange(): void {
    this.filterTextChanged.emit(this.searchText);
  }
}
