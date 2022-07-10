import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-empdeshbord',
  templateUrl: './empdeshbord.component.html',
  styleUrls: ['./empdeshbord.component.css']
})
export class EmpdeshbordComponent implements OnInit {

  myform: FormGroup;
  myvalue: any;
  arr: any = [];
  filterTerm: any;
  searchword: any;
  filterValue: any;
  searchText: any;
  term: string;
  f: any;
  list: any;
  AbstractControl: any;
  key: string;
  addEmployee = true;

  submitted = false;

  get name(): FormControl {
    return this.myform.get('name') as FormControl;
  }

  get email(): FormControl {
    return this.myform.get('email') as FormControl;
  }

  get mobile(): FormControl {
    return this.myform.get('mobile') as FormControl;
  }

  get gender(): FormControl {
    return this.myform.get('gender') as FormControl;
  }

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.myform = this.fb.group({
      id: [],
      name: ['', [Validators.required, Validators.maxLength(21)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      mobile: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      gender: ['', Validators.required]
    });
    this.display();
  }
  

  display() {
    const x = localStorage.getItem(('formdata'));
    if (x) {
      this.arr = JSON.parse(x);
    }
  }

  onSubmit() {
    if (this.name.invalid === false && this.email.invalid === false && this.mobile.invalid === false && this.gender.invalid === false) {
      this.myvalue = this.myform.value;
      this.arr.push(this.myvalue)
      localStorage.setItem("formdata", JSON.stringify(this.arr));
      this.myform.reset();
      let ref = document.getElementById('close')
      ref?.click();
      console.log(this.arr);
    }
  }

  DeleteItem(i: any) {
    this.arr.splice(i, 1);
    if (this.arr.length > 0) {
      localStorage.setItem('formdata', JSON.stringify(this.arr));
    } else {
      localStorage.clear();
    }
  }

  EditItem(obj: any, i: any) {
    this.addEmployee = false;
    const index = i + 1;
    this.myform.setValue({
      id: index,
      name: obj.name,
      email: obj.email,
      mobile: obj.mobile,
      gender: obj.gender
    })

    this.arr.find((item: any) => {
      if (item.name === obj.name) {
        item.id = index;
      }
    })
  }

  updateItem() {
    this.myvalue = this.myform.value;
    this.arr.find((item: any) => {
      if (item.id === this.myvalue.id) {
        item.name = this.myvalue.name;
        item.email = this.myvalue.email;
        item.mobile = this.myvalue.mobile;
        item.gender = this.myvalue.gender;
      }
    })
    localStorage.setItem("formdata", JSON.stringify(this.arr));
    this.myform.reset();
    let ref = document.getElementById('close')
    ref?.click();
  }

  onLogout() {
    this.router.navigate(['']);
  }
}