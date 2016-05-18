---
layout: project
title: BEST Network
description: Affording Biomedical Teaching & Collaboration Over the past 6 months, I lead the design of a major update to the BEST Network's flagship product, Slice.
description: The problem to solve was an old site with no clear information architecture was fucking confusing and ugly maaaan.
refID: project
problem: Low engagement
type: New Website
stat1: 475
stat2: 67
stat3: 224
---

Over the past 6 months, I lead the design of a major update to the BEST Network's flagship product, [Slice](https://www.best.edu.au/slice/), to better integrate it into our academic's workflow and teaching. It involved rethinking parts of our taxonomy, core flows, and designing new UI to encourage collaboration amongst students and academics.


### Some background
Slice is a tool that lets academics and institutions upload scanned medical images, to annotate them as an interactive virtual slides for their peers and students to learn from. What this means for academics, is liberating the glass slides they otherwise would be storing on shelves in the lab, to share and build upon with a global network, online. What this means for students, is an online replacement to multiheader microscopes in labs, allowing them interact with the content in way not previously thought possible.


### Correcting the first step
I first saw Slice early into 2014, and instantly saw the value it could provide as a tool for learning. Borrowing from Google Maps, it used a familiar mental model in how you interact with a virtual slide, had a seeming abundance of slides and contributors to learn from, and the quality of the scans were remarkable. Microscopic scans at 40x zoom look more like art than anything else.

When you first landed in the tool however, there was a common friction point in getting users to the next stage, the first hurdle in any UX project - guiding them on what they should do next. These users had an account, they had a clear goal to annotate their virtual slide, but had no idea where to action this, or why they couldn’t move forward.

{% include modules/article_image.html url="/assets/projects/Slice-Master-01.jpg" description="Slice interface before, with no empty state, and the prompt hidden in the bottom right" %}

We realised one of the main causes of user frustration at this point was actually the hidden error notification for when they weren’t logged in, but were trying to interact with the slide, and having no helpful way to inform new users what to do next if they were logged in. All three were solved by reducing parts of the interface they didn't need to see at this stage (like slide metadata) and putting in a clear empty state, removing the need for the error message altogether.

{% include modules/article_image.html url="/assets/projects/Slice-Master-02.jpg" description="Slice interface now, with clear empty state" %}

### Designing for focus
After an observation session at a partnering university in Sydney, it was clear we needed a way to allow let teachers switch between student annotations (to present misconceptions in class discussions), and for these to be made optionally anonymous (to avoid highlighting an individual student's misconception to their classmates). The resulting design was to include "Toggle focus" within the student list, and for extra options to be added to the sharing settings, to allow anonymity.

{% include modules/article_image.html url="/assets/projects/Slice-Master-03.jpg" description="Student annotation list on the left with focus and visibility toggles" %}

### Understanding teaching contexts
Collaborative annotations was one of the most popular feature launches for Slice to date, but the remaining work surrounded how teachers and academics could make the most of the feature in their teaching. The result of the ongoing user interviews and observation sessions was to divide the feature into three seperate contexts, for the 3 main groups of use cases we observed - present in class, share as a resource, and creating an activity.

{% include modules/article_image.html url="/assets/projects/Slice-Master-04.jpg" description="Teaching options for a virtual slide image, in class, in presentation, and as an activity" %}

### Still to come
There’s still some features and changes related to Classes that haven’t quite made it to production, and some more still we want to change in the coming months relating to student analytics. You can learn more about Smart Sparrow by [visiting their website](https://www.smartsparrow.com/).

Have a project you'd me to work on? [Send me an email](mailto:dominic@considered.design).
