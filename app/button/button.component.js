import template from './button.html';
import './button.scss';

const bindings = {
  cmpIsPrimary: '<?',
  cmpIsSecondary: '<?',
  cmpIsTertiary: '<?',
  cmpIsQuaternary: '<?',
  cmpOnClick: '&',
  cmpIsUppercase: '<?',
  cmpIsFullWidth: '<?',
  cmpIsDisabled: '<?',
  cmpIsStateCompact: '<?',
  cmpIsStateTwoLines: '<?',
  cmpSize: '@',
};

const transclude = true;

class controller {
  constructor() {
    this.cmpSize = this.cmpSize || 'medium';
  }

  get componentClasses() {
    return {
      [`button__size--${this.cmpSize}`]: this.cmpSize,
      'button--is-primary': this.cmpIsPrimary,
      'button--is-secondary': this.cmpIsSecondary,
      'button--is-tertiary': this.cmpIsTertiary,
      'button--is-quaternary': this.cmpIsQuaternary,
      'button--is-uppercase': this.cmpIsUppercase,
      'button--is-full-width': this.cmpIsFullWidth,
      'button--is-disabled': this.cmpIsDisabled,
      'button--is-state-compact': this.cmpIsStateCompact,
      'button--is-state-two-lines': this.cmpIsStateTwoLines,
    };
  }

  onClick() {
    if (!this.cmpIsDisabled) this.cmpOnClick();
  }
}

export default { bindings, controller, template, transclude };
