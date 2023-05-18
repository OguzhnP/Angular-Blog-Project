import { Component } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { MatDialog } from '@angular/material/dialog';
import { BlogDialogComponent } from './blog-dialog/blog-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  constructor(private blogService:BlogService , private dialog: MatDialog) {

  }

  blogData : Array<any> =[];
  pageSize: number =8;
  page:number =13;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.blogService.getPosts().subscribe((res)=>{
    this.blogData=res;
    });
  }

  openDialog(element:any,viewOrUpdate:boolean){
    const dialogRef =this.dialog.open(BlogDialogComponent,{
      data:{
        blog:element,
        isUpdate:viewOrUpdate,
      }
    });

  }
}
