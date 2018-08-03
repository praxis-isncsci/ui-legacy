/*
@license
Copyright (c) 2017 Rick Hansen Institute. All rights reserved.
This code should not be modified and/or distributed without explicit permission from the Rick Hansen Institute.
Author: RhiTech <tech@rickhanseninstitute.org>
*/
'use strict';

import { html, LitElement } from '@polymer/lit-element';
import { TemplateResult } from 'lit-html';

export class RhiUiIsncsciMobileTotals extends LitElement {
    public static get is(): string { return 'rhi-ui-isncsci-mobile-totals'; }

    public _render(props): TemplateResult {
        return html`
            <!-- shadow DOM for your element -->
            <style>
                :host {
                    display: block;
                }

                .secondary-text {
                    color: var(--isncsci-secondary-text-color, #666);
                }

                .small-text {
                    font-size: 9px;
                }

                .text-align-right {
                    text-align: right;
                }

                .grid {
                    margin-bottom: 32px;
                }

                .row {
                    display: flex;
                    margin-top: 8px;
                }

                .row.header div {
                    margin-left: 8px;
                    text-align: center;
                    width: 48px;
                }

                .row.header div:first-child {
                    margin-left: 128px;
                }

                .row .label {
                    align-items: center;
                    display: flex;
                    height: 40px;
                    text-align: right;
                    width: 120px;
                }

                /**
                * The label is to be aligned center-right.
                * For the text align right, we need the content to expand to fill the entire label width.
                */
                .row .label .text-align-right {
                    flex: 1;
                }

                .cell {
                    background-color: var(--isncsci-cell-color, #F2F2F2);
                    height: 40px;
                    line-height: 40px;
                    margin-left: 8px;
                    text-align: center;
                    width: 48px;
                }

                /* The interactive cells can be tapped.  They need to express that affordance to the user.object */
                .cell.interactive {
                    background-color: var(--isncsci-interactive-cell-color, #DCDCDC);
                }

                .cell-select {
                    background-color: var(--isncsci-interactive-cell-color, #DCDCDC);
                    border: none;
                    font-family: 'Roboto', 'Noto', sans-serif;
                    font-size: 16px;
                    height: 40px;
                    margin-left: 8px;
                    width: 104px;
                }

                .comments-component {
                    border-bottom: solid 2px #CCC;
                    width: 221px;
                }

                .comments-component::after {
                    background-color: var(--isncsci-primary-color, #999);
                    content: '';
                    display: block;
                    height: 2px;
                    margin: 0 auto -1px auto;
                    width: 0;

                    transition: width 200ms ease;
                }

                .comments-component.active::after {
                    width: 100%;
                }

                .comments-component .label {
                    margin-bottom: 8px;
                }

                .comments-component textarea {
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
            </style>
            <div class="grid">
                <div class="row header secondary-text">
                    <div>${props.textRight}</div>
                    <div>${props.textLeft}</div>
                </div>
                <div class="row">
                    <div class="label"><span class="text-align-right secondary-text">${props.textUpperMotor}</span></div>
                    <div class="cell interactive" on-click="${(e) => this.handleCellClick(e, 'right-upper-motor')}">${props.rightUpperMotor}</div>
                    <div class="cell interactive" on-click="${(e) => this.handleCellClick(e, 'left-upper-motor')}">${props.leftUpperMotor}</div>
                </div>
                <div class="row">
                    <div class="label"><span class="text-align-right secondary-text">${props.textLowerMotor}</span></div>
                    <div class="cell interactive" on-click="${(e) => this.handleCellClick(e, 'right-lower-motor')}">${props.rightLowerMotor}</div>
                    <div class="cell interactive" on-click="${(e) => this.handleCellClick(e, 'left-lower-motor')}">${props.leftLowerMotor}</div>
                </div>
                <div class="row">
                    <div class="label"><span class="text-align-right secondary-text">${props.textLightTouch}</span></div>
                    <div class="cell interactive" on-click="${(e) => this.handleCellClick(e, 'right-touch')}">${props.rightTouch}</div>
                    <div class="cell interactive" on-click="${(e) => this.handleCellClick(e, 'left-touch')}">${props.leftTouch}</div>
                </div>
                <div class="row">
                    <div class="label"><span class="text-align-right secondary-text">${props.textPinPrick}</span></div>
                    <div class="cell interactive" on-click="${(e) => this.handleCellClick(e, 'right-prick')}">${props.rightPrick}</div>
                    <div class="cell interactive" on-click="${(e) => this.handleCellClick(e, 'left-prick')}">${props.leftPrick}</div>
                </div>
            </div>
            <div class="grid">
                <div class="row">
                    <div class="label">
                        <div class="text-align-right secondary-text">
                            <div>${props.textVac}</div>
                            <div class="small-text">${props.textVacDescription}</div>
                        </div>
                    </div>
                    <div>
                        <select id="analContraction"
                                name="analContraction"
                                class="cell-select">
                            <option value="None"></option>
                            <option value="Yes">${props.textOptionYes}</option>
                            <option value="No">${props.textOptionNo}</option>
                            <option value="NT">${props.textOptionNt}</option>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="label">
                        <div class="text-align-right secondary-text">
                            <div>${props.textDap}</div>
                            <div class="small-text">${props.textDapDescription}</div>
                        </div>
                    </div>
                    <div>
                        <select id="analSensation"
                                name="analSensation"
                                class="cell-select">
                            <option value="None"></option>
                            <option value="Yes">${props.textOptionYes}</option>
                            <option value="No">${props.textOptionNo}</option>
                            <option value="NT">${props.textOptionNt}</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="grid">
                <div class="row header secondary-text">
                    <div>${props.textRight}</div>
                    <div>${props.textLeft}</div>
                </div>
                <div class="row">
                    <div class="label"><span class="text-align-right secondary-text">${props.textSensoryNl}</span></div>
                    <div class="cell interactive" on-click="${(e) => this.handleCellClick(e, 'right-sensory-nl')}">${props.rightSensoryNl}</div>
                    <div class="cell interactive" on-click="${(e) => this.handleCellClick(e, 'left-sensory-nl')}">${props.leftSensoryNl}</div>
                </div>
                <div class="row">
                    <div class="label"><span class="text-align-right secondary-text">${props.textMotorNl}</span></div>
                    <div class="cell interactive" on-click="${(e) => this.handleCellClick(e, 'right-motor-nl')}">${props.rightMotorNl}</div>
                    <div class="cell interactive" on-click="${(e) => this.handleCellClick(e, 'left-motor-nl')}">${props.leftMotorNl}</div>
                </div>
            </div>
            <div class="grid">
                <div class="row">
                    <div class="label"><span class="text-align-right secondary-text">${props.textNli}</span></div>
                    <div class="cell">${props.nli}</div>
                </div>
                <div class="row">
                    <div class="label"><span class="text-align-right secondary-text">${props.textCompleteIncomplete}</span></div>
                    <div class="cell">${props.completeIncomplete}</div>
                </div>
                <div class="row">
                    <div class="label"><span class="text-align-right secondary-text">${props.textAis}</span></div>
                    <div class="cell">${props.ais}</div>
                </div>
            </div>
            <div class="grid">
                <div class="row header secondary-text">
                    <div>${props.textRight}</div>
                    <div>${props.textLeft}</div>
                </div>
                <div class="row">
                    <div class="label"><span class="text-align-right secondary-text">${props.textSensoryNlZpp}</span></div>
                    <div class="cell">${props.rightSensoryNlZpp}</div>
                    <div class="cell">${props.leftSensoryNlZpp}</div>
                </div>
                <div class="row">
                    <div class="label"><span class="text-align-right secondary-text">${props.textMotorNlZpp}</span></div>
                    <div class="cell">${props.rightMotorNlZpp}</div>
                    <div class="cell">${props.leftMotorNlZpp}</div>
                </div>
            </div>
            <div class$="${this.commentsClass}">
                <div class="label secondary-text">${props.textComments}</div>
                <textarea id="comments" rows="1" value="${props.comments}"></textarea>
            </div>
        `;
    }

