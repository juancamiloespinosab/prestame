import { NavigationLink } from '@presentation/interfaces';

export const navigationLinks: NavigationLink[] = [
    {
        name: 'SOLICITAR PRÉSTAMO',
        routerLink: 'apply-for-loan',
        routerLinkActiveClassName: 'nav__link--active',
    },
    {
        name: 'SOLICITUDES',
        routerLink: 'approved-loans',
        routerLinkActiveClassName: 'nav__link--active',
    },
];
