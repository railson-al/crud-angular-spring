import { Component, OnInit } from '@angular/core';
import { Courses } from '../model/courses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses: Courses[] = [
    {_id: '1', name: 'Angular', category: 'front-end'},
    {_id: '2', name: 'Spring', category: 'back-end'}
  ];

  displayedColumns: string[] = ['name', 'category']

  constructor() {

  }

  ngOnInit(): void {

  }

}
