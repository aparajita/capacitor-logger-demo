<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Logger</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content
      :scroll-y="true"
      class="ion-padding-vertical"
    >
      <LoggerView />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/vue'
import LoggerView from '@/components/LoggerView.vue'
</script>
