import React from 'react';
import queryString from 'query-string';
import { connect } from 'react-redux';
import { State, Props } from './config';
import { registerConfirm } from '../../../redux/actions/authActions/authActions';
import RegisterConfirmComp from '../../../components/Auth/RegisterConfirm/RegisterConfirmComp';


class RegisterConfirm extends React.PureComponent<Props, State> {

    state: State = {
        error: null,
        isLoading: true,
        registerationSuccess: false,
    };

    componentDidMount = async () => {
        const { location, registerConfirm } = this.props;

        const queryList = queryString.parse(location.search);
        const res = await registerConfirm(queryList.emailtoken);

        if (res.payload.status >= 400) {
            this.setState({
                isLoading: false,
                error: { message: 'Something went wrong, please return to the registration page and try again'}
            });
        } else {
            this.setState({
                isLoading: false,
                registerationSuccess: true
            });
        };

        return;
    };

    render() {
        const { error, isLoading, registerationSuccess } = this.state;

        return (
            <>
                <RegisterConfirmComp
                    error={ error }
                    isLoading={ isLoading }
                    registerationSuccess={ registerationSuccess }
                />
            </>
        );
    };
};

export default connect(null, { registerConfirm })(RegisterConfirm);
