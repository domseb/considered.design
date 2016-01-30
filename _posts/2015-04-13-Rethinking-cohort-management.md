---
layout: post
title: Rethinking Cohort Management
permalink: /rethinking-cohort-management/
tag: project
---

As part of a business requirement to how per user licensing was handled, I lead the redesign of Smart Sparrow’s core product flows to make cohort management, and understanding how it affected their license, a streamlined process.

#### ABOUT SMART SPARROW
Smart Sparrow is a learning design platform that enables anyone to create rich, interactive and adaptive elearning courseware. After raising $10m in 2014 and expanding to San Francisco, they’ve worked with over 500 institutions globally, and won numerous awards. Their latest project is next-generation science courseware, funded by a grant from the Bill and Melinda Gates Foundation, to help educate 250,000 community college across the United States.

#### CONSOLIDATING PROCESSES
In broad strokes, Smart Sparrow has two main products – one to create courseware (the Author), and one to manage the courseware and distribute it to students (the Workspace). The Workspace for a long time has been centred around individual lessons, meaning all global actions you can make to a lesson (enrolling students to take the lesson, sharing the lesson, adding collaborators etc) were all done on that lessons page. This meant that to teach two different lessons to the same group of students, you’d have to enrol them in one lesson, and repeat the process for the same lesson, a tedious process for all users. 

We needed to design a place to centralise all these actions in one place, giving teachers complete control of their students and content they are teaching them. After months of requirements gathering, user stories, brainstorming, prototyping and testing, we finally had a design that we were happy with, and could move into engineering. 

*image of classes list*

#### MAKING THE RIGHT INFORMATION VISIBLE
Another problem we were designing to solve, was liberating all the important information the user needed out of modals. Anything we felt was core information necessary to manage the class, was stripped out of a modal, and given a new home in the Classes tab. This allowed teachers to have a much better overview of their students, and lesson status, all in one area. 

*image of student list*

#### REDUCING MODAL STEPS
For some actions, we still had to have them behind modals, but we wanted to streamline the design of these as well. Through a small feature audit, we were able to consolidate options the user needed to take, made their descriptions much more concise and remove some options entirely. What would previously take up to 10 steps before to enrol students and deploy lessons to them, now only took 3. 

*image of modal before vs after*

#### HIGHLIGHTING LICENSE RESTRICTIONS
Now we had one area for users to manage their students, we also needed to make them aware of how that affected their license usage. Although for new users this would easier to elaborate on, for existing users we needed a clear, visual UI marker to help indicate the higher boundaries of their license, to make sure they didn’t go over their quota. After a series of experiments, we created the quota wheel below, using animation and colour to highlight the limits of the license. 

*image of modal before vs after*

#### STILL TO COME
There’s still some features and changes related to Classes that haven’t quite made it to production, and some more still we want to change in the coming months relating to student analytics. You can learn more about Smart Sparrow by [visiting their website](https://www.smartsparrow.com/). 

Have a project you'd me to work on? [Send me an email](mailto:dominic@considered.design).