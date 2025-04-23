import { Component, Input, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-time-table',
  imports: [MatPaginatorModule, MatTableModule],
  templateUrl: './time-table.component.html',
  styleUrl: './time-table.component.css',
})
export class TimeTableComponent {
  @Input() routines: any;
  displayedColumns: string[] = ['day', 'time', 'routine'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource<any>(this.routines);
  }

  ngOnInit() {
    console.log(this.routines);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['routines'] && this.routines) {
      this.dataSource = new MatTableDataSource<any>(this.routines);
      this.dataSource.paginator = this.paginator;
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
