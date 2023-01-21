Angular Basics:
================

I enrolled in "Angular - The Complete Guide (2023 Edition)" by maximilian and decided to make this repo to provide all my notes and projects during this course. Also to stay motivated and focused, while still having fun

[I was motivated and inspired by Thi's blog](https://dinhanhthi.com/angular-1-basics-components-databinding-directives/) :sparkles:

## What is Angular?
• Angular is a javascript framework which allows you to create reactive single page applications (SPA) <br />
• It gives the user a very reactive experience <br />
• Javascript changes the DOM element in the runtime <br /> 
DOM Element &rarr; [the Element object represents an HTML element, like P, DIV, A, TABLE, or any other HTML element]

• **Angular CLI** &rarr; a tool to create projects, generate application and library code, <br />
and perform a variety of ongoing development tasks such as testing, bundling, and deployment.

• **Angular JS** &rarr; to optimize project  <br />
• **Node package manager (npm)** &rarr; to manage dependencies

• **What's typescript?**
Superset for JS &rarr; define type and variable is checked while coding
TS doesn't run in the browser &rarr; compiled to JS (using CLI)

### CLI Commands:

```
// new project
ng new angular-basics

// serve
ng serve
ng serve --port 5000

// create component
ng generate component <name>
ng g c <name> 
ng g c <name> --skipTests true # without test files
ng g c <name> --selector <app-name> # with selector

// create directive
ng generate directive <name>
ng g d <name>

```
• **Two-way Binding:** <br />
Input changes in HTML input &rarr; name changes in .ts file &rarr; using [(ngModule)] directive  <br />

• **disable strict mode** &rarr; to enable declarations of type any
```
// tsconfig.json
strict: false
```

# Course structure: 
1. Getting started 
2. The basics 
3. Components & Databinding 
4. Directives 
5. Services & Dependency Injection 
6. Routing 
7. Observables 
8. Forms 
9. Pipes 
10. Http 
11. Authentication 
12. Optimizations & NgModules 
13. Deployment 
14. Animations & Testing

![Course Structure](https://github.com/Amirag96/angular-basics/blob/main/CourseMap.png)


# 1.Getting started:
### Bootstrap Setup:

```
npm i --save bootstrap
nmp install jquery --save

// angular.json
// -> changes "styles"
"styles": [
	"node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
],
  "scripts": [
          "node_modules/jquery/dist/jquery.min.js",
          "node_modules/tether/dist/js/tether.js",
          "node_modules/bootstrap/dist/js/bootstrap.min.js"

// rerun
ng serve --port 4300
// Check?
// Open page > Inspect > Sources > styles.css -> there is bootstrap there!

```
## Project Structure:
### **Single page app**
• **index.html** --> is served by the cli which contains all components

• **main.ts** --> app.module.ts [include all avaiable components]


## **Problems faced in course assignments:**

• I got the below errors while trying to serve the project:
```
npm ERR! npm ERR! While resolving: my-first-app@0.0.0 npm ERR! Found: jasmine-core@3.6.0 npm ERR! node_modules/jasmine-core npm ERR! dev jasmine-core@"~3.6.0" from the root project npm ERR! npm ERR! Could not resolve dependency: npm ERR! peer jasmine-core@">=3.8" from karma-jasmine-html-reporter@1.7.0 npm ERR! node_modules/karma-jasmine-html-reporter npm ERR! dev karma-jasmine-html-reporter@"^1.5.0" from the root project
```

• I solved it by updating the versions in package.json file as below:
```
"jasmine-core": "~3.8.0",
"karma-jasmine-html-reporter": "^1.7.0"
```
• & used the below commands to update and install the new versions
```
npm install
npm update
```

# 2. The Basics:

• **How Angular is loaded and started?**
All things are in /index.html ← Single Page Application!!! <br />
After ng serve, there'll be a script at the end of the page that will be injected by CLI automatically <br />
First code is executed → main.ts → bootstrapModule(AppModule) ← from app.module.ts ← there is bootstrap: [] (this one is only in app root) <br />

• **Components:**
Key feature in angular! <br />

Split up your complex app into reusable components.<br />

After creating a new component ⇒ Don't forget to add it in module!! <br />
(if you're using ng generate component <module-name> It'll be automatically added!) <br />

```
ng generate component <name>
ng g c <name> 			    # shorthand
ng g c <name> --skipTests true      # without test files
ng g c <name> --selector <app-name> # with selector
```
• **Good practice:** having folder name = component name

(Convention) Name of component ServerComponent ← normal typescript class with decorator @Component()

Make sure unique selector <app-server>
Can use inline in selector, template, styles of @Component() → using backtick ``` for multiple lines.

template: `
	<app-server></app-server>
	<p>abc</p>
`
```
// as a selector
selector: "app-servers"
// then
<app-servers></app-servers>

// as a class
selector: ".app-servers"
// then
<div class="app-servers"></div>

// as an attribute
selector: "[app-server]"
// then
<div app-servers></div>
```
• **constructor in class ** → called whenever component created ← a function of TypeScript!

	
# **Databinding:**
Databinding = communication
![Databinding](https://github.com/Amirag96/angular-basics/blob/main/databinding.png)

• **1- String Interpolation:**  ``` {{data}} ```
```
<p>Server with ID {{serverId}}</p>

```
	
• **2- Property Binding:** ``` [property] = "data" ```
	
```
// disabled & innerText are DOM properties
<button class="btn" [disabled]="allowNewServer">Add Server</button>
<p [innerText]="allowNewServer"></p>

```

• **3- Event Binding:**  ``` (Event) = "expression" ```
```
// we use click event instead of the usual JS onclick event 

<button (click)="onCreateServer()">Add Server</button>
<input type="text" class="form-control" // bootstrap's class
       (input)="onUpdateServerName($event)"> 
//^ event created by (input)

// .component.ts
onUpdateServerName(event: Event){ // "Event" can be "any" but in this case we know it is "Event"
	this.serverName = (<HTMLInputElement>event.target).value // can use Inspect to check these child element
									// ^Just tell typescript that our event will be HTMLInputElement
}
```
					  
• **4-Two-way binding:** ``` [(ngModel)] = "data" ```
→ enable ngModel directive and import FormsModule in AppModule <br />
import { FormsModule } from '@angular/forms' <br />


# **Directives:**
They're instructions in the DOM ( 3 Types of directives)
       
• **1- Structural directives:**
    
       * is for the structural directive
    ```
       <p *ngIf="serverCreated; else noServer">
		Server created with name {{serverName}}
	</p>
	
	<ng-template #noServer>
		<p>No server Created<p>
	</ng-template>
	
     ```
    	
• **2- Attribute directives:**
They don't add or remove elements but only change the element they were placed on
   ``` [ngStyle]={'backgroundColor: getColor()'}  ```
