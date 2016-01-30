---
layout: page
tag: boobs
title: Work
permalink: /work/
---

Moving away from a traditional portfolio, below are process write ups on some of the most interesting projects I've worked on in the last few years – covering UX, product design, art direciton, and building a brand.

<div class="home">
  <div class="listings">
       <h1 class="page-heading">featured projects</h1>
       <ul class="post-list">
         {% for post in site.posts %}
         {% for tag in post.tags %}
         {% if tag == 'work' %}
           <li>
             <span class="post-meta">{{ post.date | date_to_long_string }}</span>
   
             <h2>
               <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
             </h2>
           </li>
         {% endif %}
         {% endfor %}
         {% endfor %}
       </ul>
  </div>

</div>