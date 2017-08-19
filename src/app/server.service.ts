import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
@Injectable()
export class ServerService{
  constructor(private http: Http){}

  storeServers(servers: any[]){
     const headers= new Headers({'Content-Type':'application/json'});
    //  return this.http.post('https://http-practice-f7793.firebaseio.com/data.json',servers,
    //  {headers: headers});
    return this.http.put('https://http-practice-f7793.firebaseio.com/data.json',servers,
           {headers: headers});
  }

  getServers(){
      return this.http.get('https://http-practice-f7793.firebaseio.com/data.json')
               .map((response:Response)=>{
                 const data=response.json();
                 for(const server of data){
                     server.name= 'Fetched'+server.name;
                 }
                 return data;
               }
               );
  }
}