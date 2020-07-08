 
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatToolbarModule} from '@angular/material/toolbar';   
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'; 
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table'; 
import {MatSnackBarModule} from '@angular/material/snack-bar';
@NgModule({
  declarations: [],
  imports: [    
  ],
  exports:[
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule ,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSnackBarModule
  ]
})
export class MaterialModuleModule { }
