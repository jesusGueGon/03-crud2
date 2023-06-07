import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { ValidatorsService } from 'src/app/services/validators.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(4)]],
    password2: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    offers: [false],
    country: ['', [Validators.required]],
    city: ['', [Validators.required]]

  },{
    validators: [
      this.validatorServices.isFieldOneEqualFieldTwo('password', 'password2')
    ]
  });

  constructor(
    private fb: FormBuilder,
    private validatorServices: ValidatorsService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    console.log('hola mundo');
    console.log(this.activatedRoute);
    this.activatedRoute.params.subscribe(
      (usuario) => {
        // if(usuario)
        console.log(usuario);
        // this.myForm.reset()
      }
    );
  }

  isValidField( field: string ) {
    return this.validatorServices.isValidField( this.myForm, field);
  }

  // user!: User;

  onSubmit(): void {

    if(this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }


    const {name, password, password2, email, offers, country, city} = this.myForm.value;

    const user: User = {
      id: uuidv4(),
      name: name,
      password: password,
      password2: password2,
      email: email,
      offers: offers,
      country: country,
      city: city
    }

    this.userService.addUser(user);

    this.myForm.reset({name: '', password: '', password2: '', email: '', offers: false, country: '', city: ''});

  }

}
