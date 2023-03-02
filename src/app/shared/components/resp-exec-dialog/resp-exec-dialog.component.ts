import { RespExecData } from './resp-exec-data';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-resp-exec-dialog',
  templateUrl: './resp-exec-dialog.component.html',
  styleUrls: ['./resp-exec-dialog.component.css'],
})
export class RespExecDialogComponent implements OnInit {
  formulario: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<RespExecData>,
    @Inject(MAT_DIALOG_DATA) public data: RespExecData
  ) {
    this.formulario = formBuilder.group({
      usuario: [{ value: 0 }],
    });
  }

  ngOnInit() {
    this.setValue();
  }

  setValue() {
    this.formulario.setValue({
      usuario: this.data.id_usuario,
    });
  }

  actionFunction() {
    this.data.processar = true;
    this.closeModal();
  }

  closeModal() {
    this.dialogRef.close();
  }

  onChangeUsuario(evento: MatSelectChange) {
    this.data.id_usuario = evento.value;
  }
}
