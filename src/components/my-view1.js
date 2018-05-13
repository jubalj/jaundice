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

class MyView1 extends PageViewElement {
  _render(props) {
    return html`
      ${SharedStyles}
      <section>
        <h2>Term jaundice threshold</h2>
        <p><img height="500" width="400" src="/images/jaundice/38.png"></p>
      </section>
      <section>
        <h2>Welcome</h2>
        <p>This is a quick resource to view the bilirubin treatment thresholds based of the <a href="https://www.nice.org.uk/guidance/cg98/evidence/full-guideline-pdf-245411821#page=37">NICE jaundice guidelines</a>.</p>
        <p>y axis is the serum bilirubin measurement. x axis is the time (in days) since birth.</p>
        <p>Phototherapy is recommended above for bilirubin levels above the blue line and the red line is the exchange therapy threshold.</P>


      </section>
    
    `;
  }
}

window.customElements.define('my-view1', MyView1);
