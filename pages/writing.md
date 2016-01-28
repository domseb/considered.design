---
layout: page
title: Writing
permalink: /writing/
---

My name is Dominic, and I’m a designer obsessed with how my creative process can lead to more considered outcomes.

I’m currently working in Sydney for Smart Sparrow, leading design on our product and across marketing, whilst building a design culture within the company. Before Smart Sparrow, I was working in Rio de Janeiro on a UX strategy for a local publishers,and before that I was Head of Design for Augmented Reality specialists Digicave, London.

Outside of Smart Sparrow, film and cinematography are my main passions, and are something I’d love to get more involved with this year. If you have a interesting project in mind and want to collaborate, [email me](mailto:dominic@considered.design) or follow me on [Twitter](https://twitter.com/dominosebastian).

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