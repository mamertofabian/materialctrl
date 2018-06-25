import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, ErrorStateMatcher, MatSnackBar } from '@angular/material';
import { FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';

export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}

@Component({
  selector: 'app-material-detail',
  templateUrl: './material-detail.component.html',
  styleUrls: ['./material-detail.component.scss']
})
export class MaterialDetailComponent implements OnInit {
    partNumberFormControl = new FormControl('', [
        Validators.required
    ]);

    partNameFormControl = new FormControl('', [
        Validators.required
    ]);

    matcher = new MyErrorStateMatcher();

    constructor(public dialogRef: MatDialogRef<MaterialDetailComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any, public snackBar: MatSnackBar) { }

    save(): void {
        this.openSnackBar('Clicked New Material save button', 'Save');
    }

    cancel(): void {
        this.openSnackBar('Clicked New Material cancel button', 'Cancel');
        this.dialogRef.close();
    }

    getErrorMessage(control: FormControl, label: string) {
        return control.hasError('required') ? `${label} is required` : '';
    }

    openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 2000
        });
    }

    ngOnInit() {
    }

}
