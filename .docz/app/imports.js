export const imports = {
  'docs/getting-started.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-getting-started" */ 'docs/getting-started.mdx'),
  'src/components/Alert/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-alert-index" */ 'src/components/Alert/index.mdx'),
  'src/components/Button/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-button-index" */ 'src/components/Button/index.mdx'),
  'src/components/Col/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-col-index" */ 'src/components/Col/index.mdx'),
  'src/components/Row/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-row-index" */ 'src/components/Row/index.mdx'),
}
