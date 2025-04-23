import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-routine',
  imports: [MatTableModule, MatInputModule, MatFormFieldModule, RouterLink],
  templateUrl: './routine.component.html',
  styleUrl: './routine.component.css',
})
export class RoutineComponent {
  data: any[] = [
    {
      time: '04:00 - 04:30',
      monday: 'Wake Up',
      tuesday: 'Wake Up',
      wednesday: 'Wake Up',
      thursday: 'Wake Up',
      friday: 'Wake Up',
      saturday: 'Wake Up',
      sunday: 'Wake Up',
    },
  ];
}
