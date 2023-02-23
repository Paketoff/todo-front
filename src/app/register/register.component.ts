import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr/public_api';
import { catchError } from 'rxjs';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private toast: ToastrService

  ) { }

  ngOnInit(): void {
  }

  registerUser(registerForm: NgForm) {
    if(registerForm.invalid) {
      return;
    }

    const {username, password} = registerForm.value;

    this.apiService.register(username, password);
    //TODO: error handling
    // .pipe(
    //   catchError((err: HttpErrorResponse) => {
    //     this.toast.error(err.message, ''), {
    //       timeOut: 1000
    //     };
    //   })
    // );
  }

}
