import { Injectable } from '@angular/core';
import { UserDetails } from '../Models/UserDetails.model';
import { map, Observable } from 'rxjs'; 
import { HttpClient ,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  public userService =  UserDetails;
  readonly APIUrl ="https://localhost:7052"
  constructor(private http:HttpClient) { }

//User service


GetAllUserDetails():Observable<any[]>{
  return this.http.get<any[]>(this.APIUrl+'/api/UserDetails/GetAllUserDetails()')
}
addUserDetails(val:any){
  console.log(val);
  return this.http.post<UserDetails>(this.APIUrl+'/api/UserDetails/SaveUserDetails',val)
  }
userlogin(val:any){
  console.log(val);
  return this.http.post<UserDetails>(this.APIUrl+'/api/UserDetails/login',val)
}
EmailService(name:any,receiver:any){
  return this.http.get<any[]>(this.APIUrl+'/api/UserDetails/EmailService?name='+name+'&receiver='+receiver)
 }
 getUserProfile(){
  var tokenHeader = new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')})
  console.log(tokenHeader);
  return this.http.get(this.APIUrl+'/api/UserDetails/GetUserDetails?UserId=', {headers : tokenHeader});
}

  
}
