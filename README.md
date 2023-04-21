
# Frontend Mentor - Loopstudios landing page solution

This is a solution to the [Loopstudios landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

- Webview
![Webview](/Screenshots/Webview%20capture_20-4-2023_23275_127.0.0.1.jpeg)

- Mobile view (375px)
![Mobile view](/Screenshots/Mobileview(375px)%20capture_20-4-2023_232958_127.0.0.1.jpeg)

- Mobile menu view (375px)
![Mobile menu view](/Screenshots/Mobile%20menu%20view(375px)%20capture_20-4-2023_233310_127.0.0.1.jpeg) 

### Links

- Solution URL: [Solution](https://github.com/veenzent/Loopstudios-Landing-Page)
- Live Site URL: [Live site](https://loopstudios-veenzent.netlify.app/#)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow

### What I learned

I learned how to build a menu popup using CSS :target pseudo class property. It was had understanding how it works at first but with countless trials and fails I got it right. 

The idea behind this in code:

```html
<!-- HTML -->

<!-- Wrap your menu in a container: nav in my case -->
<nav class="menu-background" id="popup">
  <ul class="menu-items">
    <li><a href="#">About</a></li>
    <li><a href="#">Careers</a></li>
    <li><a href="#">Events</a></li>
  </ul>
  <a href="#" class="close">
    <img src="/close.svg"/>
  </a>
</nav>
<a href="#popup" class="hamburger">
  <img src="/hamburger.svg"/>
</a>
```
```css
/* CSS */
/* use display positioning property to fix the menu and close icons to top right then continue below; */
.menu-background {
  background-color: black;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 100%;
  top: 0;
  transition: all ease .5s;
}

/* on-click of menu icon(hamburger class), it calls in the menu */
#popup:target {
  left: 0;
}
```
I also learned that on-click of an empty link (href="#") :point_down: :point_down:,
```html
<a href="#">Empty Link</a>
```
it takes the webpage back to the top.

### Continued development

I'm not really comfortable with CSS positioning yet and I also need to look into link effects (hover, active, and others I didn't use in this project) more. Ah!! I won't forget the trials  and fails of CSS :target pseudo class, I definitely need to perfect it or I hope to perfect it rather because I'm already on JavaScript journey.

### Useful resources

- [Pure css popup box](https://codepen.io/imprakash/pen/GgNMXO) - This is where I got the css popup concept from, really helpful :thumbs_up:

## Author

- Frontend Mentor - [@veenzent](https://www.frontendmentor.io/profile/veenzent)
- Twitter - [@Veen_zent](https://www.twitter.com/Veen_zent)

## Acknowledgments

Big thanks to Ikechukwu Nwachukwu - [AltSchool Africa](altschoolafrica.com) graduate and currently a mentor to circle-71 of AltSchool S.O.E Cohort 2.

Big thanks also to [Onyeka101](https://github.com/Onyeka101) - circle mate at [AltSchool Africa](altschoolafrica.com).
