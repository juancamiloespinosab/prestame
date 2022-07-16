import { createAction, props } from '@ngrx/store';

import { User } from '@core/models';

export enum CurrentUserActionTypes {
    saveCurrentUser = '[Current User] Save Current User',
    createCurrentUser = '[Current User] Create Current User',
    resetCurrentUser = '[Current User] Reset Current User',

    updateCurrentUserName = '[Current User] Update Current User Name',
    updateCurrentUserEmail = '[Current User] Update Current User Email',
    updateCurrentUserDocument = '[Current User] Update Current User Document',
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

export const updateCurrentUserNameAction = createAction(
    CurrentUserActionTypes.updateCurrentUserName,
    props<{ payload: string }>()
);

export const updateCurrentUserEmailAction = createAction(
    CurrentUserActionTypes.updateCurrentUserEmail,
    props<{ payload: string }>()
);

export const updateCurrentUserDocumentAction = createAction(
    CurrentUserActionTypes.updateCurrentUserDocument,
    props<{ payload: number }>()
);
