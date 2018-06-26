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
    partNumberTitle: string = "";
    operation: string;
    currentMaterial = new Material();
    matcher = new MyErrorStateMatcher();

    partNumber = new FormControl('', [
        Validators.required
    ]);
    partName = new FormControl('', [
        Validators.required
    ]);
    description = new FormControl();

    constructor(public dialogRef: MatDialogRef<MaterialDetailComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any, public snackBar: MatSnackBar,
        private dataService: DataService) { }

    save(): void {
        this.currentMaterial.partNumber = this.partNumber.value;
        this.currentMaterial.partName = this.partName.value;
        this.currentMaterial.description = this.description.value;

        if (this.data.isNew && this.data.material.id == 0) {
            this.addNewMaterial();
        } else {
            this.updateMaterial();
        }
    }

    cancel(): void {
        //this.openSnackBar('Clicked cancel button', 'Cancel');
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
        this.operation = this.data.isNew ? "Add New" : "Edit";
        if (this.data.isNew && this.data.material.id == 0) {
            this.operation = "Add New";
        } else {
            this.operation = "Edit";

            this.partNumberTitle = ": " + this.data.material.partNumber;
            this.partNumber.setValue(this.data.material.partNumber);
            this.partName.setValue(this.data.material.partName);
            this.description.setValue(this.data.material.description);
        }
    }

    addNewMaterial(): void {
        this.dataService.addMaterial(this.currentMaterial)
            .subscribe(mat => {
                this.openSnackBar(`Added new material: ${mat.partName}`, 'Save');
                this.dialogRef.close(mat);
            });
    }

    updateMaterial(): void {
        this.currentMaterial.id = this.data.material.id;

        this.dataService.updateMaterial(this.currentMaterial)
            .subscribe(mat => {
                this.openSnackBar(`Material: ${mat.partName} updated`, 'Save');
                this.dialogRef.close(mat);
            });
    }
}
