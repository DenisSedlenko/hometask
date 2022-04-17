import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '@app/shared';
import { NzModalRef } from 'ng-zorro-antd/modal';

type Management = 'create' | 'edit';

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeManagementComponent implements OnInit {
  @Input() employee: Employee | null = null;
  @Input() type: Management = 'create';

  form: FormGroup | null = null;

  get saveButtonLabel(): string {
    return this.type === 'create' ? 'Создать' : 'Сохранить';
  }

  constructor(
    private formBuilder: FormBuilder,
    private modalRef: NzModalRef
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      first: [this.employee?.name.first, [Validators.required]],
      last: [this.employee?.name.last, [Validators.required]],
      age: [this.employee?.age, [Validators.required]]
    });
  }

  cancel(): void {
    this.modalRef.destroy();
  }

  save(): void {
    this.modalRef.destroy(this.form?.value)
  }
}
