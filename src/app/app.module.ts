import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';
import {createCustomElement} from '@angular/elements';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { SenderElementComponent } from './element/app.sender.element';

@NgModule({
  declarations: [
    AppComponent, SenderElementComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [SenderElementComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector){
    // regoster the component as element using
    // createCustomElement() method from @angular/element
    const senderElement = createCustomElement(SenderElementComponent, {injector: this.injector});
    // defining the custom tag
    customElements.define('sender-element', senderElement);
 }
}
