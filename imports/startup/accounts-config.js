/**
 * Created by Quang on 03/05/2017.
 */
import {Accounts} from 'meteor/accounts-base';

Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
});