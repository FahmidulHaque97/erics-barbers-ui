'use client';

import Form from 'next/form';
import React from 'react';
import { TextField, Button } from '@mui/material';

interface RegisterFormProps {
  onRegister: (email: string, password: string) => void;
  submitting?: boolean;
}

export default function RegisterForm(props: RegisterFormProps) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    props.onRegister(email, password);
  };

  return (
    <Form action="" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4 mx-auto mt-10">
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          value={email}
          disabled={props.submitting}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          disabled={props.submitting}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={props.submitting}
        >
          Register
        </Button>
      </div>
    </Form>
  );
}
