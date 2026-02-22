# 11-minidown-docs

Eleventy 3.1.2 (ESM) documentation starter based on the HTML/CSS structure from [`atusy/minidown`](https://github.com/atusy/minidown).

## Stack

- Eleventy `3.1.2`
- ESM config (`eleventy.config.js`)
- Luxon date filters
- Nunjucks layouts

## Why Nunjucks (instead of Vento/WebC)

Nunjucks is the best fit for this port because it preserves minidown's document-template markup with minimal changes, especially the `header` + `nav[role="doc-toc"]` + `article` structure.

- Vento: great but requires more template syntax conversion from the minidown/pandoc-style layout.
- WebC: strong for components, but unnecessary for a document-first theme and would add more structural refactoring.

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Verify Eleventy version (no `rg` required)

```bash
npm ls @11ty/eleventy
grep -n '"@11ty/eleventy"' package.json package-lock.json
```

Expected: `3.1.2` in both files and in installed tree.

## Update dependencies safely

```bash
npm install -D @11ty/eleventy@3.1.2 @11ty/eleventy-img@latest @11ty/eleventy-navigation@latest @11ty/eleventy-plugin-rss@latest @11ty/eleventy-plugin-syntaxhighlight@latest
npm install luxon@latest
rm -rf node_modules package-lock.json
npm install
npm run verify
```

## Theme CSS

Framework files copied from minidown are in `public/frameworks/`.
Set page-level framework with front matter:

```yaml
frameworkCss: /frameworks/mini/mini-default.min.css
```
