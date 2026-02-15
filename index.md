---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
title: Home
description: A curated directory of Malaysian-made software, tools, and platforms. Discover projects from various categories like social, finance, education, and more.
head:
  - - meta
    - property: og:title
      content: Lokalist by Soluna | Malaysian Projects Collection
  - - meta
    - property: og:description
      content: A curated directory of Malaysian-made software, tools, and platforms. Discover projects from various categories like social, finance, education, and more.
  - - meta
    - name: twitter:title
      content: Home | Lokalist
  - - meta
    - name: twitter:description
      content: A curated directory of Malaysian-made software, tools, and platforms. Discover projects from various categories like social, finance, education, and more.

hero:
  name: '<img src="/lokalist-logo.webp" alt="Lokalist Logo" class="hero-name-logo"> Lokalist'
  text: "A Malaysian Local Projects Collection"
  tagline: 'Built by <img src="/soluna-logo.webp" alt="Soluna Logo" class="tagline-logo"> Soluna'
  actions:
    - theme: brand
      text: Get Started
      link: /introduction
    - theme: alt
      text: FAQ
      link: /faq

features:
  - icon: |
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <defs><linearGradient id="social-gradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#8A2BE2;stop-opacity:1" /><stop offset="100%" style="stop-color:#4169E1;stop-opacity:1" /></linearGradient></defs>
        <path stroke="url(#social-gradient)" d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle stroke="url(#social-gradient)" cx="9" cy="7" r="4"></circle>
        <path stroke="url(#social-gradient)" d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path stroke="url(#social-gradient)" d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    title: Social
    link: /wiki/social
    details: Discover Malaysian-made social networks, messaging apps, and community platforms designed to connect people.
  - icon: |
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <defs><linearGradient id="finance-gradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#32CD32;stop-opacity:1" /><stop offset="100%" style="stop-color:#228B22;stop-opacity:1" /></linearGradient></defs>
        <rect stroke="url(#finance-gradient)" x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path stroke="url(#finance-gradient)" d="M7 11V7a5 5 0 0 1 10 0v4"></path>
      </svg>
    title: Finance
    link: /wiki/finance
    details: Explore local fintech innovations, from payment solutions and digital wallets to personal finance and investment platforms.
  - icon: |
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <defs><linearGradient id="education-gradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#FFD700;stop-opacity:1" /><stop offset="100%" style="stop-color:#FFA500;stop-opacity:1" /></linearGradient></defs>
        <path stroke="url(#education-gradient)" d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
        <path stroke="url(#education-gradient)" d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
      </svg>
    title: Education
    link: /wiki/education
    details: Discover Malaysian projects focused on learning, skill development, and educational resources.
  - icon: |
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <defs><linearGradient id="lifestyle-gradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#FF69B4;stop-opacity:1" /><stop offset="100%" style="stop-color:#FF8C00;stop-opacity:1" /></linearGradient></defs>
        <path stroke="url(#lifestyle-gradient)" d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
        <line stroke="url(#lifestyle-gradient)" x1="3" y1="6" x2="21" y2="6"></line>
        <path stroke="url(#lifestyle-gradient)" d="M16 10a4 4 0 0 1-8 0"></path>
      </svg>
    title: Lifestyle
    link: /wiki/lifestyle
    details: Find apps and services that enhance daily life, including e-commerce, food delivery, travel, and wellness platforms from local creators.
  - icon: |
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <defs><linearGradient id="games-gradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#8A2BE2;stop-opacity:1" /><stop offset="100%" style="stop-color:#4169E1;stop-opacity:1" /></linearGradient></defs>
        <path stroke="url(#games-gradient)" d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
        <line stroke="url(#games-gradient)" x1="3" y1="6" x2="21" y2="6"></line>
        <path stroke="url(#games-gradient)" d="M16 10a4 4 0 0 1-8 0"></path>
      </svg>
    title: Games
    link: /wiki/games
    details: Discover Malaysian-made games and gaming platforms.
  - icon: |
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <defs><linearGradient id="tools-gradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#32CD32;stop-opacity:1" /><stop offset="100%" style="stop-color:#228B22;stop-opacity:1" /></linearGradient></defs>
        <path stroke="url(#tools-gradient)" d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
      </svg>
    title: Tools
    link: /wiki/tools
    details: Explore a variety of tools and utilities created by Malaysian developers to boost productivity and streamline tasks.
---

