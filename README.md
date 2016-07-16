# Write

A sandbox to play with frontend technologies:

* [Webpack](https://webpack.github.io/)
* [TypeScript](https://www.typescriptlang.org/)
* [React](https://facebook.github.io/react/)
    - [React Router](https://github.com/reactjs/react-router)
* [ProseMirror](http://prosemirror.net/)
* [Bootstrap 4 alpha](http://blog.getbootstrap.com/2015/08/19/bootstrap-4-alpha/)

## Installation

From a fresh git clone, you should get things up and working by typing the following commands:

```
npm install

# ProseMirror is still in development stage
cd node_modules/prosemirror
npm install
npm run dist
cd ../..

node_modules/.bin/typings install
npm start
```
