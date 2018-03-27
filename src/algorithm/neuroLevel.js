/*
@license
Copyright (c) 2015 Rick Hansen Institute. All rights reserved.
This code may only be used under the modified Apache license found at https://raw.githubusercontent.com/EddieMachete/rhi-core-isncsci-algorithm/master/LICENSE
Author: RhiTech <tech@rickhanseninstitute.org>
*/
'use strict';
/**
 * The 'rhi-core-isncsci-level' contains all the values for a specific neurological level required in the calculation of an ISNCSCI exam.
* @demo demo/index.html
*/
export class NeuroLevel {
    constructor() {
        this.hasOtherLeftMotorFunction = false;
        this.isKeyMuscle = false;
        this.isLowerMuscle = false;
        this.isncsciExam = null;
        this.leftTouchImpairmentNotDueToSci = false;
        this.leftTouchValue = 0;
        this.leftPrickImpairmentNotDueToSci = false;
        this.leftPrickValue = 0;
        this.leftMotorImpairmentNotDueToSci = false;
        this.leftMotorValue = 0;
        this.next = null;
        this.ordinal = 0;
        this.previous = null;
        this.rightTouchImpairmentNotDueToSci = false;
        this.rightTouchValue = 0;
        this.rightPrickImpairmentNotDueToSci = false;
        this.rightPrickValue = 0;
        this.rightMotorImpairmentNotDueToSci = false;
        this.hasOtherRightMotorFunction = false;
        this.rightMotorValue = 0;
    }
    static get is() { return 'rhi-core-isncsci.NeuroLevel'; }
    /**
    * Updates all dermatome related values on the neurological level.
    *
    * @param {number} ordinal The position of the level on the human spine.
    * @param {boolean} isKeyMuscle
    * @param {boolean} isKowerMuscle
    * @param {string} rightTouch
    * @param {number} rightTouchValue
    * @param {boolean} rightTouchImpairmentNotDueToSci
    * @param {string} leftTouch
    * @param {number} leftTouchValue
    * @param {boolean} leftTouchImpairmentNotDueToSci
    * @param {string} rightPrick
    * @param {number} rightPrickValue
    * @param {boolean} rightPrickImpairmentNotDueToSci
    * @param {string} leftPrick
    * @param {number} leftPrickValue
    * @param {boolean} leftPrickImpairmentNotDueToSci
    * @param {string} rightMotor
    * @param {number} rightMotorValue
    * @param {boolean} rightMotorImpairmentNotDueToSci
    * @param {string} leftMotor
    * @param {number} leftMotorValue
    * @param {boolean} leftMotorImpairmentNotDueToSci
    *
    * @return {NeuroLevel} Returns itself to allow chaining methods.
    */
    setValues(ordinal, isKeyMuscle, isLowerMuscle, rightTouch, rightTouchValue, rightTouchImpairmentNotDueToSci, leftTouch, leftTouchValue, leftTouchImpairmentNotDueToSci, rightPrick, rightPrickValue, rightPrickImpairmentNotDueToSci, leftPrick, leftPrickValue, leftPrickImpairmentNotDueToSci, rightMotor, rightMotorValue, rightMotorImpairmentNotDueToSci, leftMotor, leftMotorValue, leftMotorImpairmentNotDueToSci) {
        this.isKeyMuscle = isKeyMuscle;
        this.isLowerMuscle = isLowerMuscle;
        this.ordinal = ordinal;
        this.rightTouch = rightPrick;
        this.rightTouchValue = rightPrickValue;
        this.rightTouchImpairmentNotDueToSci = rightTouchImpairmentNotDueToSci;
        this.leftTouch = leftTouch;
        this.leftTouchValue = leftTouchValue;
        this.leftTouchImpairmentNotDueToSci = leftTouchImpairmentNotDueToSci;
        this.rightPrick = rightPrick;
        this.rightPrickValue = rightPrickValue;
        this.rightPrickImpairmentNotDueToSci = rightPrickImpairmentNotDueToSci;
        this.leftPrick = leftPrick;
        this.leftPrickValue = leftPrickValue;
        this.leftPrickImpairmentNotDueToSci = leftPrickImpairmentNotDueToSci;
        this.rightMotor = rightMotor;
        this.rightMotorValue = rightMotorValue;
        this.rightMotorImpairmentNotDueToSci = rightMotorImpairmentNotDueToSci;
        this.leftMotor = leftMotor;
        this.leftMotorValue = leftMotorValue;
        this.leftMotorImpairmentNotDueToSci = leftMotorImpairmentNotDueToSci;
        return this;
    }
}