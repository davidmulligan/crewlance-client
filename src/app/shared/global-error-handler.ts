import { ErrorHandler, Inject, forwardRef, NgZone } from "@angular/core";
import { MatSnackBar } from "@angular/material";

export class GlobalErrorHandler extends ErrorHandler {
  constructor(
    @Inject(forwardRef(() => MatSnackBar)) private snackBar: MatSnackBar,
    @Inject(forwardRef(() => NgZone)) private zone: NgZone
  ) {
    super();
  }

  handleError(error) {
    // if (error instanceof Error) {
    this.zone.run(() => {
      this.snackBar.open(
        error.cause
          ? error.cause
          : "An unexpected error occured, please contact the help desk on 0207 123456",
        "Dismiss",
        {
          duration: 3000
        }
      );
      console.log("Handling error: ", error);
    });
    return;
  }
}