    private commentsElement: HTMLTextAreaElement;
    private commentsClass: string = 'comments-component';
    
    public static get observedAttributes(): string[] {
        return ['comments'];
    }

    public get comments(): string { return this.commentsElement.value; }
    public set comments(value: string) {
        if (!value) {
            this.removeAttribute('comments');
            return;
        }

        this.setAttribute('comments', value);
    }

    public static get properties(): any {
        return {
            ais: { reflectToAttribute: true, type: String, value: '' },
            completeIncomplete: { reflectToAttribute: true, type: String, value: '' },
            dap: { reflectToAttribute: true, type: String, value: '' },
            leftLowerMotor: { reflectToAttribute: true, type: String, value: '' },
            leftMotorNl: { reflectToAttribute: true, type: String, value: '' },
            leftMotorNlZpp: { reflectToAttribute: true, type: String, value: '' },
            leftPrick: { reflectToAttribute: true, type: String, value: '' },
            leftSensoryNl: { reflectToAttribute: true, type: String, value: '' },
            leftSensoryNlZpp: { reflectToAttribute: true, type: String, value: '' },
            leftTouch: { reflectToAttribute: true, type: String, value: '' },
            leftUpperMotor: { reflectToAttribute: true, type: String, value: '' },
            nli: { reflectToAttribute: true, type: String, value: '' },
            rightLowerMotor: { reflectToAttribute: true, type: String, value: '' },
            rightMotorNl: { reflectToAttribute: true, type: String, value: '' },
            rightMotorNlZpp: { reflectToAttribute: true, type: String, value: '' },
            rightPrick: { reflectToAttribute: true, type: String, value: '' },
            rightSensoryNl: { reflectToAttribute: true, type: String, value: '' },
            rightSensoryNlZpp: { reflectToAttribute: true, type: String, value: '' },
            rightTouch: { reflectToAttribute: true, type: String, value: '' },
            rightUpperMotor: { reflectToAttribute: true, type: String, value: '' },
            textAis: { reflectToAttribute: true, type: String, value: 'AIS' },
            textComments: { reflectToAttribute: true, type: String, value: 'General comments:' },
            textCompleteIncomplete: { reflectToAttribute: true, type: String, value: 'Complete or incomplete' },
            textDap: { reflectToAttribute: true, type: String, value: 'DAP' },
            textDapDescription: { reflectToAttribute: true, type: String, value: 'Deep anal pressure' },
            textLeft: { reflectToAttribute: true, type: String, value: 'Left' },
            textLightTouch: { reflectToAttribute: true, type: String, value: 'Light touch' },
            textLowerMotor: { reflectToAttribute: true, type: String, value: 'Lower motor' },
            textMotorNl: { reflectToAttribute: true, type: String, value: 'Motor NL' },
            textMotorNlZpp: { reflectToAttribute: true, type: String, value: 'Motor NL ZPP' },
            textNli: { reflectToAttribute: true, type: String, value: 'NLI' },
            textOptionNo: { reflectToAttribute: true, type: String, value: 'No' },
            textOptionNt: { reflectToAttribute: true, type: String, value: 'NT' },
            textOptionYes: { reflectToAttribute: true, type: String, value: 'Yes' },
            textPinPrick: { reflectToAttribute: true, type: String, value: 'Pin prick' },
            textRight: { reflectToAttribute: true, type: String, value: 'Right' },
            textSensoryNl: { reflectToAttribute: true, type: String, value: 'Sensory NL' },
            textSensoryNlZpp: { reflectToAttribute: true, type: String, value: 'Sensory NL ZPP' },
            textUpperMotor: { reflectToAttribute: true, type: String, value: 'Upper motor' },
            textVac: { reflectToAttribute: true, type: String, value: 'VAC' },
            textVacDescription: { reflectToAttribute: true, type: String, value: 'Voluntary anal contraction' },
            vac: { reflectToAttribute: true, type: String, value: '' }
        };
    }

