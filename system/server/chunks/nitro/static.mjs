import { createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';
import { c as buildAssetsDir } from './server.mjs';
import 'unenv/runtime/polyfill/fetch.node';
import 'http';
import 'https';
import 'destr';
import 'ohmyfetch';
import 'unenv/runtime/fetch/index';
import 'defu';

const assets = {
  "/_nuxt/asyncData-3d66c517.mjs": {
    "type": "application/javascript",
    "etag": "\"745-InWmP7aag0unc5Zc0wMiOyGDJuI\"",
    "mtime": "2022-05-01T14:30:15.396Z",
    "path": "../public/_nuxt/asyncData-3d66c517.mjs"
  },
  "/_nuxt/bootstrap-4c3db2f1.mjs": {
    "type": "application/javascript",
    "etag": "\"c2bad-u1MOSR3GZKGD4O2m1tQPOQ4G8GE\"",
    "mtime": "2022-05-01T14:30:15.392Z",
    "path": "../public/_nuxt/bootstrap-4c3db2f1.mjs"
  },
  "/_nuxt/bootstrap.7c5e8d9e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"43eb6-5eC1nR2JouLBOzyz29/7bKAa3vM\"",
    "mtime": "2022-05-01T14:30:15.392Z",
    "path": "../public/_nuxt/bootstrap.7c5e8d9e.css"
  },
  "/_nuxt/entry-b0e5d21a.mjs": {
    "type": "application/javascript",
    "etag": "\"65-I1G3hy1G2KNd+8PuXtLoZ4eQboA\"",
    "mtime": "2022-05-01T14:30:15.388Z",
    "path": "../public/_nuxt/entry-b0e5d21a.mjs"
  },
  "/_nuxt/login-88f16540.mjs": {
    "type": "application/javascript",
    "etag": "\"878-pRr4Xwtzy0cksDV/stK5sNxOel8\"",
    "mtime": "2022-05-01T14:30:15.388Z",
    "path": "../public/_nuxt/login-88f16540.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"3e2-g8sovXm8H2wbiI8RAx5doHnurM0\"",
    "mtime": "2022-05-01T14:30:15.388Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/test-ddc6648d.mjs": {
    "type": "application/javascript",
    "etag": "\"26c-uLVohDO+3wfibiFBAANNgvKJ630\"",
    "mtime": "2022-05-01T14:30:15.388Z",
    "path": "../public/_nuxt/test-ddc6648d.mjs"
  }
};

const mainDir = dirname(fileURLToPath(globalThis.entryURL));

function readAsset (id) {
  return promises.readFile(resolve(mainDir, getAsset(id).path))
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const TWO_DAYS = 2 * 60 * 60 * 24;
const STATIC_ASSETS_BASE = "/_nuxt/home/runner/work/system.sufu.site/system.sufu.site/dist" + "/" + "1651415404";
async function serveStatic(req, res) {
  if (!METHODS.includes(req.method)) {
    return;
  }
  let id = withLeadingSlash(withoutTrailingSlash(parseURL(req.url).pathname));
  let asset = getAsset(id);
  if (!asset) {
    const _id = id + "/index.html";
    const _asset = getAsset(_id);
    if (_asset) {
      asset = _asset;
      id = _id;
    }
  }
  const isBuildAsset = id.startsWith(buildAssetsDir());
  if (!asset) {
    if (isBuildAsset && !id.startsWith(STATIC_ASSETS_BASE)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    res.statusCode = 304;
    return res.end("Not Modified (etag)");
  }
  const ifModifiedSinceH = req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      res.statusCode = 304;
      return res.end("Not Modified (mtime)");
    }
  }
  if (asset.type) {
    res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    res.setHeader("Last-Modified", asset.mtime);
  }
  if (isBuildAsset) {
    res.setHeader("Cache-Control", `max-age=${TWO_DAYS}, immutable`);
  }
  const contents = await readAsset(id);
  return res.end(contents);
}

export { serveStatic as default };
