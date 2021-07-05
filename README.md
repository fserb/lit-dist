# lit-dist

This package contains pre-built versions of [lit](https://lit.dev).

You can use by including:

```javascript
import lit from "https://unpkg.com/lit-dist/dist/lit.js";
```

## Available versions

| Filename                     | Module type | Extras | Browser compatibility     | Size |
| ---------------------------  |:-----------:|:------:|:------------------------- | ----:|
| `lit.js`                     | esm         | no     | Latest JS features        |  15K |
| `lit.iife.js`                | iife        | no     | Latest JS features        |  15K |
| `lit.compat.js`              | esm         | no     | Modern browsers           |  29K |
| `lit.compat.iife.js`         | iife        | no     | Modern browsers           |  29K |
| `lit.fullcompat.js`          | esm         | no     | 92% browser compatibility |  76K |
| `lit.fullcompat.iife.js`     | iife        | no     | 92% browser compatibility |  76K |
| `lit.all.js`                 | esm         | yes    | Latest JS features        |  31K |
| `lit.all.iife.js`            | iife        | yes    | Latest JS features        |  31K |
| `lit.all.compat.js`          | esm         | yes    | Modern browsers           |  45K |
| `lit.all.compat.iife.js`     | iife        | yes    | Modern browsers           |  45K |
| `lit.all.fullcompat.js`      | esm         | yes    | 92% browser compatibility | 100K |
| `lit.all.fullcompat.iife.js` | iife        | yes    | 92% browser compatibility | 100K |

## Extras

The included extras are:

* [@lit/localize](https://github.com/lit/lit/tree/main/packages/localize)
* [@lit-labs/motion](https://github.com/lit/lit/tree/main/packages/labs/motion)
* [@lit-labs/react](https://github.com/lit/lit/tree/main/packages/labs/react)
* [@lit-labs/ssr-client](https://github.com/lit/lit/tree/main/packages/labs/ssr-client)
* [@lit-labs/task](https://github.com/lit/lit/tree/main/packages/labs/task)

## Updates

This package gets automatic updated by Github Actions once a week and tracks Lit versions.