    public constructor() {
        super();

        // ToDo: For some reason the lit element is not initializing
        const props: any = RhiUiIsncsciMobileTotals.properties;
        for (let key in props) {
            this[key] = props[key].value;
        }
    }

    public ready(): void {
        super.ready();

        this.commentsElement = this['shadowRoot'].getElementById('comments');
        this.commentsElement.addEventListener('focus', (e) => { this.commentsClass = 'comments-component active';this.requestRender(); });
        this.commentsElement.addEventListener('blur', (e) => { this.commentsClass = 'comments-component';this.requestRender(); });
        this.commentsElement.addEventListener('change', (e) => this.handleCommentsChange(e));

        if (this.commentsElement['textLength'] > 0) {
            this.commentsClass = 'comments-component active';
        }
    }

    public attributeChangedCallback(name, oldValue, newValue): void {
        super.attributeChangedCallback(name, oldValue, newValue);


        // if (oldValue === newValue || !/^(preview|value)$/.test(name)) {
        //     return;
        // }
        
        if (name === 'comments') {
            this.commentsElement.value = newValue;
        }

        this.requestRender();
    }

    private handleCellClick(e: MouseEvent, cellName: string): boolean {
        const event: CustomEvent = new CustomEvent('interactive-cell-clicked', {detail: {name: cellName}});
        this['dispatchEvent'](event);

        return true;
    }

    private handleCommentsChange(e): boolean {
        const event: CustomEvent = new CustomEvent('comments-change', {detail: {comments: this.commentsElement.value}});
        this['dispatchEvent'](event);

        return true;
    }
}

customElements.define(RhiUiIsncsciMobileTotals.is, RhiUiIsncsciMobileTotals);