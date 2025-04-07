import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import legacy from "@vitejs/plugin-legacy";
import devtools from "solid-devtools/vite";
import hexColorTransform from "@lightningtv/vite-hex-transform";
import { configDefaults } from "vitest/config";

export default defineConfig(config => ({
  plugins: [
    hexColorTransform(),
    devtools({
      /* features options - all disabled by default */
      autoname: true, // e.g. enable autoname
    }),
    solidPlugin({
      solid: {
        moduleName: "@lightningtv/solid",
        generate: "universal",
      },
      hot: false,
    }),
    legacy({
      targets: ["chrome>=38"],
      // polyfills: ["es.promise.finally", "es/map", "es/set"],
      // modernPolyfills: true,
      additionalLegacyPolyfills: ["whatwg-fetch"],
      modernPolyfills: [
        // Safari 11 has modules, but throws > ReferenceError: Can't find variable: globalThis
        "es.global-this",
      ],
    }),
    {
      name: 'tmdb proxy',
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          if (req.url != null && req.url.startsWith('/image_tmdb')) {
            const target = 'https://image.tmdb.org/t/p/'
            const path = req.url.slice('/image_tmdb/'.length)
            const proxyUrl = target + path

            try {
              let response = await fetch(proxyUrl)
              let buffer = await response.arrayBuffer()
              res.setHeader('Content-Type', response.headers.get('Content-Type'))
              res.end(Buffer.from(buffer))
            } catch (err) {
              res.statusCode = 500
              res.end('Proxy error: ' + err.message)
            }
            return
          }
          next()
        })
      }
    }
  ],
  build: {
    targets: ["chrome>=69"],
    minify: false,
    sourcemap: false,
  },
  resolve: {
    alias: {
      theme: "@lightningjs/l3-ui-theme-base",
    },
    dedupe: [
      "solid-js",
      "solid-js/universal",
      "@solidjs/router",
      "@lightningjs/renderer",
      "@lightningtv/core",
      "@lightningtv/solid",
      "@lightningtv/solid/primitives",
    ],
    conditions: ["@lightningtv/source", "browser", config.mode],
  },
  optimizeDeps: {
    exclude: [
      "@lightningtv/solid",
      "@lightningtv/core",
      "@lightningjs/renderer",
    ],
  },
  server: {
    port: 5174,
    hmr: true,
    headers: {
      "Cross-Origin-Opener-Policy": "same-origin",
      "Cross-Origin-Embedder-Policy": "require-corp",
    },
  },
  test: {
    exclude: [...configDefaults.exclude, "packages/template/*"],
    globals: true,
  },
}));
