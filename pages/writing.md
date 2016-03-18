---
layout: page
title: Writing
permalink: /writing/
---

I mainly writ e about design, film, and observations in between. 

<div class="home">
	<div class="listings">
	     <h1 class="page-heading">Writing</h1>
	     <ul class="post-list">
	       {% for post in site.posts reversed %}
	         <li>
	           <span class="post-meta">{{ post.date | date_to_long_string }}</span>

	           <h2>
	             <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
	           </h2>
	         </li>
	       {% endfor %}
	     </ul>
	</div>

</div>
