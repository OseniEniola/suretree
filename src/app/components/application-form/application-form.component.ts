import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Options } from '@angular-slider/ngx-slider';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss'],
})
export class ApplicationFormComponent implements OnInit {
  constructor(
    private modalService: NgbModal,
    private formBuiilder: FormBuilder
  ) {
    this.applicationForm = this.formBuiilder.group({
      amount: ['', Validators.required],
      term: ['', Validators.required],
      repaymentDate: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      dob: ['', Validators.required],
      monthlyIncome: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      agree: [false, Validators.requiredTrue]
    });
  }

  public applicationForm: FormGroup;
  @ViewChild('popUp', { static: false }) private popUpModal:
    | TemplateRef<any>
    | undefined;
  show: boolean = false;
  ngbModalOptions: NgbModalOptions = {
    backdrop: 'static',
    keyboard: false,
    ariaLabelledBy: 'modal-basic-title',
  };
  active: number = 1;
  valid: number = 0;
  //Loan Amount
  loanAmount: number = 4000;
  loanAmountoptions: Options = {
    floor: 500,
    ceil: 20000,
  };
  //Loan Term
  loanTerm: number = 10;
  loanTermoptions: Options = {
    floor: 6,
    ceil: 60,
  };
  dates: number[] = [3, 12, 27, 68];
  mStatus: string[] = ["Single","Married","Divorced","Common law marriage","Widow/Widower"];

  form1Valid:boolean=false
  form2Valid:boolean=false
  form3Valid:boolean=false
  form4Valid:boolean=false
  currentDate = new Date();

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.modalService.open(this.popUpModal, this.ngbModalOptions);
  }
  toggleshow() {
    this.show = !this.show;
    this.modalService.dismissAll();
  }
  toggleActive(no: number) {
    if(no ==1 && this.form1Valid){
      this.active = no;
    }else if(no ==2 && (this.form2Valid || this.form1Valid) ){
      this.active = no;
    }
    else if(no ==3 && (this.form3Valid || this.form2Valid)){
      this.active = no;
    }
    else if(no ==4 && (this.form4Valid || this.form4Valid)){
      this.active = no;
    }
  }

  get f() {
    return this.applicationForm.controls;
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  send(no: number) {
    if (no == 1) {
      if (
        (this.f.amount.invalid) ||
        (this.f.term.invalid) ||
        (this.f.repaymentDate.invalid)||
        (this.f.monthlyIncome.invalid)
      ) {
        alert('Please fill all required fields');
      }else{
        if(!this.form1Valid){
          this.active = this.active+1
          this.valid= this.valid+1
          this.form1Valid=true
        }else{
          this.active = this.active+1
        }
      }
    }
    if (no == 2) {
      if (
        (this.f.firstName.invalid) ||
        (this.f.lastName.invalid) ||
        (this.f.phone.invalid) ||
        (this.f.dob.invalid) ||
        (this.f.maritalStatus.invalid)

      ) {
        alert('Please fill all required fields');
      }else{
        if(!this.form2Valid){
          this.active = this.active+1
          this.valid= this.valid+1
          this.form2Valid=true
        }
        else{
          this.active = this.active+1
        }
      }
    }
    if (no == 3) {
      if (
        (this.f.agree.invalid)
      ) {
        alert('Please fill the agreement checkbox');
      }else{
        if(!this.form3Valid){
          this.active = this.active+1
          this.valid= this.valid+1
          this.form3Valid=true
        }
        else{
          this.active = this.active+1
        }
      }
    }
    if (no == 4) {
      if (
        (this.f.agree.invalid)
      ) {
        alert('Please fill the agreement checkbox');
      }else{
        if(!this.form4Valid){
          this.active = this.active+1
          this.valid= this.valid+1
          this.form4Valid=true
        }
        else{
          this.active = this.active+1
        }
      }
    }
  /*   if (this.applicationForm.touched && this.applicationForm.valid) {
      console.log(this.applicationForm.value);
    } else if (this.applicationForm.touched && this.applicationForm.invalid) {
      this.validateAllFormFields(this.applicationForm);
      alert('Please fill all required fields');
      console.log('Please fill all required fields');
    } */
  }
  selectClick(option: any, ctrlName: any) {
    this.f[ctrlName].setValue(option);
  }
}
