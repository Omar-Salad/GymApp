// src/App.tsx
import React from 'react';
import {
  IonApp,
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonIcon,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';           // ← correct!
import { Redirect, Route } from 'react-router-dom';
import Home from './pages/Home';
import Workouts from './pages/Workouts';
import Schedule from './pages/Schedule';
import Progress from './pages/Progress';
import Login from './pages/Login';
import Register from './pages/Register';
import { barbell, calendar, body, analytics } from 'ionicons/icons';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
          <Route path="/home" component={Home} exact />
          <Route path="/workouts" component={Workouts} exact />
          <Route path="/schedule" component={Schedule} exact />
          <Route path="/progress" component={Progress} exact />
          <Route exact path="/" render={() => <Redirect to="/login" />} />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={body} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="workouts" href="/workouts">
            <IonIcon icon={barbell} />
            <IonLabel>Workouts</IonLabel>
          </IonTabButton>
          <IonTabButton tab="schedule" href="/schedule">
            <IonIcon icon={calendar} />
            <IonLabel>Schedule</IonLabel>
          </IonTabButton>
          <IonTabButton tab="progress" href="/progress">
            <IonIcon icon={analytics} />
            <IonLabel>Progress</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
