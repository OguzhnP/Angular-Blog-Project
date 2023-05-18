import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { BaseService } from 'src/app/services/base.service';
import { HttpClientModule } from '@angular/common/http';
import { BlogDialogComponent } from './home/blog-dialog/blog-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    MatCardModule,MatButtonModule,MatDialogModule,MatDividerModule,MatInputModule,MatFormFieldModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [BaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
