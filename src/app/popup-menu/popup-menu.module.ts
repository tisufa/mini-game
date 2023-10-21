import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PopupModule } from "../popup/popup.module";
import { PopupMenuComponent } from "./popup-menu.component";

@NgModule({
    imports: [CommonModule, PopupModule],
    declarations: [PopupMenuComponent],
    exports: [PopupMenuComponent]
})
export class PopupMenuModule {}