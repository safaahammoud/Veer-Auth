import { Form } from 'react-router-dom';

import './LoginForm.scss'
import EmailIcon from '../UI/Icons/EmailIcon';
import PasswordIcon from '../UI/Icons/PasswordIcon';
import AvatarIcon from '../UI/Icons/AvatarIcon';
import Button from '../UI/Button';
import Input from '../UI/Input';
import HeaderText from '../UI/HeaderText';
import Label from '../UI/Label';

const LoginForm: React.FC = () => {
    return (
        <>
            <AvatarIcon />

            <div className='auth-wrapper'>
                <HeaderText>Login</HeaderText>

                <HeaderText $secondary>Enter your details to login.</HeaderText>
                
                <Form method="post" className="auth-wrapper__form">
                    <div>
                        <Label htmlFor="email">Email*</Label>

                        <div className='auth-wrapper__form__input-wrapper'>
                            <Input
                                id='email'
                                type='email'
                                placeholder='test@test.com'
                                required
                            />

                            <EmailIcon className='auth-wrapper__form__input-wrapper__icon' />
                        </div>
                    </div>
                
                    <div>
                        <Label htmlFor="password">Password*</Label>
                        
                        <div className='auth-wrapper__form__input-wrapper'>
                            <Input
                                id='password'
                                type='password'
                                placeholder='Enter your password'
                                required
                            />

                            <PasswordIcon className='auth-wrapper__form__input-wrapper__icon' />
                        </div>
                    </div>

                    <Button $primary>Login</Button>
                </Form>
            </div>
        </>
    )
}

export default LoginForm;