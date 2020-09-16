import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { updateProfileRequest } from '../../store/modules/user/actions';
import { signOut } from '../../store/modules/auth/actions';

import AvatarInput from './AvatarInput';

import { Container } from './styles';

export default function Profile() {

  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data){
    dispatch(updateProfileRequest(data));
    }


    function handleSignOut(){
      dispatch(signOut());
    }
  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit} >
        <AvatarInput name= "avatar_id" />

        <Input name ="name" placeholder ="Full Name" />
        <Input name ="email"  type="email" placeholder ="Your email address" />

        <hr/>

        <Input type= "password" name= "oldPassword" placeholder ="Your actual password" />
        <Input type= "password" name= "Password" placeholder ="Your new password" />
        <Input type= "password" name= "confirmPassword" placeholder ="Confirm your new password" />

        <button type="submit">Update profile</button>
      </Form>

      <button type= "button" onClick ={handleSignOut} > Escape from profile</button>



    </Container>

  );
}


