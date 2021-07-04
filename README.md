# lit-dist

This package contains pre-built versions of [lit](https://lit.dev).

You can use by including:

```javascript
import lit from "https://unpkg.com/lit-dist/dist/lit.js";
```

## Available versions

| Filename                    | Module type | Extras | Browser compatibility     |
| --------------------------- |:-----------:|:------:|:------------------------- |
| `lit.js`                    | esm         | no     | Latest JS features        |
| `lit.cjs.js`                | cjs         | no     | Latest JS features        |
| `lit.compat.js`             | esm         | no     | Modern browsers           |
| `lit.compat.cjs.js`         | cjs         | no     | Modern browsers           |
| `lit.fullcompat.js`         | esm         | no     | 92% browser compatibility |
| `lit.fullcompat.cjs.js`     | cjs         | no     | 92% browser compatibility |
| `lit.all.js`                | esm         | yes    | Latest JS features        |
| `lit.all.cjs.js`            | cjs         | yes    | Latest JS features        |
| `lit.all.compat.js`         | esm         | yes    | Modern browsers           |
| `lit.all.compat.cjs.js`     | cjs         | yes    | Modern browsers           |
| `lit.all.fullcompat.js`     | esm         | yes    | 92% browser compatibility |
| `lit.all.fullcompat.cjs.js` | cjs         | yes    | 92% browser compatibility |

## Extras

The included extras are:

* [@lit/localize](https://github.com/lit/lit/tree/main/packages/localize)
* [@lit-labs/motion](https://github.com/lit/lit/tree/main/packages/labs/motion)
* [@lit-labs/react](https://github.com/lit/lit/tree/main/packages/labs/react)
* [@lit-labs/ssr-client](https://github.com/lit/lit/tree/main/packages/labs/ssr-client)
* [@lit-labs/task](https://github.com/lit/lit/tree/main/packages/labs/task)

## Updates

This package gets automatic updated by Github Actions once a week and tracks Lit versions.
