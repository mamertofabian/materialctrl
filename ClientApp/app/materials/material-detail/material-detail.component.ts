import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, ErrorStateMatcher, MatSnackBar } from '@angular/material';
import { FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { DataService } from '../../core/dataService';
import { Material } from '../../shared/material';

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
    partNumber = new FormControl('', [
        Validators.required
    ]);

    partName = new FormControl('', [
        Validators.required
    ]);

    description = new FormControl();

    newMaterial = new Material();

    matcher = new MyErrorStateMatcher();

    constructor(public dialogRef: MatDialogRef<MaterialDetailComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any, public snackBar: MatSnackBar,
        private dataService: DataService) { }

    save(): void {
        this.newMaterial.partNumber = this.partNumber.value;
        this.newMaterial.partName = this.partName.value;
        this.newMaterial.description = this.description.value;

        this.dataService.addMaterial(this.newMaterial)
            .subscribe(mat => {
                this.openSnackBar(`Added new material: ${mat.partName}`, 'Save');
                this.dialogRef.close(mat);
            });
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
