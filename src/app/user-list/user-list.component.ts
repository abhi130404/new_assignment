import { CommonModule } from '@angular/common';
import { Component,inject,OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';




@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{
  httpClient = inject(HttpClient);
  public data: Array<any> = [];
  ngOnInit() {
    this.httpClient.get('http://localhost:8000/users')
      .subscribe({
        next: (data: any) => {
          console.log(data);
          this.data = data;
        }, error: (err) => console.log(err)
      });
  }
}
