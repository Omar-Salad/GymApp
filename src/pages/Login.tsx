// src/pages/Login.tsx
import React, { useState } from 'react';
import {
  IonPage,
  
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonText,
  IonToast
} from '@ionic/react';
import { useHistory } from 'react-router';

const Login: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      setToastMsg('Please enter both email and password');
      setShowToast(true);
      return;
    }
    // Demo: accept any non-empty credentials
    history.replace('/home');
  };

  return (
    <IonPage>
    

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
        <IonText style={{ fontSize: '1.2rem', textAlign: 'center', marginBottom: '24px', fontWeight: 500 }}>
          Welcome Back!
        </IonText>

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

        <IonButton
          expand="block"
          onClick={handleLogin}
          style={{ '--border-radius': '999px', margin: '24px 0' } as React.CSSProperties}
        >
          Login
        </IonButton>

        <IonButton
          fill="clear"
          expand="block"
          routerLink="/register"
          style={{ color: 'var(--ion-color-primary)'  } as React.CSSProperties}
        >
          Create Account
        </IonButton>

        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message={toastMsg}
          duration={2000}
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;
