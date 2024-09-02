# Micro-Frontend Module Federation

define shared components and utilities to be shared among applications

For simplicity, I have used a monorepo setup but it doesn't have to be and might be better to set it up as separate repo for each apps.

We will set up a container application which is a container for hosting all the entry points for micro-frontend.

Micro-frontend is an architectural pattern that involves breaking down a monolithic frontend application into smaller, self-contained, and independent micro-applications. Each micro-frontend represents a distinct feature or module of the overall application and can be developed, deployed, and maintained independently.

To define each micro-frontend, we will divide them by business domains. For instance, an e-commerce website can have an order domain, payment domain, or user domain. 

Two categories of micro-frontend
- Build-time integration
- Runtime integration

Build-time
Deploy it as an NPM package
Install the package in the container application
Requires better coordination and collaboration among teams
Any changes required to rebuild and redeploy the whole application
built-time integration by using NPM packages

Runtime
The container application integrates the micro-frontend in runtime or server-side
Tooling and setup can be complicated

Module Federation is a technique created by Webpack that allows the sharing of modules (code) between the container and remote apps. It enables the container app to dynamically load and run remote app code as if it were part of the container app itself. Remote apps can expose specific modules that the container app can consume, enabling code sharing and seamless integration.

Run-time code sharing — The modules are federated in run-time. The micro-frontends can be managed and deployed independently. The changes of the micro-frontend can be reflected immediately if it deploys to the production.


loading micro frontends into a shell application.

These packages are only loaded once at runtime. This is vital because having ten micro frontends doesn't mean you want to load Angular or other packages ten times!

Of course, when sharing packages at runtime, we might end up with version conflicts. Fortunately, Module Federation also got us covered here: It provides several strategies for dealing with version mismatches.

Ideally, your micro frontends should be framework agnostic, you will have to standardize a way to pass data between micro frontends.

Microfrontends allow different teams to work independently on separate parts of a larger frontend. There are various patterns for implementing microfrontends. For this example, we will use a composable microfrontend that composes its components using a shell app.

cons
typescript
zustand not working. 
Cant share custom hook as hooks can't be dynamically loaded. (vite - nextjs)
vite cant have base path - https://github.com/originjs/vite-plugin-federation/issues/580
unable to share react with vite and wnextjs

