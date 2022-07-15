import { createAction, props } from '@ngrx/store';

import { User } from '@core/models';

export enum CurrentUserActionTypes {
    saveCurrentUser = '[Current User] Save Current User',
    createCurrentUser = '[Current User] Create Current User',
    resetCurrentUser = '[Current User] Reset Current User',
}

export const saveCurrentUserAction = createAction(
    CurrentUserActionTypes.saveCurrentUser,
    props<{ payload: User }>()
);

export const createCurrentUserAction = createAction(
    CurrentUserActionTypes.createCurrentUser,
    props<{ payload: User }>()
);

export const resetCurrentUserAction = createAction(
    CurrentUserActionTypes.resetCurrentUser
);
