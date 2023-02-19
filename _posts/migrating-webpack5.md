---
title: Migrating to webpack 5
date: "2020-10-13T22:00:00.169Z"
description: Migrating to webpack X has always beeing a pain, lets see now!
---

We all know the struggles that we had when upgrading from webpack 3-4. The ecosystem was by any means ready to this, neither the core team or the docs were!

All the breaking changes were announced on the last day before the official release, we had plugins and loaders which were not up-to-date neither were compatible.

On this article i'll try to cover and we will see how easy is to make the upgrade now! (be aware that on the time this is being written it has been few days since the release)

# Pre-requisites

1. Make sure you have node 10 supported! (v10 LTS)
2. If you have such a complex configuration, check the official guide [here](https://webpack.js.org/migrate/5/)
3. remove all references to `[hash]`, the official team is suggesting we use `[contenthash]` anyways. This is far more efficient for every scenario you will have on your app!
4. There are some defaults you can remove now!
   4.1 remove reference on your entrypoint to `./src/index.js`, it is default
   4.2 remove reference to `path.resolve('dist')` on your `output.path`
   4.3 use output.filename: `'[name].js'`
5. add target to have the webpack runtime code complaint to the platform you want to support, i.e: `target: ['web', 'es5']`, default is es6.
6. Upgrade all your loaders and plugins

You can check out the migration i have done to my personal boilerplate [here](https://github.com/PlayMa256/react-initial-bootstrap/pull/110)

# Is it working?

Yes it is! Surprisingly enough the webpack team did a pretty good job announcing the upcoming breaking changes months and months ago! This is really good for the whole ecosystem!

There are just few loaders/tools that have to be updated since there are some breaking changes, which are going to be handled in the upcoming days!
