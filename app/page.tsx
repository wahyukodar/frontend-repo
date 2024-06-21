'use client';

import UpdateButton from '../components/UpdateButton';
import UserInfo from '../components/UserInfo';
import LoginForm from '../components/LoginForm';

export default function Home() {
  return (
      <main>
        <UserInfo/>
        <LoginForm />
        <UpdateButton />
      </main>
  );
}