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

import { html } from '@polymer/lit-element/lit-element.js';
import { TemplateResult } from 'lit-html/lit-html.js';
import {
    motorLevelNameRegExp,
    validMotorNameRegExp,
    validMotorValueRegExp,
    validSensoryNameRegExp,
    validSensoryValueRegExp
} from 'rhi-core-isncsci-algorithm/usecases/src/regularExpressions.js';
import { RhiUiSelectableGrid } from '@rhi-ui/selectable-grid/rhi-ui-selectable-grid.js';
import { connect } from './helpers/connect-mixin.js';
import { store } from './store/store.js';

export class RhiUiIsncsciWideLeftGrid extends connect(store)(RhiUiSelectableGrid) {
    public static get is(): string { return 'rhi-ui-isncsci-wide-left-grid'; }

    public _render(props: any): TemplateResult {
        return html`
            <!-- shadow DOM for your element -->
            <style>
                :host {
                    display: block;

                    -webkit-user-select: none;
                    -khtml-user-select: none;
                    -moz-user-select: none;
                    -o-user-select: none;
                    user-select: none;
                }

                .row {
                    display: flex;
                    width: 100%;
                }

                .row .label {
                    flex-grow: 1;
                    font-size: 12px;
                    line-height: 32px;
                    margin-right: 4px;
                    text-align: right;
                }

                .row .label i {
                    color: #333;
                }
            </style>
            <div class="row">
                <div class="label">C2</div>
                <rhi-ui-isncsci-grid-cell name="c2RightTouch" value$="${props.c2RightTouch}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell name="c2RightPrick" value$="${props.c2RightPrick}"></rhi-ui-isncsci-grid-cell>
            </div>
            <div class="row">
                <div class="label">C3</div>
                <rhi-ui-isncsci-grid-cell name="c3RightTouch" value$="${props.c3RightTouch}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell name="c3RightPrick" value$="${props.c3RightPrick}"></rhi-ui-isncsci-grid-cell>
            </div>
            <div class="row">
                <div class="label">C4</div>
                <rhi-ui-isncsci-grid-cell name="c4RightTouch" value$="${props.c4RightTouch}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell name="c4RightPrick" value$="${props.c4RightPrick}"></rhi-ui-isncsci-grid-cell>
            </div>
            <div class="row">
                <div class="label motor"><i>Elbow flexors&nbsp;&nbsp;</i>C5</div>
                <rhi-ui-isncsci-grid-cell name="c5RightMotor" value$="${props.c5RightMotor}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell name="c5RightTouch" value$="${props.c5RightTouch}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell name="c5RightPrick" value$="${props.c5RightPrick}"></rhi-ui-isncsci-grid-cell>
            </div>
            <div class="row">
                <div class="label motor"><i>Wrist extensors&nbsp;&nbsp;</i>C6</div>
                <rhi-ui-isncsci-grid-cell name="c6RightMotor" value$="${props.c6RightMotor}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell name="c6RightTouch" value$="${props.c6RightTouch}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell name="c6RightPrick" value$="${props.c6RightPrick}"></rhi-ui-isncsci-grid-cell>
            </div>
            <div class="row">
                <div class="label motor"><i>Elbow extensors&nbsp;&nbsp;</i>C7</div>
                <rhi-ui-isncsci-grid-cell name="c7RightMotor" value$="${props.c7RightMotor}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell name="c7RightTouch" value$="${props.c7RightTouch}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell name="c7RightPrick" value$="${props.c7RightPrick}"></rhi-ui-isncsci-grid-cell>
            </div>
            <div class="row">
                <div class="label motor"><i>Finger flexors&nbsp;&nbsp;</i>C8</div>
                <rhi-ui-isncsci-grid-cell name="c8RightMotor" value$="${props.c8RightMotor}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell name="c8RightTouch" value$="${props.c8RightTouch}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell name="c8RightPrick" value$="${props.c8RightPrick}"></rhi-ui-isncsci-grid-cell>
            </div>
            <div class="row">
                <div class="label motor"><i>Finger abductors (little finger)&nbsp;&nbsp;</i>T1</div>
                <rhi-ui-isncsci-grid-cell name="t1RightMotor" value$="${props.t1RightMotor}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell name="t1RightTouch" value$="${props.t1RightTouch}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell name="t1RightPrick" value$="${props.t1RightPrick}"></rhi-ui-isncsci-grid-cell>
            </div>
            <div class="row">
                <div class="label">T2</div>
                <rhi-ui-isncsci-grid-cell name="t2RightTouch" value$="${props.t2RightTouch}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell name="t2RightPrick" value$="${props.t2RightPrick}"></rhi-ui-isncsci-grid-cell>
            </div>
            <div class="row">
                <div class="label">T3</div>
                <rhi-ui-isncsci-grid-cell name="t3RightTouch" value$="${props.t3RightTouch}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell name="t3RightPrick" value$="${props.t3RightPrick}"></rhi-ui-isncsci-grid-cell>
            </div>
            <div class="row">
                <div class="label">T4</div>
                <rhi-ui-isncsci-grid-cell name="t4RightTouch" value$="${props.t4RightTouch}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell name="t4RightPrick" value$="${props.t4RightPrick}"></rhi-ui-isncsci-grid-cell>
            </div>
            <div class="row">
                <div class="label">T5</div>
                <rhi-ui-isncsci-grid-cell name="t5RightTouch" value$="${props.t5RightTouch}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell name="t5RightPrick" value$="${props.t5RightPrick}"></rhi-ui-isncsci-grid-cell>
            </div>
            <div class="row">
                <div class="label">T6</div>
                <rhi-ui-isncsci-grid-cell name="t6RightTouch" value$="${props.t6RightTouch}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell name="t6RightPrick" value$="${props.t6RightPrick}"></rhi-ui-isncsci-grid-cell>
            </div>
            <div class="row">
                <div class="label">T7</div>
                <rhi-ui-isncsci-grid-cell name="t7RightTouch" value$="${props.t7RightTouch}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell name="t7RightPrick" value$="${props.t7RightPrick}"></rhi-ui-isncsci-grid-cell>
            </div>
            <div class="row">
                <div class="label">T8</div>
                <rhi-ui-isncsci-grid-cell name="t8RightTouch" value$="${props.t8RightTouch}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell name="t8RightPrick" value$="${props.t8RightPrick}"></rhi-ui-isncsci-grid-cell>
            </div>
            <div class="row">
                <div class="label">T9</div>
                <rhi-ui-isncsci-grid-cell name="t9RightTouch" value$="${props.t9RightTouch}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell name="t9RightPrick" value$="${props.t9RightPrick}"></rhi-ui-isncsci-grid-cell>
            </div>
            <div class="row">
                <div class="label">T10</div>
                <rhi-ui-isncsci-grid-cell name="t10RightTouch" value$="${props.t10RightTouch}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell name="t10RightPrick" value$="${props.t10RightPrick}"></rhi-ui-isncsci-grid-cell>
            </div>
            <div class="row">
                <div class="label">T11</div>
                <rhi-ui-isncsci-grid-cell name="t11RightTouch" value$="${props.t11RightTouch}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell name="t11RightPrick" value$="${props.t11RightPrick}"></rhi-ui-isncsci-grid-cell>
            </div>
            <div class="row">
                <div class="label">T12</div>
                <rhi-ui-isncsci-grid-cell name="t12RightTouch" value$="${props.t12RightTouch}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell name="t12RightPrick" value$="${props.t12RightPrick}"></rhi-ui-isncsci-grid-cell>
            </div>
            <div class="row">
                <div class="label">L1</div>
                <rhi-ui-isncsci-grid-cell name="l1RightTouch" value$="${props.l1RightTouch}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell name="l1RightPrick" value$="${props.l1RightPrick}"></rhi-ui-isncsci-grid-cell>
            </div>
            <div class="row">
                <div class="label motor"><i>Hip flexors&nbsp;&nbsp;</i>L2</div>
                <rhi-ui-isncsci-grid-cell name="l2RightMotor" value$="${props.l2RightMotor}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell name="l2RightTouch" value$="${props.l2RightTouch}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell name="l2RightPrick" value$="${props.l2RightPrick}"></rhi-ui-isncsci-grid-cell>
            </div>
            <div class="row">
                <div class="label motor"><i>Knee extensors&nbsp;&nbsp;</i>L3</div>
                <rhi-ui-isncsci-grid-cell name="l3RightMotor" value$="${props.l3RightMotor}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell name="l3RightTouch" value$="${props.l3RightTouch}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell name="l3RightPrick" value$="${props.l3RightPrick}"></rhi-ui-isncsci-grid-cell>
            </div>
            <div class="row">
                <div class="label motor"><i>Ankle dorsiflexors&nbsp;&nbsp;</i>L4</div>
                <rhi-ui-isncsci-grid-cell name="l4RightMotor" value$="${props.l4RightMotor}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell name="l4RightTouch" value$="${props.l4RightTouch}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell name="l4RightPrick" value$="${props.l4RightPrick}"></rhi-ui-isncsci-grid-cell>
            </div>
            <div class="row">
                <div class="label motor"><i>Long toe extensors&nbsp;&nbsp;</i>L5</div>
                <rhi-ui-isncsci-grid-cell name="l5RightMotor" value$="${props.l5RightMotor}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell name="l5RightTouch" value$="${props.l5RightTouch}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell name="l5RightPrick" value$="${props.l5RightPrick}"></rhi-ui-isncsci-grid-cell>
            </div>
            <div class="row">
                <div class="label motor"><i>Ankle plantar flexors&nbsp;&nbsp;</i>S1</div>
                <rhi-ui-isncsci-grid-cell name="s1RightMotor" value$="${props.s1RightMotor}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell name="s1RightTouch" value$="${props.s1RightTouch}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell name="s1RightPrick" value$="${props.s1RightPrick}"></rhi-ui-isncsci-grid-cell>
            </div>
            <div class="row">
                <div class="label">S2</div>
                <rhi-ui-isncsci-grid-cell name="s2RightTouch" value$="${props.s2RightTouch}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell name="s2RightPrick" value$="${props.s2RightPrick}"></rhi-ui-isncsci-grid-cell>
            </div>
            <div class="row">
                <div class="label">S3</div>
                <rhi-ui-isncsci-grid-cell name="s3RightTouch" value$="${props.s3RightTouch}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell name="s3RightPrick" value$="${props.s3RightPrick}"></rhi-ui-isncsci-grid-cell>
            </div>
            <div class="row">
                <div class="label">S4_5</div>
                <rhi-ui-isncsci-grid-cell name="s4_5RightTouch" value$="${props.s4_5RightTouch}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell name="s4_5RightPrick" value$="${props.s4_5RightPrick}"></rhi-ui-isncsci-grid-cell>
            </div>
        `;
    }

