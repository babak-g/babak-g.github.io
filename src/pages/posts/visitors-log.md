---
title: "Visitor's log"
layout: ../../layouts/post.astro
pubDate: 2021-02-01
description: "Web app for managing visits in a company."
image:
  url: "https://media.graphcms.com/resize=width:500,height:300/9dlHlqMYSfiJCVv9Or1Y"
  thumb: "https://media.graphcms.com/resize=width:500,height:300/9dlHlqMYSfiJCVv9Or1Y"
  alt: "Screenshot of the app"
tags:
  [
    "Javascript",
    "React",
    "Node",
    "MUI",
    "Firebase",
    "Jest",
    "Cypress"
  ]
---
### My role

My responsibility was to lead the project from both technical and product perspective. The project was created in a team of two - myself as a senior engineer and one junior engineer. My job included a regular meetings with the client about the project definition, estimating the development process, leading the implementation, deployment and maintenance.

### About the app
The app is using Firebase infrastructure (authentication, Firestore, storage, hosting, functions). Every new visit is in directly (via real time queries) visible in the administration and it triggers a Firebase function which sends email and calls an API of a third party service which performs a phone call to the visited person.

Users which don't want to touch the screen can either use voice recognition to fill the fields or can scan the QR code and complete the process on their phone.

A primary use of this app is meant to be on a tablet in a kiosk mode (a user cannot leave the app).

<iframe width="560" height="315" src="https://www.youtube.com/embed/jIQO02Oh-0Q?si=R8AcuMbGnJ6BoF39" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
