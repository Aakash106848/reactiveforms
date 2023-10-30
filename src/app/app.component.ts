import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 


})
export class AppComponent {
  title = 'reactiveforms';
  userList:any = [];
  enable:boolean=false;
  getuserarray:any[]=[];
  enable1: boolean = false;
  UpdateUser(user: any){
    const updatedUser = this.userList.find((x: { firstName: string }) => x.firstName === user.firstName);
    updatedUser.lastName = user.lastName;
    updatedUser.joinDate = user.joinDate;
    updatedUser.salary = user.salary; 
  }

 adduser(){
     if(this.userForm.valid)
     {
      console.log(this.userForm.value);
      this.userList.push(this.userForm.value);
      console.log(this.userList);
    }
     else
     {
       console.log("invalid");
     }
    
    }
    deleteUser(user: any){
      this.userList.splice(this.userList.indexOf(user),1);
    }
  hideshow()
  {
    this.enable = !this.enable;
  } 
  getUser(user: any)
  {
    this.enable1 = !this.enable1;
    this.getuserarray.pop();
    const x = this.userList.find((x: { firstName: string }) => x.firstName === user.firstName);
    this.getuserarray.push(x);
  }

  userForm:any= new FormGroup({
    firstName: new FormControl('',[Validators.minLength(5),Validators.maxLength(50),Validators.required]),
    lastName: new FormControl('',[Validators.minLength(5),Validators.maxLength(50),Validators.required]), 
    joinDate: new FormControl('16-10-2020',[Validators.required]),
    salary: new FormControl(33700,[Validators.required,Validators.min(30000),Validators.max(50000)]),
    
  },
  {
    updateOn  : 'change'
  }
  );
}

