import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponent } from './MyComponent';
import { ForEachComponent } from './for-each/for-each.component';
import { ImageDisplay } from './ImageDisplay';
import { IfExampleComponent } from './if-example/if-example.component';
import { FormsModule } from '@angular/forms';
import { CustomDirective} from './CustomDirective';


@NgModule({
  declarations: [
    AppComponent, CustomDirective, MyComponent, ImageDisplay,ForEachComponent, IfExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
