// ATOMS

import { LOAN_STATUS } from '@core/models';

export const ICON_DEFAULT_VALUES = {
    ICON_NAME: 'quiz',
};

export const LINK_DEFAULT_VALUES = {
    NAME: 'link',
    ROUTER_LINK: '#',
    ROUTER_LINK_ACTIVE_CLASS_NAME: 'nav__link--active',
};

export const BUTTON_DEFAULT_VALUES = {
    LABEL: 'button',
    COLOR: 'primary',
    STEPER_BUTTON: 'none',
    DISABLED: false,
};

export const TEXT_DEFAULT_VALUES = {
    TEXT: 'text',
};

export const INPUT_DEFAULT_VALUES = {
    NAME: 'input',
    LABEL: 'input',
    PLACEHOLDER: 'placeholder',
    REQUIERED: false,
};

export const DATEPICKER_DEFAULT_VALUES = {
    LABEL: 'fecha',
};

export const SLIDER_DEFAULT_VALUES = {
    MIN_VALUE: 0,
    MAX_VALUE: 100,
    VALUE: 0,
    COLOR: 'primary',
};

// MOLECULES

export const SLIDER_INPUT_DEFAULT_VALUES = SLIDER_DEFAULT_VALUES;

export const AMOUNT_CARD_INPUT_DEFAULT_VALUES = {
    LABEL: 'valor',
    AMOUNT: 1000,
};

export const RESPONSE_DEFAULT_VALUES = [
    {
        status: LOAN_STATUS.PENDING,
        icon: 'autorenew',
        text: 'Estamos procesando tu solicitud...',
    },
    {
        status: LOAN_STATUS.APPROVED,
        icon: 'check_circle',
        text: '¡Préstamo Aprobado!',
    },
    {
        status: LOAN_STATUS.REJECTED,
        icon: 'cancel',
        text: 'Préstamo Rechazado :c',
    },
];

// ORGANISMS

export const STEPPER_DEFAULT_VALUES = {
    IS_LINEAR: true,
};
