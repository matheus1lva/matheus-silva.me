---
title: Saving 1TB in Javascript
date: "2020-05-23T13:29:00.169Z"
description: Reducing the size of `node_modules`
---

We all know how `node_modules` has this bad reputation of being heavier than the size of earth, or even the sun!

![node meme](./meme.jpg "Node modules meme")

Node package system is a weird ecosystem, it has not so good documentation and there are multiple ways of doing things that we never know which one is the correct!
I'm an example of someone that was completely overwhelmed by the documentation and when i published my package I didn't know the correct way to do that! Many people don't know either and we end up having things like this

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">what is your biggest node_modules?<br><br>mine has 2GB <a href="https://t.co/Xx1pWnJ8eq">pic.twitter.com/Xx1pWnJ8eq</a></p>&mdash; Sibelius Seraphini (@sseraphini) <a href="https://twitter.com/sseraphini/status/1262415141905235968?ref_src=twsrc%5Etfw">May 18, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

As sibelius posted the other day on twitter, a 2GB `node_modules`, are you crazy????
we can save up on space using small libraries, libraries that have fewer files, fewer dependencies, etc. But do the original authors know they are doing it wrong?? Mostly don't!

Last week at the office, I saw that my HDD was full! I didn't know where all this size was coming from! I immediately searched for `node_modules` and I found it was the problem!

To find out which packages had problems, I started creating a CLI which scans your `node_modules` recursively (if you are using npm, yarn hoists everything on the root anyways) and finds for folders and files that were published incorrectly, which could help save space!

That is why I created [`node-modules-analyzer`](https://github.com/PlayMa256/node-module-analyzer)!

It scans your dependencies and creates a report that shows all the problems! The initial implementation and report only show some blacklisted files, which will be improved in the feature!

`gist:PlayMa256/c0b64fe539b8ee1195a2837e32b8224c`

This is an example on how it reports errors!

My goal is to instruct and even create pull requests that fixes those types of errors! In some cases they are false negatives but in some they are not!

There are many features I want to add in the feature, which are:

# Roadmap

0. look for positives for `src` folder
1. Add support for GitHub action
1. Add a custom CI/CD reporter
1. CI/CD for GitHub pull requests and merges
1. Add support for multiple and custom reporters
1. pre-commit hook
1. Purge CLI tool!
1. automated bot reporter (to open Pull requests on each repository)

The step 0 is something I'm currently developing and it is not as straight forward as it sounds. We need to look into the `main`, `browser` and `module` fields inside the `package.json` file in order to validate if the src folder being published is a defect or not! This will come ASAP!

I would say that there is much more that can be done, there are tools around that claims to "clean" your `node_modules` but ends up doing more harm than good or many are not perfect! There is a friend which have run one of these purge clis, but his `eslint` binary was deleted `lol`! There is something I'm looking aswell!

There is much more! Going even further i see in the forseable future a CDN like/provider similar to `unpkg` or `pika` where we have the options for each package to have published its own optimized/non-optimized version of it where users from deno, npm, yarn, anyone can consume from!

Have a look and if needed open an issue and I'll be pleased to help!

I hope to help everyone in this process, so we all have a smaller node_modules size, which is the price paid while developing `javascript` nowadays!
