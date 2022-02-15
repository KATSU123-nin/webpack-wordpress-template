import sub1 from './js_modules/sub1';

import { dropdown, carousel } from "bootstrap";
// JavaScript module file used in Bootstrap
// alert | base-component | button | carousel | collapse | dropdown | modal | offcanval | popover | scrollspy | tab | tast | tooltip
import '../assets/styles/main.scss';

console.log('コチラは index.js の内容を表示しています。');

const testMessage = () => {
    console.log('Check if ES6 was compiled to ES5.');
}

testMessage();
sub1();
