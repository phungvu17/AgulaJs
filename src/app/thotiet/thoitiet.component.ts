import {Component, Input,} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Component({
  selector:'thoitiet',
  templateUrl: './thoitiet.component.html'
})
export class thoitietComponent{
  city: string = "...";
  temp: number = 0;
  hump: number = 0;
  press: number = 0;

  //API
  constructor(private http: HttpClient) {
  }

  ngOnInit(){ //Ham nay tu dong chay sau khi in ra html
    // this.hanoi()
    // this.hcm()
    // this.london()
    // this.newyork()
    // this.tokyo()
    // this.berlin()
  }

  hanoi(){
    //Lay thong tin thoi tiet Ha Noi
    const url = "https://api.openweathermap.org/data/2.5/weather?q=hanoi&appid=09a71427c59d38d6a34f89b47d75975c&units=metric"
    this.http.get<any>(url)
      .subscribe(data=>{
        this.city = data.name;
        this.temp = data.main.temp;
        this.hump = data.main.humidity;
        this.press = data.main.pressure;
      })
  }
  hcm(){
    //Lay thong tin thoi tiet Ho Chi Minh City
    const url = "https://api.openweathermap.org/data/2.5/weather?q=saigon&appid=09a71427c59d38d6a34f89b47d75975c&units=metric"
    this.http.get<any>(url)
      .subscribe(data=>{
        this.city = data.name;
        this.temp = data.main.temp;
        this.hump = data.main.humidity;
        this.press = data.main.pressure;
      })
  }
  london(){
    //Lay thong tin thoi tiet London
    const url = "https://api.openweathermap.org/data/2.5/weather?q=london&appid=09a71427c59d38d6a34f89b47d75975c&units=metric"
    this.http.get<any>(url)
      .subscribe(data=>{
        this.city = data.name;
        this.temp = data.main.temp;
        this.hump = data.main.humidity;
        this.press = data.main.pressure;
      })
  }

  newyork(){
    //Lay thong tin thoi tiet New York
    const url = "https://api.openweathermap.org/data/2.5/weather?q=new york&appid=09a71427c59d38d6a34f89b47d75975c&units=metric"
    this.http.get<any>(url)
      .subscribe(data=>{
        this.city = data.name;
        this.temp = data.main.temp;
        this.hump = data.main.humidity;
        this.press = data.main.pressure;
      })
  }

  tokyo(){
    //Lay thong tin thoi tiet Tokyo
    const url = "https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=09a71427c59d38d6a34f89b47d75975c&units=metric"
    this.http.get<any>(url)
      .subscribe(data=>{
        this.city = data.name;
        this.temp = data.main.temp;
        this.hump = data.main.humidity;
        this.press = data.main.pressure;
      })
  }

  berlin(){
    //Lay thong tin thoi tiet Berlin
    const url = "https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=09a71427c59d38d6a34f89b47d75975c&units=metric"
    this.http.get<any>(url)
      .subscribe(data=>{
        this.city = data.name;
        this.temp = data.main.temp;
        this.hump = data.main.humidity;
        this.press = data.main.pressure;
      })
  }


}
