import React from 'react';
import { Props } from './config';
import { Grid } from 'semantic-ui-react';
import { RouteComponentProps } from 'react-router';
import { Route, withRouter } from 'react-router-dom';
import SidebarComp from '../SideBar/SidebarComp';
import Settings from '../../../containers/Settings/Settings';
import ProfileEdit from '../../../containers/Accounts/EditProfile/ProfileEdit';
import AccountDelete from '../../../containers/Accounts/AccountDelete/DeleteAccount';
import AccountSettingsEdit from '../../../containers/Accounts/AccountSettings/AccountSettingsEdit';

const AccountsComp: React.SFC<Props & RouteComponentProps> = ({ handleSelect, match }) => {
    return (
        <>
            <Grid container centered>
                <Grid.Column width={ 3 }>
                    <SidebarComp
                        handleSelect={ handleSelect }
                    />
                </Grid.Column>

                <Grid.Column width={ 8 }>
                    <Route
                        exact path="/accounts"
                        component={ ProfileEdit }
                    />
                    <Route
                        path="/accounts/account_settings"
                        component={ AccountSettingsEdit }
                    />
                    <Route
                        path="/accounts/delete"
                        component={ AccountDelete }
                    />
                    <Route
                        path="/accounts/site_settings"
                        component={ Settings }
                    />
                </Grid.Column>
            </Grid>
        </>
    );
};

export default withRouter(AccountsComp);
