# Minimial Repro Example

Bug: the redirect when trailingSlash=never and pathPrefix=* redirects without accounting for pathPrefix.

To run:
```
gatsby build --prefix-paths
gatsby serve --prefix-paths
```

Working: Navigate to /prefix/hello.
Broken: Navigate to /prefix/hello/. This redirects to /hello. Should be /prefix/hello.

Changes made in `gatsby-config.js`:

```js
pathPrefix: '/prefix',
trailingSlash: 'never',
```
