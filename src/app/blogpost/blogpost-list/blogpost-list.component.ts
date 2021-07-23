import { Component, OnInit } from '@angular/core';
import { BlogpostService } from '../blogpost.service';
import { Blogpost } from '../blogpost';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blogpost-list',
  templateUrl: './blogpost-list.component.html',
  styleUrls: ['./blogpost-list.component.css'],
})
export class BlogpostListComponent implements OnInit {
  title = 'Blogs';
  blogs?: any = Blogpost;
  category: Array<any> = [];
  error = {};

  constructor(
    private titleService: Title,
    private blogpostService: BlogpostService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.titleService.setTitle(this.title);

    this.blogpostService.getBlogs().subscribe(
      (data: Blogpost) => (this.blogs = data),
      (error: any) => (this.error = error)
    );
  }
  detailBlog(blogId: any) {
    this.blogpostService.getBlog(blogId).subscribe((blog: any) => {
      this.router.navigate(['/blog', blogId]);
    });
  }
}

