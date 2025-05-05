// src/pages/Register.tsx
import React, { useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonText
} from '@ionic/react';
import { useHistory } from 'react-router';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const history = useHistory();

  const handleRegister = () => {
    if (email && password) {
      setMessage('✅ Registration successful! Redirecting to login…');
      setTimeout(() => history.replace('/login'), 1500);
    } else {
      setMessage('❗ Please enter both email and password');
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar style={{ '--background': 'var(--ion-color-primary)' } as React.CSSProperties}>
          <IonTitle style={{ color: '#05050F', fontWeight: 500 }}>Create Account</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent
        fullscreen
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '16px',
          '--background': '#f5f5f5'
        } as React.CSSProperties}
      >
      

        <IonItem
          style={{
            marginBottom: '16px',
            '--background': 'white',
            '--border-radius': '8px',
            '--padding-start': '12px'
          } as React.CSSProperties}
        >
          <IonLabel position="floating">Email</IonLabel>
          <IonInput
            type="email"
            value={email}
            onIonChange={e => setEmail(e.detail.value!)}
          />
        </IonItem>

        <IonItem
          style={{
            marginBottom: '16px',
            '--background': 'white',
            '--border-radius': '8px',
            '--padding-start': '12px'
          } as React.CSSProperties}
        >
          <IonLabel position="floating">Password</IonLabel>
          <IonInput
            type="password"
            value={password}
            onIonChange={e => setPassword(e.detail.value!)}
          />
        </IonItem>

        {message && (
          <IonText
            style={{
              textAlign: 'center',
              margin: '12px 0',
              color: message.startsWith('✅') ? 'var(--ion-color-success)' : 'var(--ion-color-danger)'
            }}
          >
            {message}
          </IonText>
        )}

        <IonButton
          expand="block"
          onClick={handleRegister}
          style={{
            '--border-radius': '999px',
            margin: '24px 0'
          } as React.CSSProperties}
        >
          Register
        </IonButton>

        <IonButton
          fill="clear"
          expand="block"
          routerLink="/login"
          style={{
            color: 'var(--ion-color-primary)'
          } as React.CSSProperties}
        >
          Back to Login
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Register;
