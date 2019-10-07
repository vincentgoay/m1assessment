import { NgModule } from '@angular/core';
import { } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatInputModule} from '@angular/material/input';

const MODULE = [
    FlexLayoutModule,
    MatToolbarModule, MatListModule,
    MatDialogModule,
    MatInputModule
];

@NgModule({
    imports: [MODULE],
    exports: MODULE
})
export class MaterialModule { }