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

import { template } from './rhi-isncsci-ui-mobile-totals-template';

interface iEventDetails {
    eventName: string,
    target: Element,
    handler: EventListener
}

export class RhiIsncsciUiMobileTotals extends HTMLElement {
    public static get is(): string { return 'rhi-isncsci-ui-mobile-totals'; }

    public static getTemplate(): string {
        return template;
    }

    private static getOptionTemplate(label: string, value: string, selectedValue: string) {
        return value === selectedValue
            ? `<option value="${value}" selected>${label}</option>`
            : `<option value="${value}">${label}</option>`;
    }

    public static get properties() {
        return {
            'ais': { reflectToAttribute: true, type: String, value: '' },
            'comments': { reflectToAttribute: true, type: String, value: '' },
            'complete-incomplete': { reflectToAttribute: true, type: String, value: '' },
            'dap': { reflectToAttribute: true, type: String, value: '' },
            'left-lower-motor': { reflectToAttribute: true, type: String, value: '' },
            'left-motor-nl': { reflectToAttribute: true, type: String, value: '' },
            'left-motor-nl-zpp': { reflectToAttribute: true, type: String, value: '' },
            'left-prick': { reflectToAttribute: true, type: String, value: '' },
            'left-sensory-nl': { reflectToAttribute: true, type: String, value: '' },
            'left-sensory-nl-zpp': { reflectToAttribute: true, type: String, value: '' },
            'left-touch': { reflectToAttribute: true, type: String, value: '' },
            'left-upper-motor': { reflectToAttribute: true, type: String, value: '' },
            'nli': { reflectToAttribute: true, type: String, value: '' },
            'right-lower-motor': { reflectToAttribute: true, type: String, value: '' },
            'right-motor-nl': { reflectToAttribute: true, type: String, value: '' },
            'right-motor-nl-zpp': { reflectToAttribute: true, type: String, value: '' },
            'right-prick': { reflectToAttribute: true, type: String, value: '' },
            'right-sensory-nl': { reflectToAttribute: true, type: String, value: '' },
            'right-sensory-nl-zpp': { reflectToAttribute: true, type: String, value: '' },
            'right-touch': { reflectToAttribute: true, type: String, value: '' },
            'right-upper-motor': { reflectToAttribute: true, type: String, value: '' },
            'text-ais': { reflectToAttribute: true, type: String, value: 'AIS' },
            'text-comments': { reflectToAttribute: true, type: String, value: 'General comments:' },
            'text-complete-incomplete': { reflectToAttribute: true, type: String, value: 'Complete or incomplete' },
            'text-dap': { reflectToAttribute: true, type: String, value: 'DAP' },
            'text-dap-description': { reflectToAttribute: true, type: String, value: 'Deep anal pressure' },
            'text-left': { reflectToAttribute: true, type: String, value: 'Left' },
            'text-light-touch': { reflectToAttribute: true, type: String, value: 'Light touch' },
            'text-lower-motor': { reflectToAttribute: true, type: String, value: 'Lower motor' },
            'text-motor-nl': { reflectToAttribute: true, type: String, value: 'Motor NL' },
            'text-motor-nl-zpp': { reflectToAttribute: true, type: String, value: 'Motor NL ZPP' },
            'text-nli': { reflectToAttribute: true, type: String, value: 'NLI' },
            'text-option-no': { reflectToAttribute: true, type: String, value: 'No' },
            'text-option-nt': { reflectToAttribute: true, type: String, value: 'NT' },
            'text-option-yes': { reflectToAttribute: true, type: String, value: 'Yes' },
            'text-pin-prick': { reflectToAttribute: true, type: String, value: 'Pin prick' },
            'text-right': { reflectToAttribute: true, type: String, value: 'Right' },
            'text-sensory-nl': { reflectToAttribute: true, type: String, value: 'Sensory NL' },
            'text-sensory-nl-zpp': { reflectToAttribute: true, type: String, value: 'Sensory NL ZPP' },
            'text-upper-motor': { reflectToAttribute: true, type: String, value: 'Upper motor' },
            'text-vac': { reflectToAttribute: true, type: String, value: 'VAC' },
            'text-vac-description': { reflectToAttribute: true, type: String, value: 'Voluntary anal contraction' },
            'vac': { reflectToAttribute: true, type: String, value: '' }
        };
    }

    public static get observedAttributes(): string[] {
        const attributes: string[] = [];

        // tslint:disable-next-line:forin
        for (const key in RhiIsncsciUiMobileTotals.properties) {
            attributes.push(key.toLowerCase());
        }

        return attributes;
    }

    private uiBindings = {
        comments: null
    };
    private eventBindings: iEventDetails[] = [];
    private props = {};

    // private commentsClass: string = 'comments-component';