    public static get properties(): any {
        return {
            c2RightTouch: { type: String, value: '' },
            c2RightPrick: { type: String, value: '' },
            c3RightTouch: { type: String, value: '' },
            c3RightPrick: { type: String, value: '' },
            c4RightTouch: { type: String, value: '' },
            c4RightPrick: { type: String, value: '' },
            c5RightTouch: { type: String, value: '' },
            c5RightPrick: { type: String, value: '' },
            c5RightMotor: { type: String, value: '' },
            c6RightTouch: { type: String, value: '' },
            c6RightPrick: { type: String, value: '' },
            c6RightMotor: { type: String, value: '' },
            c7RightTouch: { type: String, value: '' },
            c7RightPrick: { type: String, value: '' },
            c7RightMotor: { type: String, value: '' },
            c8RightTouch: { type: String, value: '' },
            c8RightPrick: { type: String, value: '' },
            c8RightMotor: { type: String, value: '' },
            t1RightTouch: { type: String, value: '' },
            t1RightPrick: { type: String, value: '' },
            t1RightMotor: { type: String, value: '' },
            t2RightTouch: { type: String, value: '' },
            t2RightPrick: { type: String, value: '' },
            t3RightTouch: { type: String, value: '' },
            t3RightPrick: { type: String, value: '' },
            t4RightTouch: { type: String, value: '' },
            t4RightPrick: { type: String, value: '' },
            t5RightTouch: { type: String, value: '' },
            t5RightPrick: { type: String, value: '' },
            t6RightTouch: { type: String, value: '' },
            t6RightPrick: { type: String, value: '' },
            t7RightTouch: { type: String, value: '' },
            t7RightPrick: { type: String, value: '' },
            t8RightTouch: { type: String, value: '' },
            t8RightPrick: { type: String, value: '' },
            t9RightTouch: { type: String, value: '' },
            t9RightPrick: { type: String, value: '' },
            t10RightTouch: { type: String, value: '' },
            t10RightPrick: { type: String, value: '' },
            t11RightTouch: { type: String, value: '' },
            t11RightPrick: { type: String, value: '' },
            t12RightTouch: { type: String, value: '' },
            t12RightPrick: { type: String, value: '' },
            l1RightTouch: { type: String, value: '' },
            l1RightPrick: { type: String, value: '' },
            l2RightTouch: { type: String, value: '' },
            l2RightPrick: { type: String, value: '' },
            l2RightMotor: { type: String, value: '' },
            l3RightTouch: { type: String, value: '' },
            l3RightPrick: { type: String, value: '' },
            l3RightMotor: { type: String, value: '' },
            l4RightTouch: { type: String, value: '' },
            l4RightPrick: { type: String, value: '' },
            l4RightMotor: { type: String, value: '' },
            l5RightTouch: { type: String, value: '' },
            l5RightPrick: { type: String, value: '' },
            l5RightMotor: { type: String, value: '' },
            s1RightTouch: { type: String, value: '' },
            s1RightPrick: { type: String, value: '' },
            s1RightMotor: { type: String, value: '' },
            s2RightTouch: { type: String, value: '' },
            s2RightPrick: { type: String, value: '' },
            s3RightTouch: { type: String, value: '' },
            s3RightPrick: { type: String, value: '' },
            s4_5RightTouch: { type: String, value: '' },
            s4_5RightPrick: { type: String, value: '' }
        };
    }

