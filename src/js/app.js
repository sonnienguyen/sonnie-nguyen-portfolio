/*!
 * Sonnie Nguyen's Portfolio Website
 * Copyright 2017-2018 Sonnie Nguyen <info@sonnienguyen.com> | @sonnienguyen
 * Licensed under MIT (https://github.com/sonnienguyen/sonnienguyen.github.io/blob/master/LICENSE)
 */

import Prism from 'prismjs';
import fixedResponsiveNav from './vendor/fixedResponsiveNav';
import { humanizeDate } from './components/helpers';

Prism.highlightAll();
const displayFixedResponsiveNav = fixedResponsiveNav();
const postDate = humanizeDate();
