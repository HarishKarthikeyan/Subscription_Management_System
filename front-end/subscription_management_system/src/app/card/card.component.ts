import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { PlanDTO } from '../../interface/PlanDTO';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  constructor(private router: Router) {}
  @Input() editable: boolean = false;
  @Input() plan!: PlanDTO;
  @Output() navigateToEdit = new EventEmitter<any>();

  onButtonClick() {
    this.navigateToEdit.emit(this.plan); 
  }
}
