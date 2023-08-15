import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PastMayorsService } from 'src/app/services/mayors/past-mayors.service';
import { FormData } from 'src/app/models/past-mayor';

@Component({
  selector: 'app-form-past-mayors',
  templateUrl: './form-past-mayors.component.html',
  styleUrls: ['./form-past-mayors.component.scss']
})
export class FormPastMayorsComponent {
  @Input() municipios?: string[];
  @Input() anos?: string[];
  form: FormGroup;
  @Output() formDataEvent = new EventEmitter<FormData>();

  constructor(private fb: FormBuilder, private _getData: PastMayorsService) {
    this.form = this.fb.group({
      ano: ['2019',[Validators.required]],
      municipio: ['']
    })
  }


  submitForm(){    
      this._getData.getMayor(this.form.value.ano).subscribe((response)=>{
      const formData = response
      this.formDataEvent.emit({ data: formData, formSubmitted: true });
    })
  }
}
