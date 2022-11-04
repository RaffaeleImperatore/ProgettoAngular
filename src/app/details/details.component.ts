import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: any;
  detailsJob: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.detailsJob = new Object()
   }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.getData();
  }

  getDetail(): Observable<any>{
    return this.http.get<any>('https://www.themuse.com/api/public/jobs/' + this.id);
  }

  getData(){
    try {
      this.getDetail().subscribe((data) => {
        this.detailsJob = data;
        console.log(this.detailsJob)
      })
    }
    catch (error) {
      console.log(error);
    }
  }

}
