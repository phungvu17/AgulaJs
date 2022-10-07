import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Component ({
  selector:"app-food",
  templateUrl: `./food.component.html`
})
export class foodConponent {
  menu: any = [
    {id:1,name:'Chichken',icon:'abc'},
    {id:2,name:'Rice',icon:'abc'},
    {id:3,name:'Drinks',icon:'abc'},

  ];
  constructor(private http: HttpClient){

  }
  ngOnInit(){ //Ham nay tu dong chay sau khi in ra html
     this.danhsach()
    // this.hcm()
    // this.london()
    // this.newyork()
    // this.tokyo()
    // this.berlin()
  }
  danhsach(){
    const url = "https://foodgroup.herokuapp.com/api/menu"
    this.http.get<any>(url)
      .subscribe(data=>{
        var ls = data.data;
        this.menu = ls ;

      })
  }
}
