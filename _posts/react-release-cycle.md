---
title: React release cycle
date: "2023-03-8T13:29:00.169Z"
---

React is a popular JavaScript library for building user interfaces. It is maintained by Facebook and a community of developers and companies. React releases new versions regularly, but how does it manage to introduce new features without breaking existing code? In this blog post, we will explain how the React release cycle works and how it ensures stability and compatibility for its users.

React follows semantic versioning (or semver), which means that every version number has three parts: major, minor, and patch. For example, React 18.0.0 is a major version, React 18.1.0 is a minor version, and React 18.1.1 is a patch version.

Major versions contain breaking changes that may require code changes when upgrading. Breaking changes are inconvenient for everyone, so React tries to minimize the number of major releases. For example, React 15 was released in April 2016 and React 16 was released in September 2017, and React 17 was released in October 2020.

Minor versions contain new features that are backwards compatible, meaning that they do not break existing code. For example, React 16 introduced features like fragments, error boundaries, portals, hooks etc., but they did not require any code changes to use them.

Patch versions contain bug fixes and performance improvements that do not affect the public API. For example, React 16.13 fixed some warnings related to legacy context API.

React also has pre-release versions that are used for testing new features before they are officially released. These include alpha (e.g., react@alpha), beta (e.g., react@beta), next (e.g., react@next), experimental (e.g., react@experimental), etc… These versions are not intended for production use and may contain bugs or breaking changes.

The current stable version of React is 18, which was released on November 2022 . It introduced features like automatic batching , streaming server rendering , concurrent rendering mode , etc.

If you want to learn more about these features or how to upgrade your project to React 18 , you can check out these resources:

The official blog post announcing React 18 : https://reactjs.org/blog/2021/06/08/the-plan-for-react-18.html
The official documentation for React : https://reactjs.org/docs/getting-started.html
The official migration guide for React : https://reactjs.org/docs/upgrading-to-react-17.html
We hope this blog post helped you understand how the React release cycle works and how it ensures stability and compatibility for its users.

Do you have any questions or feedback about this blog post? Please let us know in the comments below!
