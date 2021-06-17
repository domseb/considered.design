---
layout: post
title: The quest for undeniable bestness
permalink: /quest-for-undeniable-bestness/
featured: true
---

{% include modules/image-layouts.html url="/assets/blog/quest-large.jpg" type="hero" %}

To help frame this post, I want to begin by sharing a snippet from [Qwilr’s driving Principles](https://pages.qwilr.com/gTndRdDyT7mY), written by our Founder & CEO, Dylan:

> We succeed not by taking hack shortcuts, not by social engineering or political machination, or short-term hot-air strategies, but by working resolutely and systemically to become the best. And not just the best, but the Undeniable Best, a superiority which once experienced, cannot be argued with.

In early June this year, my first project as Head of Design was to improve the way you create and manage custom project styles in Qwilr; to discover and design what Undeniable Bestness for this set of features might be. In the past 6 months we’ve completely redesigned how we think about and manage styles, and built an entirely new approach for our users. We’ve tested it internally, have beta users running through it as I type this, with some even using it on their live projects. The problem is it’s still not right — it simply does not meet our standard of Undeniable Bestness. So while I’d love to announce today our amazing and clever new solution, there’s a little more to it, and I wanted to be as transparent as possible as to why we are not launching this feature this year.

## The starting point

Before the redesign, every project you had on Qwilr came with a handful of preset styles to choose from. These presets managed the alignment and colour of that section, the available colours being whatever was set as the global brand colours on your account. What worked really well with this approach was being able to quickly browse styles to see which one was best suited to your content, with minimal decision tax. The main problem, though, was that anything you wanted to edit (either font size, individual item colour or alignment), all had to be done with CSS. It looked something like this:

{% include modules/image-layouts.html url="/assets/blog/styles-before-a.png" type="wide" style="border" description="Menu for browsing style presets" %}

For a large group of our users, having just a few preset styles without needing to edit anything worked great — you choose Qwilr specifically because it helps to enable better design outcomes with minimal decision making. But for another growing group of Qwilr users, not being able to directly edit and customise styles is limiting. You want it to feel like a natural extension of their brand, and to do this you need better style controls. In this case, Qwilr is likely being used across a larger team, which also introduces the idea of design or brand owners, who want to create styles their team uses without being able to edit.

A long story short, our users had simply outgrown how we’d thought about custom styles. We needed to rethink how we could create something better: something that empowered the growing variety of teams using Qwilr for their work.

## Revisiting the core experience

Starting this redesign was a good opportunity to understand the mindset users have when starting to use Qwilr. The tools people are most familiar with before switching to Qwilr range from Microsoft Word to Adobe Indesign — and they both act as important framers for how people expect Qwilr to work. Both give very different expectations of how styles are created and managed, and our approach had to meet and leverage that familiarity to how Qwilr does things. For this, we needed a guiding question to help navigate uncertainty throughout the design process, and get us as close as possible to what users really needed. After a few brainstorming and unpacking sessions, we arrived at this:

> How can we make creating and managing custom styles a fast and empowering experience?

## Rethinking the style editor

Our guiding question in place, we started at the hardest area first — the editor used to create new styles. After speaking with a bunch of users, our initial design work focussed on having controls for every element in the block, to expand what could be controlled. This included controls for styling the heading, and separate controls the subheading etc. It made what should feel like a quick thing to change actually feel overwhelming with the choices available.

{% include modules/image-layouts.html url="/assets/blog/style-editor-a.png" type="wide" style="border" description="Early UI designs for the style editor" %}

## Early UI designs for the style editor

In some ways this was great, because it surfaced all the controls a user needed to edit style, really minimising the dependency on CSS. In other ways though, it was quite far removed from Qwilr’s design principles. For lack of better wording, it just didn’t feel right to use, and was overcomplicating the process. To help highlight this a bit better, here’s a little insight into our design process, for how we order our ideas when we create new features:

{% include modules/image-layouts.html url="/assets/blog/design-principles.png" type="wide" style="border" %}

Bearing this in mind, we thought about how we can reduce the number of UI controls, without loosing any style control. We started experimenting with how we could group multiple controls into one, so creating styles could be faster, and easier to get good design outcomes. This is quite close to how we as designers think about creating designs for documents and websites, and was a way to keep all the text as part of the same size relationship.

{% include modules/image-layouts.html url="/assets/blog/style.gif" type="wide" style="border" description="Style controls manipulating text" %}

After testing this round with users, it seemed like a good compromise between good outcomes without going overboard on controls. The feedback at this stage though made it clear we’d still need to expand on our style controls going forward, and being in the same view didn’t give it much room to grow over time. To tackle this, we moved everything into a style editor overlay, which gave the editing experience a little more focus, and gave us important space to grow the feature down the track as and when we needed.

{% include modules/image-layouts.html url="/assets/blog/style-editor-b.png" type="wide" style="border" description="Style editor overlay" %}

## Upgrading the style browser

A great (although not unexpected) side effect of being able to quickly create more expressive styles, was a need to improve how we preview those styles, so you can quickly find the one you’re looking for. The previous design had a small thumbnail about half the size of a stamp, which used little blocks to represent the colours and alignment of the heading, subheading and body text. The problem with our design ideas, was we were introducing new sizes for all the text, which made using this mini preview harder to distinguish between similar styles. Here’s an example to highlight the difficulty:

{% include modules/image-layouts.html url="/assets/blog/style-tiles.png" type="wide" style="border" description="Although similar outcome, differentiating between styles at a glance is difficult" %}

After [releasing the new Image Carousel](https://medium.com/@dominosebastian/introducing-our-all-new-image-carousel-e428d5547849), we thought the carousel would also fit well to browse your styles. Initially we were using mini previews of the block, using demo text shrunken down so you could see how the style might be applied.

{% include modules/image-layouts.html url="/assets/blog/carousel.png" type="wide" style="border" description="Earlier design iteration of the carousel with text" %}

While this was quite an effective preview, it actually looked really messy and overwhelming when it was open. It felt like a slow, burdened choice, and wasn’t particularly fun to use — it was ignoring our guiding principle of being empowering and fast to use.

In the end, we settled on re-using the block visualisation, just at a bigger scale to see the differences, with their style names. While it feels visually simpler, and in theory should work well for our varied (and growing) block types, we still think we can do better. Creating a visual shorthand for blocks is challenging, especially when you don’t want to overwhelm with details and choice.

{% include modules/image-layouts.html url="/assets/blog/carousel-b.png" type="wide" style="border" description="Latest working iteration of the carousel with blocks" %}

## Lessons learned

The style editor is in a much better place than when we started this project, but along the way while grouping some of the actions, it’s lost a little of the directness users need. The part that’s really missing for it to be it’s Undeniable Best, is this should feel like a superior and faster editing experience, regardless of what users are familiar with. At the moment, it’s not there yet, and releasing this now would be a disservice to those that need it in their workflow.

While the style carousel feels visually simpler, it’s also still not quite where we want it to be, and has the added complication of needing these previews for all our new (and growing) block types. Once you’ve created your styles, this is the part you interact with the most frequently, so we’re still working on this being a really smooth, enjoyable experience. Something we’ll be putting into the back of our brains over the next few months to chew over, and come back to the problem with fresh eyes and minds.

To bring us back to the point that started all this reflection, I want to share another snippet from our Principles:

> Undeniable Bestness means being hard on ourselves and have strong personal benchmarks of quality. It means accommodating to a permanent state of dissatisfaction. This dissatisfaction is a good thing. It keeps us productive. It keeps us pushing ourselves forward. Whenever we reach a summit, we’re already looking to the next one.

I read a great book recently which had an apt analogy about what makes a great artist. They need to be able to hone in and focus on the details of each brush stroke, whilst being able to step back and see how each stroke fits into the larger composition. Internally at Qwilr, the process of designing this feature to meet our principles has helped our ability to take that step back to see the larger view. It’s highlighted areas of our process we’re actively improving, such as prototyping our ideas more thoroughly early in the process, and unpacking the problem with a more user-centred mindset. It’s also helped us design a more meaningful approach to large features like this, so we can turn around and deliver the best solutions to you all, in a way we’re proud to say has achieved it’s true, Undeniable Best.

## A very special thanks to our users

Something I won’t ever get tired of saying is how great our users are. Personally, I want to say a huge, huge thank you to everyone that has helped and continues to help us beta test not just custom styles but all our features. Taking the time and risk of using something new on your live projects, whilst being open and transparent about what’s not working and what could be improved is exactly what guides us in delivering the best solutions we can. Thank you.
