---
layout: chapter
chapter: one
timeframe: 2017 – 2022
role: VP Design, Qwilr
theme: purple
tags: testtag
slug: qwilr

description: That's the American one, you berk! I didn't even know Smarties made a cereal. They don't, it's just Smarties in a bowl with milk. It's like they're pally-wally with us when there's a problem with their printer, but once it's fixed... No, no there you go, no there you go. I just heard it come on.

vingette: /assets/projects/editor/hero-editor.jpg
---

### The story begins...

Qwilr (pronounced quill-er) is simple but powerful content editing platform, that allows businesses to create and share all their sales documents as modern, interactive webpages. Unlike the common standard of sending proposals as boring PDFs, Qwilr Pages look professionally designed, and can be opened and signed from anywhere, including mobile. <br><br> I joined in mid 2017, pre Series A, as their first Design Lead. Although Qwilr had already largely found product market fit with SMBs, it needed to meet the growing demands of larger teams, and design some major feature updates to it’s core editing experience.

### The starting point

Qwilr’s CEO and design co-founder, Dylan Baskind, built the company from the outset to have design as a focus. The product was well designed and successful, but symptomatic of Dylan being CEO and sole designer for so long, design and it’s processes were time poor. Features wanted more time to be designed, and needed more time to be polished.

{% include modules/image-grid.html url1="/assets/projects/qwilr/qwilr-before-a.jpg" url2="/assets/projects/qwilr/qwilr-before-b.jpg" url3="/assets/projects/qwilr/analytics.jpg" url4="/assets/projects/qwilr/qwilr-before-d.jpg" %}

### Evolving the brand

As new features were released, and the design language of the product was evolving, the website was starting to become out of date. As a first experience of Qwilr, it was really important for this first step to be aligned to the product, and help cement Qwilr as a memorable (and better) alternative to other products on the market.

{% include modules/image-grid.html url1="/assets/projects/qwilr/homepage-a.jpg" url2="/assets/projects/qwilr/homepage-b.jpg" url3="/assets/projects/qwilr/homepage-c.jpg" url4="/assets/projects/qwilr/homepage-d.jpg" %}

### Redesigning Custom Styles

One of the core promises of the product is being able to create visually engaging and professional documents without a designer. The feature set that made this possible, called “Custom Styles”, had initially done a great job of this. Fast and easy to use controls grouped style concerns into compound actions, and users felt empowered. Over time though, needs evolved, and the guard rails that were put in place were under strain.

{% include modules/image-layouts.html url="/assets/projects/qwilr/custom-styles-old.jpg" type="wide" description="UI was custom but was inconsistent, space to grow/cramp" %}

Initially, you had some presets to choose from, but you couldn’t actually change the font sizes, background or font colours, and every change had to be done through CSS—which was making changes challenging to maintain and support. Walking through designs and prototypes with users, we introduced a new style editor overlay, which provided more granularity, without it feeling overwhelming to users.

{% include modules/image-layouts.html url="/assets/projects/qwilr/custom-styles-2.0.jpg" type="wide" %}

This got us part of the way there, but editing wasn’t contextual and felt removed, some found the controls confusing or hard to manipulate, and we had issues with feature discovery. All in all, users just didn’t love it. Undeniable bestness being one of Qwilr’s principles, we decided to go back to square one on the feature. [Something I wrote more about here.](https://medium.com/@dominosebastian/the-quest-for-undeniable-bestness-5153832463a)

After a lot more research and user interviews, we approached the problem from a new perspective. Making editing contextual, simplified controls with thoughtful shortcuts, and allowed quick modifications without forcing users to save the style.

{% include modules/image-grid.html url1="/assets/projects/qwilr/Splash Block.jpg" url2="/assets/projects/qwilr/Splash Block-1.jpg" url3="/assets/projects/qwilr/Splash Block-2.jpg" url4="/assets/projects/qwilr/Splash Block-3.jpg" %}

{% include modules/image-layouts.html url="/assets/projects/qwilr/colour-picker.jpg" type="wide" %}

{% include modules/image-layouts.html url="/assets/projects/qwilr/style-shortcuts.jpg" type="wide" %}

{% include modules/image-grid.html url1="/assets/projects/qwilr/Quote Block.png" url2="/assets/projects/qwilr/Quote Block-1.png" url3="/assets/projects/qwilr/Quote Block-2.png " url4="/assets/projects/qwilr/Quote Block-3.png" %}

### Designing the ideal editing experience

As one of our core customer feedback loops, our NPS was highlighting a trend—the content editor felt “buggy”. Buggy is really a catchall for something not feeling right in use, but being really hard to be specific about. Could be clicking on a button and feeling a delayed reaction, the cursor behaving unexpectedly, and interactions not behaving consistently.

{% include modules/image-layouts.html url="/assets/projects/qwilr/editor-doc.png" type="wide" %}

{% include modules/image-layouts.html url="/assets/projects/qwilr/new-editor-ui.jpg" type="screen" %}

We consulted with engineers and designers at Medium and Dropbox to learn how they’ve approached their ideal editing experiences. Learning from this, and as part of a large engineering rewrite project, we did a deep dive into all the invisible interactions that could be contributing to this bad NPS, whilst redesigning some that were known problems.

{% include modules/note.html title="Note" description="This is an ongoing project, and more will be added here after the beta is finished." %}
