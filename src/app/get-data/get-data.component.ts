import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.css']
})
export class GetDataComponent implements OnInit {
  datas: any;
  constructor(private http: HttpClient ) {
    http.get('http://127.0.0.1:3000/auth/flights')
      .subscribe(
        data => this.datas = data,
        err => console.log(`Error: ${err}`),
        () => console.log(`Completed request`)
      );
  }

  ngOnInit() {
  }

}
