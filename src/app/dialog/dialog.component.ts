import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  optionList = ['yes', 'no'];

  productForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private dialogRef: MatDialogRef<DialogComponent>
  ) {}
  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      productName: [
        '',
        [Validators.required, Validators.min(3), Validators.max(50)],
      ],
      productShortCode: [
        '',
        [Validators.required, Validators.min(3), Validators.max(50)],
      ],
      category: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', [Validators.min(3), Validators.max(250)]],
      imageUrl: [''],
      isBestAchived: [''],
      createdDate: ['', Validators.required],
      origin: ['', Validators.required],
    });
  }

  editProduct() {
    if (this.productForm.valid) {
      this.api.postProduct(this.productForm.value).subscribe({
        next: (res) => {
          alert('Product edited successfully');
          this.productForm.reset();
          this.dialogRef.close('save');
        },
        error: (err) => {
          alert('Error while editing the product');
        },
      });
    }
  }
}
