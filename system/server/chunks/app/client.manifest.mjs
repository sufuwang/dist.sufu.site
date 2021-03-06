const client_manifest = {
  "node_modules/nuxt3/dist/app/entry.mjs": {
    "file": "entry-b0e5d21a.mjs",
    "src": "node_modules/nuxt3/dist/app/entry.mjs",
    "isEntry": true,
    "dynamicImports": [
      "_bootstrap-4c3db2f1.mjs"
    ]
  },
  "_bootstrap-4c3db2f1.mjs": {
    "file": "bootstrap-4c3db2f1.mjs",
    "isDynamicEntry": true,
    "dynamicImports": [
      "pages/login.vue",
      "pages/test.vue"
    ],
    "css": [
      "bootstrap.7c5e8d9e.css"
    ]
  },
  "pages/login.vue": {
    "file": "login-88f16540.mjs",
    "src": "pages/login.vue",
    "isDynamicEntry": true,
    "imports": [
      "_bootstrap-4c3db2f1.mjs",
      "_asyncData-3d66c517.mjs"
    ]
  },
  "_asyncData-3d66c517.mjs": {
    "file": "asyncData-3d66c517.mjs",
    "imports": [
      "_bootstrap-4c3db2f1.mjs"
    ]
  },
  "pages/test.vue": {
    "file": "test-ddc6648d.mjs",
    "src": "pages/test.vue",
    "isDynamicEntry": true,
    "imports": [
      "_bootstrap-4c3db2f1.mjs",
      "_asyncData-3d66c517.mjs"
    ]
  }
};

export { client_manifest as default };
