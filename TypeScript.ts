import{
    NgModule,
    Component
} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

@Component({
    selector:'hello-world',
    template: `
    <div>
    Hello World
    </div>
    `
})
class HelloWorld
{

}
@NgModule({
    declaration: [HelloWorld],
    imports: [BrowserModule],
    bootstrap: [HelloWorld],

})

class HelloWorldAppModule{}

platformBrowserDynamic().bootstrapModule(HelloWorldAppModule);
