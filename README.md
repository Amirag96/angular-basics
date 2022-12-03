Angular Basics:
================

I enrolled in "Angular - The Complete Guide (2023 Edition)" by maximilian and decided to make this repo to provide all my notes and projects during this course. Also to stay motivated and focused, while still having fun

[I was motivated and inspired by Thi's blog](https://dinhanhthi.com/angular-1-basics-components-databinding-directives/) :sparkles:

## What is Angular?
• Angular is a javascript framework which allows you to create reactive single page applications (SPA) <br />
• It gives the user a very reactive experience <br />
• Javascript changes the DOM element in the runtime <br />

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
**Two-way Binding:** <br />
Input changes in HTML input &rarr; name changes in .ts file --> using [(ngModule)] directive  <br />

**disable strict mode** &rarr; to enable declarations of type any
```
// tsconfig.json
strict: false
```

# Course structure: 
1- Getting started 
2- The basics 
3- Components & Databinding 
4- Directives 
5- Services & Dependency Injection 
6- Routing 
7- Observables 
8- Forms 
9- Pipes 
10- Http 
11- Authentication 
12- Optimizations & NgModules 
13- Deployment 
14- Animations & Testing

