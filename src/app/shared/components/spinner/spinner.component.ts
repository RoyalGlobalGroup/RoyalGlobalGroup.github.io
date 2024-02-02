import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: "appNeo-spinner",
  templateUrl: "./spinner.component.html",
  styleUrls: ["./spinner.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerComponent {
  @Input() interceptor = false;
  @Input() manual = false;
  @Input() inputMessage = false;
}
