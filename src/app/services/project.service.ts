import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProjectDb } from '../DTOs/Entity/ProjectDb';

import { TypeDb } from '../DTOs/Entity/TypeDb';
import { HomeUserResponse } from '../DTOs/HomeUserResponse';
import { UserDTO } from '../DTOs/Entity/UserDTO';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private homeUser: BehaviorSubject<UserDTO[]> = new BehaviorSubject<UserDTO[]>([]);
  constructor(private http: HttpClient) { }

  public getUsers(): Observable<HomeUserResponse> {
    return this.http.get<HomeUserResponse>("/users/users");
  }
  public setCurrentUsers(user: UserDTO[]) {
    this.homeUser.next(user);
  }
  public getCurrentUsers(): Observable<UserDTO[]> {
    return this.homeUser;
  }
  public removeUser(Id: number): Observable<any> {
    return this.http.get<number>('/users/removeUser' + "?Id=" + Id);
  }

  // public removeUser(Id: number): Observable<any> {
  //   return this.http.post<any>('/users/register',);
  // }
}
// public RemoveProjectById(Id: number): Observable<any> {
//   return this.Http.get<number>('https://localhost:7108/Project/RemoveProject' + "?Id=" + Id);
// }
// RemoveProjectById (Id:number):Observable<number>{
//   console.log(Id);
//   let httpheaders=new HttpHeaders()
//   .set('Content-type','application/Json');
//   let options={
//     headers:httpheaders
//   };
//   return this.Http.delete<number>('https://localhost:7108/Project/RemoveProject'+"?Id="+ Id);
// }
// public RemoveProjectById(e : any){
//   this.Http.post('https://localhost:7108/Project/GetAll', {Id })
// }
//}
