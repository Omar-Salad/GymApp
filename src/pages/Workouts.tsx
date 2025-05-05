// src/pages/Workouts.tsx
import React, { useState, useEffect } from 'react';
import {
  IonPage, IonHeader, IonToolbar, IonTitle,
  IonContent, IonList, IonItem, IonLabel,
  IonCheckbox, IonNote, IonFab, IonFabButton, IonIcon
} from '@ionic/react';
import { add } from 'ionicons/icons';

const Workouts: React.FC = () => {
  const [workouts, setWorkouts] = useState<{name:string;done:boolean}[]>([]);
  useEffect(() => {
    const stored = localStorage.getItem('workouts');
    const list = stored ? JSON.parse(stored) : [
      { name: 'Push-ups', done: false },
      { name: 'Sit-ups', done: false },
      { name: 'Squats', done: false },
      { name: 'Jump Rope', done: false },
      { name: 'Plank - 1 min', done: false }
    ];
    setWorkouts(list);
    localStorage.setItem('workouts', JSON.stringify(list));
  }, []);
  const toggle = (i:number) => {
    const u = [...workouts]; u[i].done = !u[i].done;
    setWorkouts(u); localStorage.setItem('workouts', JSON.stringify(u));
  };
  const addWorkout = () => {
    const name = prompt('New workout name');
    if (name) {
      const u = [...workouts, { name, done: false }];
      setWorkouts(u); localStorage.setItem('workouts', JSON.stringify(u));
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar style={{ '--background': 'var(--ion-color-primary)' }}>
          <IonTitle style={{ color: '#fff' }}>Workout Plans</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent
        fullscreen
        style={{
          '--background': 'linear-gradient(135deg, #1e3c72, #2a5298)',
          padding: '16px'
        }}
      >
        <IonList>
          {workouts.map((w,i) => (
            <IonItem
              key={i}
              style={{
                background: '#C9D85F',
                borderRadius: '8px',
                marginBottom: '12px',
                boxShadow: '0 2px 6px rgba(0,0,0,0.05)'
              }}
            >
              <IonCheckbox
                slot="start"
                checked={w.done}
                onIonChange={() => toggle(i)}
                style={{ '--checker-color-checked': 'var(--ion-color-secondary)' }}
              />
              <IonLabel>{w.name}</IonLabel>
              {w.done && (
                <IonNote
                  slot="end"
                  style={{ fontWeight: 600, color: 'var(--ion-color-secondary)' }}
                >
                  Done
                </IonNote>
              )}
            </IonItem>
          ))}
        </IonList>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton
            onClick={addWorkout}
            style={{ '--background': 'var(--ion-color-secondary)' }}
          >
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Workouts;
