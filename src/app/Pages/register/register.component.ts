import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthService } from './../../services/auth.service';
import { RegisterUserDTO } from 'src/app/DTOs/Entity/RegisterUserDTO';
import { UserDTO } from 'src/app/DTOs/Entity/UserDTO';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent{
  //public registerForm : FormGroup | undefined;

  public registerForm = new FormGroup({
    email: new FormControl(
    ),
    firstName: new FormControl(),
    lastName: new FormControl(),
    password: new FormControl(),
    confirmPassword: new FormControl(),
    address: new FormControl()
      });

constructor(private authService: AuthService){
}

submitRegisterForm() {
  console.log(this.registerForm.controls.email.value);
 
  const registerData = new RegisterUserDTO(
    this.registerForm.controls.email.value,
    this.registerForm.controls.firstName.value,
    this.registerForm.controls.lastName.value,
    this.registerForm.controls.password.value,
    this.registerForm.controls.confirmPassword.value,
    this.registerForm.controls.address.value,
  );

  this.authService.registerUser(registerData).subscribe(res => {
    console.log(res);
    if (res.status === 'Success') {
      this.registerForm.reset();
    }
  });
}


}
