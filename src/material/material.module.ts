import { NgModule } from '@angular/core';
import {CdkTableModule} from '@angular/cdk/table';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatRadioModule,
    MatTabsModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    DateAdapter,
    MatListOption,
    MatListItem,
    MatDividerModule,
    MatListModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatAutocompleteModule
} from '@angular/material';

@NgModule({
    imports: [
        CdkTableModule,
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatCheckboxModule,
        MatRadioModule,
        MatTabsModule,
        MatDialogModule,
        MatInputModule,
        MatSelectModule,
        MatTableModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatListModule,
        MatDividerModule,
        MatPaginatorModule,
        MatExpansionModule,
        MatAutocompleteModule
    ],
    exports: [
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatCheckboxModule,
        MatRadioModule,
        MatTabsModule,
        MatDialogModule,
        MatInputModule,
        MatSelectModule,
        MatTableModule,
        CdkTableModule,
        MatProgressSpinnerModule,
        MatDatepickerModule,
        MatListModule,
        MatDividerModule,
        MatPaginatorModule,
        MatExpansionModule,
        MatAutocompleteModule
    ]
})
export class MaterialModule { 
  constructor (private dateAdapter:DateAdapter<Date>){
    dateAdapter.setLocale('pt-br'); // DD/MM/YYYY
}
}
