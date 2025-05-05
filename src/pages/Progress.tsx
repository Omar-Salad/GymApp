// src/pages/Progress.tsx
import React, { useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent,
  IonProgressBar,
} from '@ionic/react';

const Progress: React.FC = () => {
  const [completion] = useState(0.65);
  const [weeklyGoal] = useState(0.5);
  const [hydration] = useState(0.8);

  const cardStyle: React.CSSProperties = {
    borderRadius: '8px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
    marginBottom: '16px',
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar style={{ '--background': 'var(--ion-color-secondry)' }}>
          <IonTitle style={{ color: '#090979' }}>Progress</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent
        fullscreen
        style={{ '--background': '#f5f5f5', padding: '16px' }}
      >
        {/* Workout Completion */}
        <IonCard style={cardStyle}>
          <IonCardHeader>
            <IonCardSubtitle style={{ marginBottom: '6px', fontWeight: 600 }}>
              Workout Completion
            </IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <IonProgressBar
              value={completion}
              style={{
                height: '14px',
                '--progress-background': '#d1e9fc',
                '--progress-value': 'var(--ion-color-primary)',
              } as React.CSSProperties}
            />
          </IonCardContent>
        </IonCard>

        {/* Weekly Goal */}
        <IonCard style={cardStyle}>
          <IonCardHeader>
            <IonCardSubtitle style={{ marginBottom: '6px', fontWeight: 600 }}>
              Weekly Goal
            </IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <IonProgressBar
              value={weeklyGoal}
              style={{
                height: '14px',
                '--progress-background': '#fcdede',
                '--progress-value': 'var(--ion-color-secondary)',
              } as React.CSSProperties}
            />
          </IonCardContent>
        </IonCard>

        {/* Hydration */}
        <IonCard style={cardStyle}>
          <IonCardHeader>
            <IonCardSubtitle style={{ marginBottom: '6px', fontWeight: 600 }}>
              Hydration
            </IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <IonProgressBar
              value={hydration}
              style={{
                height: '14px',
                '--progress-background': '#e8f5e9',
                '--progress-value': '#34a853',
              } as React.CSSProperties}
            />
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Progress;
