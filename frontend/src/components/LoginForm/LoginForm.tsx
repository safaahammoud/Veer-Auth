import { Form } from 'react-router-dom';
import { useState } from 'react';

import Input from '../CustomInput/CustomInput';
import Button from '../StyledComponents/Button';
import HeaderText from '../StyledComponents/HeaderText';
import AvatarIcon from '../StyledComponents/Icons/AvatarIcon';
import './LoginForm.scss';

const LoginForm: React.FC = () => {
    const [isSubmitting, _setIsSubmitting] = useState<boolean>(false)
    const [hasEmailError, _setEmailError] = useState<boolean>(false)
    const [hasPasswordError, _setPasswordError] = useState<boolean>(false)

    return (
        <>
            <AvatarIcon />

            <div className='auth-wrapper'>
                <HeaderText>Login</HeaderText>

                <HeaderText $secondary>Enter your details to login.</HeaderText>
                
                <Form method="post" className="auth-wrapper__form">
                    <Input
                        id='email'
                        type='email'
                        label='Email*'
                        errorMsg={hasEmailError && 'error variable todo' || ''}
                        placeholder='test@test.com'
                        prefixIcon='email'
                        required
                    />

                    <Input
                        id='password'
                        type='password'
                        label='Password*'
                        errorMsg={hasPasswordError && 'error variable todo' || ''}
                        placeholder='Enter your password'
                        prefixIcon='password'
                        required
                    />

                    <Button $primary>
                        {isSubmitting ? 'Submitting' : 'Login'}
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default LoginForm;