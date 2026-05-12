import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdditionChr } from '../service/addition-chr';
import { Addition } from '../models/user.model';

@Component({
  selector: 'app-addition-charges',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './addition-charges.html',
  styleUrl: './addition-charges.css',
})
export class AdditionCharges implements OnInit {
  addCharges!: FormGroup;
  todayDate: string = '';
  AdditionCharge: Addition[] = [];
  isModalOpen = false;
  editId: number | null = null;

  constructor(private fb: FormBuilder, private additionService: AdditionChr, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {

    console.log("ngonit call");
    this.todayDate = new Date()
      .toISOString()
      .split('T')[0];
    this.addCharges = this.fb.group({
      addition_name: ['', Validators.required],
      amount_type: ['', Validators.required],
      amount: ['', Validators.required],
      effective_date_from: ['', Validators.required],
      effective_end_date: ['', Validators.required],
      transaction_type: ['', Validators.required]

    });

    this.getAllData();
  }


  openDialog() {
    this.isModalOpen = true;
    this.addCharges.reset();
    this.editId = null;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  onSubmit() {

    if (this.addCharges.invalid) {

      this.addCharges.markAllAsTouched();

      return;
    }

    console.log(this.addCharges.value);


    if (this.editId) {

      this.additionService
        .updateAdditionCharge(this.editId, this.addCharges.value)
        .subscribe({

          next: (res) => {

            console.log("Updated", res);

            this.addCharges.reset();

            this.editId = null;

            this.isModalOpen = false;
            this.getAllData();

          },

          error: (err) => {

            console.log(err);

          }

        });

    }

    else {

      this.additionService
        .addAdditionCharge(this.addCharges.value)
        .subscribe({

          next: (res) => {

            console.log("Added", res);

            this.addCharges.reset();

            this.isModalOpen = false;

            this.getAllData();

          },

          error: (err) => {

            console.log(err);

          }

        });

    }

  }

  onDelete(id: number) {

    console.log(id);

    if (confirm("Are you sure?")) {

      this.additionService.deleteAdditionCharge(id).subscribe(() => {
        // this.getAllData();
      });

    }

  }

  onEdit(data: any) {
    this.isModalOpen = true;
    console.log(data);
    this.addCharges.reset();
    this.editId = data.id;

    this.addCharges.patchValue({

      addition_name: data.addition_name,
      amount_type: data.amount_type,
      amount: data.amount,
      effective_date_from:
        data.effective_date_from?.split('T')[0],

      effective_end_date:
        data.effective_end_date?.split('T')[0],

      transaction_type: data.transaction_type

    });

  }


  getAllData() {

    this.additionService
      .getAdditionCharges()
      .subscribe({

        next: (res) => {

          console.log(res);

          this.AdditionCharge = res.data;
          this.cdr.detectChanges();

        },

        error: (err) => {

          console.log(err);

        }

      });

  }

}
