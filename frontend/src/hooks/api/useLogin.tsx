import useAsync from '../useAsync';
import * as authApi from '../../services/authApi';

export default function useLogin() {
    const {
        loading: loginLoading,
        error: loginError,
        act: login
    } = useAsync(authApi.login, false);

    return {
        loginLoading,
        loginError,
        login
    };
}
