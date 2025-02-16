---
title: "React API hooks generator"
layout: ../../layouts/post.astro
pubDate: 2021-08-01
description: "A utility to generate JS functions and React Query hooks for API communication."
tags: ["Javascript", "Typescript"]
owner: Soincon
---

<h2 class="text-xl font-bold">The opportunity</h2>

The apps which we were building in Soincon were using the same pattern - a client in React trigger queries to an API generated from Java Spring. There was always the same (CRUD) code which was necessary to write. I saw that we have a nice Open API specification about our endpoints and thought that it would be nice programmatically generate a functions which would query those endpoints. It could also suggest the necessary parameters which every endpoint expects and most importantly generates Typescript interfaces. We were using `react-query` and I thought that it would be nice to generate also a hook for every endpoint.

<br />

After writing a proof of concept I've found out that somebody made a similar library. I've decided to fork it (because of some internal custom requirements) and implement the missing parts.

From that moment every new project used this generator and it saved hours of coding and it reduces possible errors which might be introduced if the code that would be written manually.

<br />

Tha plan was to implement a plugin system to the forked library so the specific needs would move go to a custom plugins. That way we could give back to the open source community.

<br />

<p class="text-yellow-300">
<a href="https://github.com/soincon/swagger-to-react-query" target="_blank">https://github.com/soincon/swagger-to-react-query</a>
</p>
