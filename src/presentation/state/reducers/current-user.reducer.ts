import { User } from '@core/models';
import { createReducer, on } from '@ngrx/store';
import * as actions from '@state/actions/current-user.action';

export const currentUserInitialState: User = {
    id: 0,
    name: '',
    email: '',
    document: 0,
    loanApplicationId: 0,
};

export const currentUserReducer = createReducer(
    currentUserInitialState,
    on(actions.saveCurrentUserAction, (state, { payload }) => payload),
    on(actions.resetCurrentUserAction, () => currentUserInitialState)
);
