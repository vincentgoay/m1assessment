import { NgModule } from '@angular/core';
import { } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';

const MODULE = [
    FlexLayoutModule,
    MatToolbarModule, MatListModule,
    MatDialogModule
];

@NgModule({
    imports: [MODULE],
    exports: MODULE
})
export class MaterialModule { }