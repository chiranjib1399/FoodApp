import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable , BehaviorSubject} from 'rxjs';
import { catchError, first, tap } from 'rxjs/operators';
import { USER_LOGIN_URL } from '../shared/constants/url';
import { IUserLogin } from '../shared/interfaces/IUserLogin';
import { User } from '../shared/models/User';
import { ErrorHandlerService } from './err-handler.service';

@Injectable( )
export class UserService{
    private url = "http://localhost:5000/api/users";
    isUserLoggedIn$ = new BehaviorSubject<boolean>(false);
    userId: Pick<User, "id">;

    httpOptions: { headers: HttpHeaders } = {
        headers: new HttpHeaders({ "Content-Type": "application/json" }),
      };
      
  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService,
    private router: Router
  ) {}

//   signup(user: Omit<User, "id">): Observable<User> {
//     return this.http
//       .post<User>(`${this.url}/signup`, user, this.httpOptions)
//       .pipe(
//         first(),
//         catchError(this.errorHandlerService.handleError<User>("signup"))
//       );
//   }
  login(
    email: Pick<User, "email">,
    password: Pick<User, "password">
  ): Observable<{
    token: string;
    userId: Pick<User, "id">;
  }> {
    return this.http
      .post(`${this.url}/login`, { email, password }, this.httpOptions)
      .pipe(
        first(),
        tap((tokenObject: { token: string; userId: Pick<User, "id"> }) => {
          this.userId = tokenObject.userId;
          localStorage.setItem("token", tokenObject.token);
          this.isUserLoggedIn$.next(true);
          this.router.navigate(['']);
        }),
        catchError(
          this.errorHandlerService.handleError<{
            token: string;
            userId: Pick<User, "id">;
          }>("login")
        )
      );
  }
}











/*private userSubject = new BehaviorSubject<User>(new User());
    public userObservable:Observable<User>;
    constructor(private http: HttpClient){
        this.userObservable = this.userSubject.asObservable();
      }

      login(userLogin:IUserLogin):Observable<User>{
    return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
        tap({
            next: (user)=>{
                 
            },
            error: (errorResponse)=>{
                
            }
            
        })
    )
      }

      */