import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Component({
  selector:'baitap',
  templateUrl:'./baitap.component.html'
})
export class baitapConponent {
  dubao: any= [
    {temp:26,dt_txt:'2022-10-07 18:00:00'},
    {temp:27,dt_txt:'2022-10-08 18:00:00'},
    {temp:27,dt_txt:'2022-10-08 18:00:00'},
    {temp:27,dt_txt:'2022-10-08 18:00:00'},
    {temp:27,dt_txt:'2022-10-08 18:00:00'},
    {temp:27,dt_txt:'2022-10-08 18:00:00'},
    {temp:27,dt_txt:'2022-10-08 18:00:00'},

  ];


  constructor(private http:HttpClient) {
  }
  ngOnInit(){//ham này tự động chạy sau khi in ra html
    this.dubaott();

  }
  dubaott(){

    const url = `https://api.openweathermap.org/data/2.5/forecast?q=Hanoi&appid=09a71427c59d38d6a34f89b47d75975c&units=metric`;
    this.http.get<any>(url)
      .subscribe(list => {
        var db =list.list;
        this.dubao = db;

      })
  }
}
