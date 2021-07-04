import resolve from '@rollup/plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';
import license from 'rollup-plugin-license';
import {babel} from '@rollup/plugin-babel';

const LICENSE = `@license
Copyright 2021 Google LLC
SPDX-License-Identifier: BSD-3-Clause`;

function build({input, output, format, target}) {
  const babelPlugin = [];

  if (target !== null) {
    babelPlugin.push(babel({
      babelHelpers: 'bundled',
      presets: [
        [
          "@babel/preset-env",
          {
            "targets": target,
            "useBuiltIns": "usage",
            "corejs": {"version": "3.10", "proposals": true},
            "shippedProposals": true
          }
        ]
      ],
    }));
  }

  return {
    plugins: [
      resolve({
        browser: true,
      })].concat(babelPlugin).concat([
      terser({
        format: {
          comments: false,
        },
      }),
      license({
        banner: LICENSE
      }),
    ]),
    preserveEntrySignatures: true,
    input: input,
    output: {
      inlineDynamicImports: true,
      format: format,
      sourcemap: false,
      file: 'dist/' + output,
    }
  };
}

const out = [];

for (const inputType of ["lit", "all"]) {
  let input;
  let outputType;
  if (inputType === "lit") {
    input = './node_modules/lit/index.js';
    outputType = 'lit';
  } else if (inputType === 'all') {
    input = './import_all.js';
    outputType = 'lit.all';
  }

  for (const target of [null, 'last 2 Chrome versions', 'defaults']) {
    let outputTarget = '';
    if (target === 'last 2 Chrome versions') {
      outputTarget = '.compat';
    } else if (target == 'defaults') {
      outputTarget = '.fullcompat';
    }

    for (const format of ['es', 'cjs']) {
      let outputFormat = '';
      if (format === 'cjs') {
        outputFormat = '.cjs';
      }
      const output = `${outputType}${outputTarget}${outputFormat}.js`;
      out.push(build({input, format, target, output}));
    }
  }
}

export default out;
