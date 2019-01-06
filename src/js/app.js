/*!
 * Sonnie Nguyen's Portfolio Website
 * Copyright 2017-2019 Sonnie Nguyen <info@sonnienguyen.com> | @sonnienguyen
 * Licensed under MIT (https://github.com/sonnienguyen/sonnienguyen.github.io/blob/master/LICENSE)
 */

import Prism from 'prismjs';
import fixedResponsiveNav from './vendor/fixedResponsiveNav';
import { showDates } from './components/helpers';

Prism.highlightAll();
// eslint-disable-next-line no-unused-vars
const displayFixedResponsiveNav = fixedResponsiveNav();
showDates([...document.querySelectorAll('.js-posted-on')], '.js-posted-on');
