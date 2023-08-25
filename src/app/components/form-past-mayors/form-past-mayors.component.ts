import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PastMayorsService } from 'src/app/services/mayors/past-mayors.service';
import { FormData } from 'src/app/models/past-mayor';

@Component({
  selector: 'app-form-past-mayors',
  templateUrl: './form-past-mayors.component.html',
  styleUrls: ['./form-past-mayors.component.scss'],
})
export class FormPastMayorsComponent {
  @Input() municipios?: string[];
  @Input() anos?: string[];
  form: FormGroup;
  @Output() formDataEvent = new EventEmitter<FormData>();

  constructor(private fb: FormBuilder, private _getData: PastMayorsService) {
    this.form = this.fb.group({
      ano: ['2019', [Validators.required]],
      municipio: [''],
      nombre: [''],
    });
  }

  submitForm() {
    this._getData.getMayor(this.form.value.ano).subscribe((response) => {
      const formData = response;

      const filteredData = formData.filter((mayor) => {
        const largeName =
          `${mayor.nombres} ${mayor.primer_apellido} ${mayor.segundo_apellido}`.toLowerCase();
        return (
          mayor.municipio
            .toLowerCase()
            .includes(this.form.value.municipio.toLowerCase()) &&
          largeName.includes(this.form.value.nombre.toLowerCase())
        );
      });

      this.formDataEvent.emit({ data: filteredData, formSubmitted: true });
    });
  }
}
