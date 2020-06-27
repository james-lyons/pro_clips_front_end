import React from 'react';
import { connect } from 'react-redux';
import { Props, Event } from './config';
import { Responsive } from 'semantic-ui-react';
import { RouteComponentProps } from 'react-router';
import { setActiveItem } from '../../../redux/actions/accountActions/accountActions';
import AccountsComp from '../../../components/Accounts/Accounts/AccountsComp';
import MobileAccountsComp from '../../../components/Accounts/Accounts/MobileAccountsComp';

class Accounts extends React.PureComponent<Props & RouteComponentProps> {

    componentDidMount = async () => {
        const { setActiveItem, history } = this.props;
        const { pathname } = history.location;
        
        if (pathname === '/accounts') {
            await setActiveItem('Profile Settings');

        } else if (pathname === '/accounts/account_settings') {
            await setActiveItem('Account Settings');

        } else if (pathname === '/accounts/delete') {
            await setActiveItem('Delete Account');

        };
    };
    
    private handleSelect = async (event: Event) => {
        const { history } = this.props;
        const navPoint = event.target.text;

        if (navPoint === 'Profile Settings') {
            await this.props.history.push('/accounts');

        } else if (navPoint === 'Account Settings') {
            this.props.history.push('/accounts/account_settings');

        } else if (navPoint === 'Delete Account') {
            this.props.history.push('/accounts/delete');
        };
    };


    render() {
        
        const { handleSelect } = this;

        return (
            <>
                <Responsive minWidth={ 1050 }>
                    <AccountsComp
                        handleSelect={ handleSelect }
                    />
                </Responsive>

                <Responsive maxWidth={ 1049 }>
                    <MobileAccountsComp
                        handleSelect={ handleSelect }
                    />
                </Responsive>
            </>
        );
    };
};

export default connect(null, { setActiveItem })(Accounts);
