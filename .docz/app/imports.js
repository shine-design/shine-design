export const imports = {
  'src/components/Row/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-row-index" */ 'src/components/Row/index.mdx'),
}
