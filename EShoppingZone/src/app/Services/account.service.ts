import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class AccountService {
apiurl ='https://localhost:7052/api/UserDetails/login'
  constructor(private http:HttpClient) { }

  proceedLogin(usercred:any){
    return this.http.post(this.apiurl,usercred)
    
  }
  GetToken(){
    return localStorage.getItem('token')||''
  }
}
