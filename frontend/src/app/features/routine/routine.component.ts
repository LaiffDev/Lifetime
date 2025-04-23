import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';

import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-routine',
  imports: [
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
  ],

  templateUrl: './routine.component.html',
  styleUrl: './routine.component.css',
})
export class RoutineComponent {
  TimeBlockGroup = new FormGroup({
    day: new FormControl('', [Validators.required]),
    time: new FormControl('', [Validators.required]),
    routine: new FormControl('', [Validators.required]),
  });

  dailyRoutine: any;
  routines: any[] = [];

  daysOfWeek: string[] = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  saveRoutine() {
    const day = this.TimeBlockGroup.value.day;
    const time = this.TimeBlockGroup.value.time;
    const routine = this.TimeBlockGroup.value.routine;

    this.dailyRoutine = {
      day: day,
      time: time,
      routine: routine,
    };

    console.log(this.dailyRoutine);

    // this.routines.push(this.dailyRoutine);

    // console.log('Daily routines : ', this.routines);
  }
}
