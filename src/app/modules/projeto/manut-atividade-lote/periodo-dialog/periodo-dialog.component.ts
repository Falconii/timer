import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PeriodoData } from './periodo-data';

@Component({
  selector: 'app-periodo-dialog',
  templateUrl: './periodo-dialog.component.html',
  styleUrls: ['./periodo-dialog.component.css'],
})
export class PeriodoDialogComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<PeriodoData>,
    @Inject(MAT_DIALOG_DATA) public data: PeriodoData
  ) {
    this.formulario = formBuilder.group({
      dataInicial: [],
      dataFinal: [],
    });
  }

  ngOnInit() {
    this.setValue();
  }

  setValue() {
    this.formulario.setValue({
      dataInicial: this.data.dataInicial,
      dataFinal: this.data.dataFinal,
    });
  }

  actionFunction() {
    this.data.processar = true;
    this.closeModal();
  }

  closeModal() {
    this.dialogRef.close();
  }
}
