import { Injectable } from "@angular/core";
import swal, { SweetAlertResult } from "sweetalert2";

@Injectable()
export class SweetAlertService {
  private swalConfirmConfig: Object = {
    type: "warning",
    showCancelButton: true
  };

  constructor() {
    swal.mixin({
      confirmButtonClass: "btn btn-primary",
      cancelButtonClass: "btn"
    });
  }

  confirmAlert(
    title: string,
    text: string,
    confirmBtnText: string = "Continue",
    cancelBtnText: string = "Cancel"
  ): Promise<void | SweetAlertResult> {
    return swal(
      Object.assign(
        {},
        {
          title: title,
          text: text,
          confirmButtonText: confirmBtnText,
          cancelButtonText: cancelBtnText
        },
        this.swalConfirmConfig
      )
    ).catch(swal.noop);
  }
}
