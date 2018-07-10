/*
@license
Copyright (c) 2017 Rick Hansen Institute. All rights reserved.
This code should not be modified and/or distributed without explicit permission from the Rick Hansen Institute.
Author: RhiTech <tech@rickhanseninstitute.org>
*/
'use strict';

//import { html, PolymerElement } from '@polymer/polymer';
import { html, LitElement } from '@polymer/lit-element';
import { TemplateResult } from 'lit-html';
import { SetDermatomeValueUseCase } from 'rhi-core-isncsci-algorithm/usecases/src/setDermatomeValue.usecase';
import { connect } from '../helpers/connect-mixin';
import { store } from '../store/store';
import { AppStoreProvider } from '../providers';

export class RhiUiIsncsciWide extends connect(store)(LitElement) {
    public static get is(): string { return 'rhi-ui-isncsci-wide'; }

    private leftGrid: HTMLElement;
    private appStoreProvider: AppStoreProvider;

    //public static get template(): html {
    public _render(props: any): TemplateResult {
        return html`
            <style>
                :host {
                    display: block;
                }
                
                .display-flex {
                    display: flex;
                }

                .diagram {
                    background-color: #FDD;
                    color: #666;
                    padding: 8px;
                }

                .grid {
                    background-color: #DDF;
                    color: #666;
                    padding: 8px;
                }

                .totals {
                    background-color: #DDD;
                    padding: 24px;
                    text-align: center;
                }
            </style>
            <!-- shadow DOM for your element -->
            <div class="cell-input">
                <button value="0" on-click="${e => this.handleCellInput(e)}">0</button>
                <button value="1" on-click="${e => this.handleCellInput(e)}">1</button>
                <button value="2" on-click="${e => this.handleCellInput(e)}">2</button>
                <button value="3" on-click="${e => this.handleCellInput(e)}">3</button>
                <button value="4" on-click="${e => this.handleCellInput(e)}">4</button>
                <button value="5" on-click="${e => this.handleCellInput(e)}">5</button>
            </div>
            <div class="display-flex">
                <rhi-ui-isncsci-wide-left-grid id="leftGrid"
                                               class="user-select-none"
                                               on-cell-down="${this.handleGridCellDown}"
                                               on-cell-up="${this.handleGridCellUp}"></rhi-ui-isncsci-wide-left-grid>
                <div class="diagram">ASIA Man Diagram</div>
                <div class="grid right">Right Grid</div>
            </div>
            <div class="totals">Totals</div>
        `;
    }

    public static get properties(): object {
        return {};
    }

    public constructor() {
        super();

        this.appStoreProvider = new AppStoreProvider();
    }

    public ready(): void {
        super.ready();

        this.leftGrid = this.shadowRoot.getElementById('leftGrid');
    }

    // Polymer
    public disconnectedCallback(): void {
        super.disconnectedCallback();

        this.leftGrid.removeEventListener('cell-down', this.handleGridCellDown);
        this.leftGrid.removeEventListener('cell-up', this.handleGridCellUp);
    }

    public stateChanged(state: any): void {
        //console.log(state);
    }

    private handleGridCellDown(e: CustomEvent): void {
        console.log('cell down');
    }

    private handleGridCellUp(e: CustomEvent): void {
        console.log('cell up');
    }

    public handleCellInput(e): void {
        new SetDermatomeValueUseCase(this.appStoreProvider).execute('c2RightTouch', e.target.value);
    }
}

customElements.define(RhiUiIsncsciWide.is, RhiUiIsncsciWide);