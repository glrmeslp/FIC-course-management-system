import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { classesInterface } from "../interfaces/classes-interface";

@Injectable({ providedIn: 'root' })
export class ClassesService {
  public static readonly API_URL = environment.backEndUrl;

  constructor(
    private http: HttpClient,
  ) {}

  listAllClasses(): Observable<classesInterface> {
    return this.http.get<classesInterface>(ClassesService.API_URL + '/classes');
  }
}
