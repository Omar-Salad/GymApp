// src/pages/Home.tsx
import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonIcon
} from '@ionic/react';
import { barbell, calendar, body, logOutOutline } from 'ionicons/icons';
import { useHistory } from 'react-router';

const Home: React.FC = () => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.clear();
    history.push('/login');
  };

  // common card style
  const cardBase: React.CSSProperties = {
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    background: 'white',
    transition: 'transform 0.2s',
    cursor: 'pointer',
  };

  return (
    <IonPage>
      {/* Top bar */}
      <IonHeader>
        <IonToolbar style={{ '--background': 'var(--ion-color-primary)' } as React.CSSProperties}>
          <IonTitle style={{ color: 'white', fontWeight: 500 }}>
            Welcome to FitTrack
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent
        fullscreen
        style={{
          '--background': 'linear-gradient(135deg, #1e3c72, #2a5298)',
          padding: '16px'
        } as React.CSSProperties}
      >
        {/* Hero text */}
        <h2
          style={{
            color: 'white',
            textAlign: 'center',
            margin: '24px 0',
            fontSize: '1.5rem',
            fontWeight: 500
          }}
        >
          Your Fitness Journey Starts Here
        </h2>

        {/* Logout */}
        <IonButton
          expand="block"
          onClick={handleLogout}
          style={{
            '--background': 'rgba(255,255,255,0.3)',
            color: 'white',
            marginBottom: '20px',
            '--border-radius': '999px'
          } as React.CSSProperties}
        >
          <IonIcon slot="start" icon={logOutOutline} />
          Logout
        </IonButton>

        {/* Feature cards */}
        <IonGrid>
          <IonRow style={{ gap: '16px' }}>
            {[{
              title: 'Workouts',
              icon: barbell,
              link: '/workouts',
              btnColor: 'var(--ion-color-primary)'
            }, {
              title: 'Schedule',
              icon: calendar,
              link: '/schedule',
              btnColor: 'var(--ion-color-secondary)'
            }, {
              title: 'Progress',
              icon: body,
              link: '/progress',
              btnColor: 'var(--ion-color-success)'
            }].map((item, i) => (
              <IonCol size="12" sizeMd="4" key={i}>
                <IonCard
                  routerLink={item.link}
                  style={cardBase}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-6px)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = '')}
                >
                  <IonCardHeader
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      padding: '24px 0 16px'
                    }}
                  >
                    <IonIcon
                      icon={item.icon}
                      style={{ fontSize: '2.4rem', color: item.btnColor }}
                    />
                    <IonCardTitle style={{ marginTop: '8px', fontWeight: 600 }}>
                      {item.title}
                    </IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent style={{ padding: '0 16px 16px' }}>
                    <IonButton
                      expand="block"
                      style={{
                        '--background': item.btnColor,
                        '--color': 'white',
                        borderRadius: '999px'
                      } as React.CSSProperties}
                    >
                      View {item.title}
                    </IonButton>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
