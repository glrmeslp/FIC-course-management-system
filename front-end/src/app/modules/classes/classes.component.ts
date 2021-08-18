import { ClassesService } from './../../services/classes.service';
import { classesInterface } from './../../interfaces/classes-interface';
import { Observable } from 'rxjs';
import { debounceTime, map, catchError } from 'rxjs/operators';

import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['name', 'startDate', 'endDate', 'teacher', 'ficCourse'];
  listAllClasses$: Observable<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private classesService: ClassesService,
  ) {}

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.listAllClasses();
  }

  listAllClasses() {
    this.listAllClasses$ = this.classesService.listAllClasses().pipe(
      map((classes: classesInterface) => {
        return classes.data;
      }), catchError((err: any, caught: Observable<any>) => {
        return caught
      }));
      console.log(this.listAllClasses$)
  }

}
