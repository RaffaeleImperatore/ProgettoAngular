import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
  id: any;
  companyDetails: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.companyDetails = new Object()
   }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.getData();
  }

  getCompanyDetails(): Observable<any>{
    return this.http.get<any>('https://www.themuse.com/api/public/companies/' + this.id);
  }

  getData(){
    try {
      this.getCompanyDetails().subscribe((data) => {
        this.companyDetails = data;
      })
    }
    catch (error) {
      console.log(error)
    }
  }

}
