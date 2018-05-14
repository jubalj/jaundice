/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from '@polymer/lit-element';
import { SharedStyles } from './shared-styles.js';
import { PageViewElement } from './page-view-element.js';

class MyView37 extends PageViewElement {
  _render(props) {
    return html`
      ${SharedStyles}
      <section>
        <h2>37 week Jaundice Threshold</h2>
        <p>
        <picture>  
            <source media="(min-width: 500px)"
            srcset="images/jaundice/37.png" />
        <img src="/images/jaundice/37_medium.png">
  </picture>  
      </p>
      </section>
    `;
  }
}

window.customElements.define('my-view37', MyView37);
