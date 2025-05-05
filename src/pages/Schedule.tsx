// src/pages/Schedule.tsx
import React from 'react';
import {
  IonPage, IonHeader, IonToolbar, IonTitle,
  IonContent, IonGrid, IonRow, IonCol,
  IonCard, IonCardHeader, IonCardSubtitle, IonBadge
} from '@ionic/react';

const weekPlan = [
  { day: 'Monday', focus: 'Chest & Triceps', isRest: false },
  { day: 'Tuesday', focus: 'Back & Biceps', isRest: false },
  { day: 'Wednesday', focus: '', isRest: true },
  { day: 'Thursday', focus: 'Legs', isRest: false },
  { day: 'Friday', focus: 'Shoulders', isRest: false },
  { day: 'Saturday', focus: '', isRest: true },
  { day: 'Sunday', focus: 'Full Body', isRest: false }
];

const Schedule: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar style={{ '--background': 'var(--ion-color-primary)' }}>
        <IonTitle style={{ color: 'white' }}>Weekly Schedule</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent
      fullscreen
     style={{
          '--background': 'linear-gradient(135deg, #1e3c72, #2a5298)', padding: '16px' }}
    >
      <IonGrid>
        <IonRow>
          {weekPlan.map((w,i) => (
            <IonCol size="6" sizeMd="4" key={i}>
              <IonCard
                style={{
                  borderRadius: '8px',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                  transition: 'transform 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-4px)')}
                onMouseLeave={e => (e.currentTarget.style.transform = '')}
              >
                <IonCardHeader>
                  <IonCardSubtitle style={{ fontWeight: 600 }}>
                    {w.day}
                  </IonCardSubtitle>
                  <IonBadge
                    color={w.isRest ? 'medium' : 'secondary'}
                    style={{
                      '--background': w.isRest ? '#c8c9cc' : 'var(--ion-color-secondary)',
                      '--color': 'white',
                      fontSize: '0.85rem',
                      marginTop: '8px'
                    }}
                  >
                    {w.isRest ? 'Rest' : w.focus}
                  </IonBadge>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>
    </IonContent>
  </IonPage>
);

export default Schedule;
