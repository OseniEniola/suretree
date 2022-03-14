import { HttpClient, HttpParams } from '@angular/common/http';


export class PostService{

    http:HttpClient | undefined 
    url="https://webhook.site/5e7e1475-6e4c-437d-b99d-54c7e60c424c"
    postDate(data:string){
        this.http?.post(this.url,JSON.parse(data)).subscribe((res)=>{
            console.log('Post Response:', res)
        })
    }
}