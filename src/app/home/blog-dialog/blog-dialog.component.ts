import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { BlogService } from 'src/app/services/blog.service';
import { CommentService } from 'src/app/services/comment.service';


@Component({
  selector: 'app-blog-dialog',
  templateUrl: './blog-dialog.component.html',
  styleUrls: ['./blog-dialog.component.css']
})
export class BlogDialogComponent {

  isUpdate : boolean=false;
  imageUrl: string ="";
  title : string ="";
  body:string ="";
  commentData: any;
  blogElement:any;

  form= new FormGroup({
    title:new FormControl(null,{validators:Validators.required}),
    body:new FormControl(null,{validators:Validators.required}),
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    private dialogRef: MatDialogRef<BlogDialogComponent>,
    private commentService: CommentService,
    private blogService: BlogService,
  ) {
    if (data.isUpdate) {
      this.isUpdate=true;
      this.form.patchValue({
        title:data.blog.title,
        body:data.blog.body,
      });
      this.blogElement=data.blog;
    }
    else{
      this.imageUrl=data.blog.imageId.toString();
      this.title=data.blog.title;
      this.body=data.blog.body;
    }
   }

   close(){
    this.dialogRef.close();
   }

   onSubmit(){
      const request={
        title:this.form.get("title")?.value,
        body:this.form.get("body")?.value,
        imageId:this.data.blog.imageId,
        userId:this.data.blog.userId,
      };

      this.blogService.updatePost(this.data.blog.id,request).subscribe((res)=>{
        this.blogElement.title=res.title;
        this.blogElement.body=res.body;
        this.close();
      });
   }
   ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
      this.commentService.getComment().subscribe((res)=>{
        this.commentData=res.filter((x: { postId: any; })=>x.postId==this.data.blog.id)
      });


   }
  }

