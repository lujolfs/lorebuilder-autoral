import useAsync from "../useAsync";

import * as userApi from '../../services/userApi';

export default function useSignup() {
    const {
        loading: signupLoading,
        error: signupError,
        act: signup,
    } = useAsync(userApi.signup, false);

    return {
        signupLoading,
        signupError,
        signup
    }
}