    public constructor() {
        super();
    }

    public ready(): void {
        super.ready();
        
        this['previewSelectedValueOnRange'] = true;
    }

    public stateChanged(state: any): void {
        const keyMap: { prefix: string, start: number, end: number }[] = [
            { prefix: 'c', start: 2, end: 8},
            { prefix: 't', start: 1, end: 12},
            { prefix: 'l', start: 1, end: 5},
            { prefix: 's', start: 1, end: 3},
            { prefix: 's4_', start: 5, end: 5}
        ];

        keyMap.forEach(
            (key: { prefix: string, start: number, end: number }) => {
                for (let i:number = key.start; i<=key.end; i++) {
                    const levelName: string = `${key.prefix}${i}`;
                    this[levelName + 'RightTouch'] = state.neurologyForm[levelName + 'RightTouch'];
                    this[levelName + 'RightPrick'] = state.neurologyForm[levelName + 'RightPrick'];
                    this[levelName + 'LeftTouch'] = state.neurologyForm[levelName + 'LeftTouch'];
                    this[levelName + 'LeftPrick'] = state.neurologyForm[levelName + 'LeftPrick'];

                    if (motorLevelNameRegExp.test(levelName)) {
                        this[levelName + 'RightMotor'] = state.neurologyForm[levelName + 'RightMotor'];
                        this[levelName + 'LeftMotor'] = state.neurologyForm[levelName + 'LeftMotor'];
                    }
                }
            }
        );

        if (this.cells) {
            this.selectCell(state.uiState.dermatomeSelected);
        }
    }

    private isValidForRange(cell: HTMLElement): boolean {
        if (!this.selectedCell) {
            return false;
        }

        const name: string = cell.getAttribute('name');
        const cellValue: string = this.selectedCell.getAttribute('value');

        if (validMotorNameRegExp.test(name) && validMotorValueRegExp.test(cellValue)) {
            return true;
        }

        return validSensoryNameRegExp.test(name) && validSensoryValueRegExp.test(cellValue) ? true : false;
    }
}

customElements.define(RhiUiIsncsciWideLeftGrid.is, RhiUiIsncsciWideLeftGrid);