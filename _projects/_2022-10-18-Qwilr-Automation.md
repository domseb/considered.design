---
layout: project
refID: secondary
chapter: qwilr
tags: execution futures
company: qwilr

year: 2022
title: Droid
lede: Enabling smart, intuitive automation at scale
path: /automation

description: Personalising a page to a prospect takes time, and compounds as sales teams get larger. Templates in Qwilr were a faster way to personalise pages, pulling in real data from their CRM. The feature initially was impossible to discover though, and when customers did it was brittle and extremely limited. This transformation project fixed that original automation workflow, extended it, and fleshed out a longer term vision for where we needed to go.

image: /assets/projects/automation/hero-automation.jpg
---

<section class="tiles center">
    <div>
        <h2>Templating simple token content</h2>
        <div class="collaborators">
            <div class="collaborator">
                <img src="/assets/site/avatar-test.jpg">
                <div class="info">
                    <h6>Josh Baskin</h6>
                    <p>Lead ideation of new toys, managing R&D of all new iniatives.</p>
                    <button class="link-button {{ page.theme }}" onclick="location.href='linkedin.com'">View profile</button>
                </div>
            </div>
            <div class="collaborator">
                <img src="/assets/site/avatar-test.jpg">
                <div class="info">
                    <h6>Josh Baskin</h6>
                    <p>Lead ideation of new toys, managing R&D of all new iniatives.</p>
                    <button class="link-button {{ page.theme }}" onclick="location.href='linkedin.com'">View profile</button>
                </div>
            </div>
            <div class="collaborator">
                <img src="/assets/site/avatar-test.jpg">
                <div class="info">
                    <h6>Josh Baskin</h6>
                    <p>Lead ideation of new toys, managing R&D of all new iniatives.</p>
                    <button class="link-button {{ page.theme }}" onclick="location.href='linkedin.com'">View profile</button>
                </div>
            </div>
        </div>
    </div>
    <div>
        <p>To personalise a page with data from their CRM, customers needed to add “tokens” to their templates. Typed with curly brackets (like {{first.name}}), these tokens were impossible to discover and understand as functionality, often unclear what the original CRM references were, and even if they did, prone to typos. I needed to redesign how tokens worked, support creating from more data sources, so customers never had to leave their CRM.</p>
    </div>
</section>

<section class="pair">
    <div class="smaller">
      <h3>Designing a new visual language of “tokens”</h3>
      <p>
        Tokens needed to be easy to scan and interact with on a page, but still be formatted and styled like regular text. Going back to first principles, I wanted tokens to be easily discoverable,  intuitive and tangible. To be a clear building block of automation. I designed a clear visual language and interaction patterns for tokens, that extended to other token types on the horizon. 
      </p>
    </div>
    <img class="bigger" src="/assets/projects/automation/tokens.jpg">
</section>

<section class="pair">
    <div class="smaller reversed">
      <h3>Making it easy to use them in pages</h3>
      <p>
        Some CRMs would have thousands of tokens, and some (like Salesforce) could also be nested in unlimited ways, with long and obscure custom names. We needed to make it really easy for customers to connect their CRM, and give them a way to search and navigate their tokens, adding them into their pages with ease. I created new integration flows for CRM and API customers, and a new home for their tokens to be managed. Allowing them to drag and drop tokens into their pages with ease. 
      </p>
    </div>
    <img class="bigger" src="/assets/projects/automation/panel.jpg">
</section>

<section class="pair">
    <div class="smaller">
      <h3>Contextual lookup</h3>
      <p>
        While the panel gave them a way to manage the tokens, and navigate them quickly, we wanted to enable a faster way to add them in the flow of writing content. Leveraging the old curly braces as the keyboard shortcut, I designed a new panel lookup for customers. Letting them see what tokens were available to them in context, and adding them without needing to leave their keyboard. 
      </p>
    </div>
    <img class="bigger" src="/assets/projects/automation/lookup.jpg">
</section>

{% include modules/image-layouts.html url="/assets/projects/automation/banner.jpg" type="screen" %}

<section class="tiles center">
    <div>
        <h2>Looping content sections</h2>
        <div class="collaborators">
            <div class="collaborator">
                <img src="/assets/site/dom-profile.jpg">
                <div class="info">
                    <h6>Josh Baskin</h6>
                    <p>Lead ideation of new toys, managing R&D of all new iniatives.</p>
                    <button class="link-button {{ page.theme }}" onclick="location.href='linkedin.com'">View profile</button>
                </div>
            </div>
            <div class="collaborator">
                <img src="/assets/site/dom-profile.jpg">
                <div class="info">
                    <h6>Josh Baskin</h6>
                    <p>Lead ideation of new toys, managing R&D of all new iniatives.</p>
                    <button class="link-button {{ page.theme }}" onclick="location.href='linkedin.com'">View profile</button>
                </div>
            </div>
            <div class="collaborator">
                <img src="/assets/site/dom-profile.jpg">
                <div class="info">
                    <h6>Josh Baskin</h6>
                    <p>Lead ideation of new toys, managing R&D of all new iniatives.</p>
                    <button class="link-button {{ page.theme }}" onclick="location.href='linkedin.com'">View profile</button>
                </div>
            </div>
        </div>
    </div>
    <div>
        <p>Customers wanted ways to personalise the content and offer itself to their buyers. Services, rollout details, pricing, all sections they had populated for the buyer in their CRM, but could only add manually into Qwilr. I designed new patterns for how this worked in the product, how it could be automated, forging new patterns to work in the most interactively dense parts of the product.</p>
    </div>
</section>

<section class="pair">
    <div class="smaller">
      <h3>Looping widget</h3>
      <p>
        The simplest form of this automation was content that was formatted exactly the same, repeated for as many entries as there were in the CRM. Unlike simple text tokens, this could take up a large area of the editor, putting strain on the WYSIWYG nature of Qwilr. After lot’s of iteration, and finding ways to make it feel native to the editor but clear it was a different content type — the outcome was the Content Loop. A new component that unlocked a new automation power for templates.
      </p>
    </div>
    <img class="bigger" src="/assets/projects/automation/looping.jpg">
</section>

<section class="pair">
    <div class="smaller reversed">
      <h3>Dynamic tables</h3>
      <p>
        Tables were used extensively to communicate inventory, timelines, staffing, phases and more — a lot of information that is already populated in customer’s CRMs, and they wanted a way to remove editing all that information manually. We had to grapple with very tight interaction areas, and retrofitting it into an already overloaded component, but eventually settled on a design that felt intuitive, while communicating how it worked in very small real estate.
      </p>
    </div>
    <img class="bigger" src="/assets/projects/automation/tables.jpg">
</section>

<section class="pair">
    <div class="smaller">
      <h3>Dynamic quotes</h3>
      <p>
        Quotes presented our first challenge and opportunity to bring conditions into template automation. While the Content Loop and Table Loop work would add any content associated in the CRM, Quotes were presenting different options to buyer. Customers needed to be able to select what was shown in those options, so they could empower the buyer to select what package best suited them. Also in a very tight interaction areas, and retrofitting it into an already very complex component, I designed a way to leverage simple conditions, in a pattern that could scale as more logic was available in the future. 
      </p>
    </div>
    <img class="bigger" src="/assets/projects/automation/quote.jpg">
</section>

{% include modules/image-layouts.html url="/assets/projects/automation/droid.jpg" type="screen" %}
