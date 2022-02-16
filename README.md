## reproduction

After git clone, run the following command.

```
$ yarn install
$ yarn webpack
```

I get the following error message.

```bash
ERROR in ./node_modules/vue-chart-3/dist/index.mjs 33:0-44
Module not found: Error: Can't resolve 'lodash-es/startCase' in '/Users/YourName/webpack-vue-2-vue-chart-3/node_modules/vue-chart-3/dist'
Did you mean 'startCase.js'?
BREAKING CHANGE: The request 'lodash-es/startCase' failed to resolve only because it was resolved as fully specified
(probably because the origin is strict EcmaScript Module, e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"').
The extension in the request is mandatory for it to be fully specified.
Add the extension to the request.
 @ ./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/App.vue?vue&type=script&lang=js& 10:0-50 16:4-12 17:4-13
 @ ./src/components/App.vue?vue&type=script&lang=js& 1:0-118 1:134-137 1:139-254 1:139-254
 @ ./src/components/App.vue 2:0-55 3:0-50 3:0-50 9:2-8
 @ ./src/main.js 3:0-39 10:4-7 13:25-28
```

Changing the webpack configuration solves the problem.

```diff
+      {
+        test: /\.mjs$/,
+        resolve: {
+          fullySpecified: false,
+        },
+      },
```

Alternatively, this can be solved by specifying the extension(js) in `node_modules/vue-chart-3/dist/index.mjs`.

```javascript
import startCase from "lodash-es/startCase.js";
import camelCase from "lodash-es/camelCase.js";
import cloneDeep from "lodash-es/cloneDeep.js";
import isEqual from "lodash-es/isEqual.js";
```