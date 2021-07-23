import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BlogpostService } from '../blogpost.service';
import { Blogpost } from '../blogpost';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-blogpost-detail',
  templateUrl: './blogpost-detail.component.html',
  styleUrls: ['./blogpost-detail.component.css'],
})
export class BlogpostDetailComponent implements OnInit {
  blog?: any = [Blogpost];
  id?: number;
  snapshotParam: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blogpostService: BlogpostService,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.snapshotParam = this.route.snapshot.paramMap.get('id');
    this.blogpostService.getBlog(this.snapshotParam).subscribe((data) => {
      this.blog = data;
    });
    this.titleService.setTitle('Blog Detail');
  }
}
