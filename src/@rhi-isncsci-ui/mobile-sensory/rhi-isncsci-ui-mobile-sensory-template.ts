/**
 * @license
 * Copyright (c) 2018 Rick Hansen Institute. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

import "@material/mwc-switch";
import { html } from '@rhi-ui/html';

export const template: string =
    html`
    <!-- shadow DOM for your element -->
    <style>
        :host {
            --mdc-theme-secondary: var(--isncsci-secondayr-color, #999);
            -webkit-font-smoothing: var(--isncsci-font-common-base-webkit-font-smoothing, antialiased);
            display: block;
            font-family: var(--isncsci-font-common-base-font-family, 'Roboto', 'Noto', 'Open Sans', sans-serif);
            min-height: 300px;
            position: relative;
        }

        :host([input-type="motor"]) .content .dermatomes .dermatome,
        :host([input-type="motor-top"]) .content .dermatomes .dermatome,
        :host([input-type="motor-bottom"]) .content .dermatomes .dermatome {
            display: none;
        }

        :host([input-type="motor"]) .content .dermatomes .dermatome.motor {
            display: block;
        }

        :host([input-type="motor-bottom"]) .content .dermatomes .dermatome.motor.bottom {
            display: block;
        }

        :host([input-type="motor-top"]) .content .dermatomes .dermatome.motor.top {
            display: block;
        }

        /*
            * The :host notation with CSS variables did not work on MS Edge.
            * The code below has been added so that the component works on Edge just as on FireFox, Safari, and Chrome,
            */

        [input-type="motor"] .content .dermatomes .dermatome,
        [input-type="motor-top"] .content .dermatomes .dermatome,
        [input-type="motor-bottom"] .content .dermatomes .dermatome {
            display: none;
        }

        [input-type="motor"] .content .dermatomes .dermatome.motor {
            display: block;
        }

        [input-type="motor-bottom"] .content .dermatomes .dermatome.motor.bottom {
            display: block;
        }

        [input-type="motor-top"] .content .dermatomes .dermatome.motor.top {
            display: block;
        }

        .totals-bar {
            align-items: center;
            background-color: var(--isncsci-primary-color, #FAFAFA);
            box-shadow: 0 1px 5px rgba(0, 0, 0, .3);
            display: flex;
            height: 48px;
            padding: 0 16px;
            position: relative;
            z-index: 2;
        }

        .totals-bar .label {
            color: var(--isncsci-on-primary-color, #666);
            font-size: var(--isncsci-primary-text-font-size, 16px);
            font-weight: var(--isncsci-primary-text-font-weight, 400);
            line-height: 18px;
            margin-right: 8px;
        }

        .totals-bar .label.right {
            margin-left: 8px;
            margin-right: 0;
        }

        .totals-bar .value {
            color: var(--isncsci-primary-text-color, #000);
            font-size: var(--isncsci-primary-text-font-size, 16px);
            font-weight: var(--isncsci-primary-text-font-weight, 400);
            line-height: 18px;
            margin-right: 16px;
        }

        .content {
            bottom: 0;
            display: flex;
            flex-direction: row;
            left: 0;
            position: absolute;
            right: 0;
            top: 48px;
        }

        .content .dermatomes {
            background-color: var(--isncsci-secondary-color, #999);
            flex-grow: 1;
            overflow: hidden;
            overflow-y: auto;
        }

        .content .dermatomes .dermatome {
            color: var(--isncsci-on-secondary-color, #333);
            line-height: 48px;
            padding-left: 56px;
        }

        .content .dermatomes .dermatome.selected {
            background-color: rgba(51, 51, 51, .2);
        }

        .content .dermatome-details {
            background-color: #FFF;
            box-shadow: 0 0 10px rgba(0, 0, 0, .5);
            /*padding: 16px;*/
            width: 216px;
            z-index: 1;
        }

        .content .dermatome-details .cell-select {
            /*background-color: var(--isncsci-interactive-cell-color, #DCDCDC);*/
            border: none;
            font-family: 'Roboto', 'Noto', sans-serif;
            font-size: 16px;
            height: 40px;
        }

        .content .dermatome-details .section {
            margin: 16px 16px 24px 16px;
        }
        
        .content .dermatome-details .label {
            color: var(--isncsci-on-primary-color, #666);
            font-size: var(--isncsci-primary-text-font-size, 16px);
            font-weight: var(--isncsci-primary-text-font-weight, 400);
            line-height: 18px;
        }
        
        .content .dermatome-details textarea {
            border: none;
            background-color: transparent;
            color: var(--isncsci-primary-text-color, #000);
            font-family: 'Roboto', 'Noto', sans-serif;
            font-size: 14px;
            height: 120px;
            outline: none;
            overflow: auto;
            padding: 0;
            resize: none;
            width: 100%;
        }

        .content .dermatome-details .section .row {
            margin: 8px 0 16px 0;
        }

        .content .dermatome-details .section .row.comments {
            border-bottom: solid 2px #CCC;
        }

        .content .dermatome-details .section .row.value {
            display: flex;
        }

        .content .dermatome-details .section .row.value .label {
            align-items: center;
            display: flex;
            margin-right: 8px;
        }

        .content .dermatome-details .section select {
            max-width: 100%;
        }

        .content .dermatome-details textarea[bind-to='non-sci-impairment-comments'] {
            margin: 8px 0;
        }
    </style>
    <div class="totals-bar">
        <div class="label" bind-to="total-label"></div>
        <div class="value" bind-to="total"></div>
        <div class="label" bind-to="nl-label"></div>
        <div class="value" bind-to="nl"></div>
        <div>
            <mwc-switch>sentiment_very_satisfied</mwc-switch>
        </div>
        <div class="label right" bind-to="propagate-value-label"></div>
    </div>
    <div class="content">
        <div class="dermatomes" bind-to="dermatomes">
            <div class="dermatome">C2</div>
            <div class="dermatome">C3</div>
            <div class="dermatome">C4</div>
            <div class="dermatome motor top">C5</div>
            <div class="dermatome motor top">C6</div>
            <div class="dermatome motor top">C7</div>
            <div class="dermatome motor top">C8</div>
            <div class="dermatome motor top">T1</div>
            <div class="dermatome">T2</div>
            <div class="dermatome">T3</div>
            <div class="dermatome">T4</div>
            <div class="dermatome">T5</div>
            <div class="dermatome">T6</div>
            <div class="dermatome">T7</div>
            <div class="dermatome">T8</div>
            <div class="dermatome">T9</div>
            <div class="dermatome">T10</div>
            <div class="dermatome">T11</div>
            <div class="dermatome">T12</div>
            <div class="dermatome">L1</div>
            <div class="dermatome motor bottom">L2</div>
            <div class="dermatome motor bottom">L3</div>
            <div class="dermatome motor bottom">L4</div>
            <div class="dermatome motor bottom">L5</div>
            <div class="dermatome motor bottom">S1</div>
            <div class="dermatome">S2</div>
            <div class="dermatome">S3</div>
            <div class="dermatome">S4-5</div>
        </div>
        <div class="dermatome-details">
            <div class="section">
                <div class="label">Use the ! and * symbols to indicate impairment not due to SCI.</div>
                <div class="row value">
                    <div class="label"><span bind-to="dermatome"></span>:</div>
                    <div>
                        <select class="cell-select" bind-to="dermatome-score">
                            <option></option>
                            <option>0</option>
                            <option>0!</option>
                            <option>1</option>
                            <option>1!</option>
                            <option>2</option>
                            <option>2!</option>
                            <option>3</option>
                            <option>3!</option>
                            <option>4</option>
                            <option>4!</option>
                            <option>5</option>
                            <option>5*</option>
                            <option>NT</option>
                            <option>NT!</option>
                            <option>NT*</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="section">
                <div class="label">If sensory impairment not due to SCI, please indicate the reason:</div>
                <div class="row">
                    <select class="cell-select" bind-to="non-sci-impairment-reason">
                        <option value="">Select one</option>
                        <option value="1">Plexopathy</option>
                        <option value="2">Peripheral neuropathy</option>
                        <option value="3">Pre-existing myoneural disease (e.g. Stroke, MS, etc.)</option>
                        <!-- 5* Motor -->
                        <!-- If motor impairment due to inhibiting factors, please indicate reason: -->
                        <option value="4">Pain</option>
                        <option value="5">Disuse atrophy</option>
                        <option value="6">Other (specify:)</option>
                    </select>
                </div>
                <div class="row comments">
                    <div class="label">Specify:</div>
                    <textarea bind-to="non-sci-impairment-comments"></textarea>
                </div>
            </div>
        </div>
    </div>
`;