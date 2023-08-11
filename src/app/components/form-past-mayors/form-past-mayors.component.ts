import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PastMayorsService } from 'src/app/services/mayors/past-mayors.service';
import { Observable } from 'rxjs';
import { PastMayors } from 'src/app/models/past-mayor';

@Component({
  selector: 'app-form-past-mayors',
  templateUrl: './form-past-mayors.component.html',
  styleUrls: ['./form-past-mayors.component.scss']
})
export class FormPastMayorsComponent {
  @Input() municipios?: string[];
  @Input() anos?: string[];
  form: FormGroup;
  data?: PastMayors[];

  constructor(private fb: FormBuilder, private _getData: PastMayorsService) {
    this.form = this.fb.group({
      ano: ['2019',[Validators.required]],
      municipio: ['']
    })
  }


  submitForm(){    
      this._getData.getMayor(this.form.value.ano).subscribe((response)=>{
      this.data = response
      console.log(this.data)
    })
  }
}
