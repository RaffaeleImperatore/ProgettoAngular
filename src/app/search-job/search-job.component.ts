import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { pages } from '../pages';
import { categories } from '../categories';
import { jobLevels } from '../jobLevels';
import { cities } from '../cities';

@Component({
  selector: 'app-search-job',
  templateUrl: './search-job.component.html',
  styleUrls: ['./search-job.component.css']
})

export class SearchJobComponent implements OnInit {
  homeform!: FormGroup;

  pagesForm: any;
  categoriesForm: any;
  jobLevelsForm: any;
  citiesForm: any;
  pages = pages;
  categories = categories;
  jobLevels = jobLevels;
  cities = cities;


  jobData: any;
  jobResults: Array<any>;

  constructor(public http: HttpClient) {
    this.jobData = new Object();
    this.jobResults = new Array<any>()
   }

  ngOnInit(): void {
    this.homeform = new FormGroup({
      pagesForm: new FormControl(null, Validators.required),
      categoriesForm: new FormControl(null, Validators.required),
      jobLevelsForm: new FormControl(null, Validators.required),
      citiesForm: new FormControl(null, Validators.required)
    })
  }

  getJob(): Observable<any>{
    return this.http.get<any>('https://www.themuse.com/api/public/jobs?category=' +
       this.homeform.controls['categoriesForm'].value +
      '&level=' + this.homeform.controls['jobLevelsForm'].value +
      '&location=' + this.homeform.controls['citiesForm'].value +
      '&page=' + this.homeform.controls['pagesForm'].value);
  }

  getData(){
    try {
      this.getJob().subscribe((data) => {
        this.jobData = data;
        this.jobResults = data.results;
      })
    }
    catch (error){
      console.log(error)
    }
  }

 onSubmit(){
 this.getData()
 }
}
