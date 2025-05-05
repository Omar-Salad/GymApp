import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.technyks.GymApp',
  appName: 'GymApp',
  webDir: 'dist',            
  
 
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#04A367",
      showSpinner: false,
      androidSpinnerStyle: "small",
      iosSpinnerStyle: "small",
      splashFullScreen: true,
      splashImmersive: true,
    },
  },
};

export default config;