    public constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.requestRender();
        this.initializeDeclaredProperties();
        this.updateUiBindings();
    }

    public connectedCallback() {
        console.log(this.uiBindings);
        // Wire up Voluntary Anal Contraction events
        const analContractionChangeHandler = (e) => this.handleVacChange(e);
        const analContraction: Element = this.uiBindings['anal-contraction'][0];
        analContraction.addEventListener('change', analContractionChangeHandler);
        this.eventBindings.push({
            eventName: 'change',
            target: analContraction,
            handler: analContractionChangeHandler
        });

        // Wire up Deep Anal Pressure events
        const analSensationChangeHandler = (e) => this.handleDapChange(e);
        const analSensation: Element = this.uiBindings['anal-sensation'][0];
        analSensation.addEventListener('change', analSensationChangeHandler);
        this.eventBindings.push({
            eventName: 'change',
            target: analSensation,
            handler: analSensationChangeHandler
        });

        // Wire up the comments events
        const commentsElement: Element = this.uiBindings.comments[0];
        const commentsComponent: Element = this.uiBindings['comments-component'][0];
        const commentsChangeHandler: EventListener = (e) => this.handleCommentsChange(e);
        const commentsFocusHandler: EventListener = (e) => { commentsComponent.classList.add('active') };
        const commentsBlurHandler: EventListener = (e) => { commentsComponent.classList.remove('active') };
        commentsElement.addEventListener('change', commentsChangeHandler);
        commentsElement.addEventListener('focus', commentsFocusHandler);
        commentsElement.addEventListener('blur', commentsBlurHandler);

        this.eventBindings.push({
            eventName: 'change',
            target: commentsElement,
            handler: commentsChangeHandler
        });

        this.eventBindings.push({
            eventName: 'focus',
            target: commentsElement,
            handler: commentsFocusHandler
        });

        this.eventBindings.push({
            eventName: 'blur',
            target: commentsElement,
            handler: commentsBlurHandler
        });
    }

    public disconnectedCallback() {
        this.eventBindings.forEach((eventDetails) => {
            eventDetails.target
                .removeEventListener(eventDetails.eventName, eventDetails.handler);
        });
    }

    private requestRender(): void {
        const template: HTMLTemplateElement = document.createElement('template') as HTMLTemplateElement;
        template.innerHTML = RhiIsncsciUiMobileTotals.getTemplate();
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    private initializeDeclaredProperties(): void {
        const props: any = RhiIsncsciUiMobileTotals.properties;

        for (let key in props) {
            this.props[key] = props[key].value;
        }
    }

    private updateUiBindings(): void {
        const elements: NodeListOf<Element> = this.shadowRoot.querySelectorAll('[bind-to]');

        for (let i: number = 0; i < elements.length; i++) {
            const element: Element = elements[i];
            const bindTo: string = element.getAttribute('bind-to');

            // In rare cases, we may want to share a binding.
            // It happens with UI Labels that repeat in a template, like the word 'right' repeated more than once.
            if (this.uiBindings[bindTo]) {
                this.uiBindings[bindTo].push(element);
            } else {
                this.uiBindings[bindTo] = [element];
            }

            const property = RhiIsncsciUiMobileTotals.properties[bindTo]

            if (property && property.value) {
                if (property.useProperty) {
                    element[property.useProperty] = property.value;
                } else {
                    element.innerHTML = property.value;
                }
            }

            // Add event listeners to interactive cells
            if (element.classList.contains('cell') && element.classList.contains('interactive')) {
                const clickEventHandler = (e) => this.handleCellClick(e, bindTo);
                element.addEventListener('click', clickEventHandler);

                this.eventBindings.push({
                    eventName: 'click',
                    target: element,
                    handler: clickEventHandler
                });
            }
        }
    }

    public attributeChangedCallback(name: string, oldValue: string, newValue: string, namespace: string): void {
        if (oldValue === newValue) {
            return;
        }

        const commentsElement = this.uiBindings['comments'][0];
        if (name === 'comments' && commentsElement && commentsElement.value !== newValue) {
            commentsElement.value = newValue;
            return;
        }

        const elements: Element[] = this.uiBindings[name];

        if (elements) {
            elements.forEach((element: Element) => {
                element.innerHTML = newValue;
            });
        }
    }

    private handleCellClick(e: MouseEvent, cellName: string): boolean {
        const event: CustomEvent = new CustomEvent('interactive-cell-clicked', { detail: { name: cellName } });
        this.dispatchEvent(event);

        return true;
    }

    private handleCommentsChange(e: Event): boolean {
        const event: CustomEvent =
            new CustomEvent('comments-change', { detail: { comments: this.uiBindings.comments[0].value } });
        this.dispatchEvent(event);

        return true;
    }

    private handleDapChange(e: Event): boolean {
        const target: HTMLSelectElement = e.target as HTMLSelectElement;
        const event: CustomEvent = new CustomEvent('dap-change', { detail: { dap: target.value } });
        this.dispatchEvent(event);

        return true;
    }

    private handleVacChange(e: Event): boolean {
        const target: HTMLSelectElement = e.target as HTMLSelectElement;
        const event: CustomEvent = new CustomEvent('vac-change', { detail: { vac: target.value } });
        this.dispatchEvent(event);

        return true;
    }
}

customElements.define(RhiIsncsciUiMobileTotals.is, RhiIsncsciUiMobileTotals);
