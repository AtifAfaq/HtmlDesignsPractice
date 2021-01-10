import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site5',
  templateUrl: './site5.component.html',
  styleUrls: ['./site5.component.scss']
})
export class Site5Component implements OnInit {
  open:boolean=true;
  searchTxt:string;
  item=4;
  p: number = 1;
  timeline: any = [{ message: "All Hands Meeting" },
  { message: "Yet another one, at 15:00PM" },
  { message: "Build the production release" },
  { message: "Something not important" },
  { message: "All Hands Meeting" },
  { message: "Yet another one, at 15:00PM" },
  { message: "Build the production release" },
  { message: "Something not important" }];


  tableData: any = [{ num: "1", firstName: "John", lastName: "vint", Age: "50" },
  { num: "2", firstName: "Darren", lastName: "Saamy", Age: "50" },
  { num: "3", firstName: "Ahmed", lastName: "Khan", Age: "50" },
  { num: "4", firstName: "Atif", lastName: "Afaq", Age: "50" },
  { num: "5", firstName: "Atif", lastName: "Afaq", Age: "50" },
  { num: "6", firstName: "Atif", lastName: "Afaq", Age: "50" },
  { num: "7", firstName: "Atif", lastName: "Afaq", Age: "50" },
  { num: "8", firstName: "Atif", lastName: "Afaq", Age: "50" },
  { num: "9", firstName: "Atif", lastName: "Afaq", Age: "50" }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
