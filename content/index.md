---
layout: layouts/doc.njk
title: 11-minidown-docs
subtitle: Eleventy port of atusy/minidown
author:
  - atusy (original minidown)
  - 11-minidown-docs maintainers
date: 2026-02-19
toc:
  - id: overview
    label: Overview
  - id: frameworks
    label: Framework options
  - id: docs
    label: Documentation pages
---

<h2 id="overview">Overview</h2>

This repository ports the visual and document layout style of `atusy/minidown` to Eleventy `3.1.2` with ESM configuration and Luxon date filters.

The site keeps minidown's core structure:

- `main`
- title block `header`
- optional `nav[role="doc-toc"]`
- content `article`

<h2 id="frameworks">Framework options</h2>

Available built-in framework CSS copied from minidown:

- `mini-default.min.css`
- `mini-dark.min.css`
- `mini-nord.min.css`
- `water/light.css`
- `water/dark.css`
- `spcss.min.css`

Set per page with front matter:

```yaml
frameworkCss: /frameworks/sakura/sakura-default.css
```

<h2 id="docs">Documentation pages</h2>

- [Getting Started](/docs/getting-started/)
- [Styling and Themes](/docs/styling/)
