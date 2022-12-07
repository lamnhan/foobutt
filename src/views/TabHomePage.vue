<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Foobutt</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Foobutt</ion-title>
        </ion-toolbar>
      </ion-header>
      <main>
        <AppReactions />
        <AppAds01 />
        <AppAds02 />
      </main>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

import AppReactions from '../components/AppReactions.vue';
import AppAds01 from '../components/AppAds01.vue';
import AppAds02 from '../components/AppAds02.vue';

export default  defineComponent({
  name: 'TabHomePage',
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    AppReactions,
    AppAds01,
    AppAds02,
  }
});
</script>
