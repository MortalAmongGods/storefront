import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {

  constructor(
    private formBuilder: FormBuilder,
    ) {  }

  loginForm = this.formBuilder.group({
      userName: '',
      passWord: ''
    });

    onSumbit(): void  {
      //work on validation to check for empty string
      //next check for a specific username and login
      if(this.loginForm.value == null){
        console.warn('Please enter the correct log in information')
      } else {
        console.log('You have logged in!', this.loginForm.value);
        this.loginForm.reset();
      }
    }

}
