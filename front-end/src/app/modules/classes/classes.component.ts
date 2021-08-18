
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface Classes {
  name: string;
  startDate: string;
  endDate: string;
  teacher: string;
  ficCourse: string;
}

const ELEMENT_DATA: Classes[] = [
  {name: 'Docker Compose - 2022.1', startDate: "2021-08-04T15:33:45.670+00:00", endDate: "2021-08-04T15:33:45.670+00:00", teacher: "611546cc913e4b002b2ddc19", ficCourse: "611546cc913e4b002b2ddc19"},
  {name: 'Docker Compose - 2022.2', startDate: "2021-08-04T15:33:45.670+00:00", endDate: "2021-08-04T15:33:45.670+00:00", teacher: "611546cc913e4b002b2ddc19", ficCourse: "611546cc913e4b002b2ddc19"},
  {name: 'Docker Compose - 2023.1', startDate: "2021-08-04T15:33:45.670+00:00", endDate: "2021-08-04T15:33:45.670+00:00", teacher: "611546cc913e4b002b2ddc19", ficCourse: "611546cc913e4b002b2ddc19"},
  {name: 'Docker Compose - 2023.2', startDate: "2021-08-04T15:33:45.670+00:00", endDate: "2021-08-04T15:33:45.670+00:00", teacher: "611546cc913e4b002b2ddc19", ficCourse: "611546cc913e4b002b2ddc19"},
  {name: 'Desenvolvimento Web - 2021.2', startDate: "2021-08-04T15:33:45.670+00:00", endDate: "2021-08-04T15:33:45.670+00:00", teacher: "611546cc913e4b002b2ddc19", ficCourse: "611546cc913e4b002b2ddc19"},
  {name: 'Desenvolviemnto Mobile iOS - 2021.1', startDate: "2021-08-04T15:33:45.670+00:00", endDate: "2021-08-04T15:33:45.670+00:00", teacher: "611546cc913e4b002b2ddc19", ficCourse: "611546cc913e4b002b2ddc19"},
];

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['name', 'startDate', 'endDate', 'teacher', 'ficCourse'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
  }

}
