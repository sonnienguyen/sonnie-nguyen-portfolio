/*!
 * Sonnie Nguyen's Portfolio Website
 * Copyright 2017-2018 Sonnie Nguyen <info@sonnienguyen.com> | @sonnienguyen
 * Licensed under MIT (https://github.com/sonnienguyen/sonnienguyen.github.io/blob/master/LICENSE)
 */

import Prism from 'prismjs';
import fixedResponsiveNav from './vendor/fixedResponsiveNav';
import { humanizeDate } from './components/helpers';

Prism.highlightAll();
// eslint-disable-next-line no-unused-vars
const displayFixedResponsiveNav = fixedResponsiveNav();
// eslint-disable-next-line no-unused-vars
const postDate = humanizeDate();
