<template>
  <ion-list>
    <ion-list-header
      lines="none"
      class="pb-2"
    >
      Logging
    </ion-list-header>
    <ion-item>
      <LevelSelect
        v-model="loggerLevel"
        label="Logger level:"
        :include-silent="true"
      />
    </ion-item>

    <ion-item>
      <LevelSelect
        v-model="messageLevel"
        label="Message level:"
        :include-silent="false"
      />
    </ion-item>

    <ion-item>
      <ion-checkbox @ion-change="onChangeUseTextLevels">
        Use text labels:
      </ion-checkbox>
    </ion-item>

    <ion-item v-if="isIOS">
      <ion-checkbox @ion-change="onChangeUseSyslog"> Use syslog: </ion-checkbox>
    </ion-item>

    <ion-item>
      <ion-input
        label="Tag:"
        type="text"
        @ion-blur="onTagBlur"
      />
    </ion-item>

    <ion-item>
      <ion-input
        v-model="message"
        label="Message:"
        type="text"
        placeholder="Enter text to log"
      />
    </ion-item>
  </ion-list>

  <div class="mt-4 text-center space-x-6">
    <ion-button @click="onLog">log</ion-button>
    <ion-button @click="onTrace">trace</ion-button>
    <ion-button @click="dirSheetIsOpen = true">dir</ion-button>
    <ion-action-sheet
      :is-open="dirSheetIsOpen"
      header="Item to log"
      :buttons="dirActionSheet"
      @did-dismiss="dirSheetIsOpen = false"
    >
    </ion-action-sheet>

    <ion-button
      v-if="!isNative"
      @click="onClear"
    >
      clear
    </ion-button>
  </div>

  <ion-list class="mt-4">
    <ion-list-header
      lines="none"
      class="pb-2"
    >
      Timers
    </ion-list-header>
    <ion-item>
      <ion-input
        v-model="timerLabel"
        label="Label:"
        type="text"
      />
    </ion-item>
  </ion-list>

  <div class="mt-4 text-center space-x-6">
    <ion-button @click="onStartTimer">Start</ion-button>
    <ion-button @click="onLogTimer">Log</ion-button>
    <ion-button @click="onEndTimer">End</ion-button>
  </div>
</template>

<script setup lang="ts">
import { Logger, LogLevel } from '@aparajita/capacitor-logger'
import { Capacitor } from '@capacitor/core'
import type { IonCheckboxCustomEvent, IonInputCustomEvent } from '@ionic/core'
import {
  IonActionSheet,
  IonButton,
  IonCheckbox,
  IonInput,
  IonItem,
  IonList,
  IonListHeader,
} from '@ionic/vue'
import { ref, watch } from 'vue'
import LevelSelect from './LevelSelect.vue'
import logger from '@/logger'

const isNative = Capacitor.isNativePlatform()
const isIOS = Capacitor.getPlatform() === 'ios'
const loggerLevel = ref(logger.levelName)
const messageLevel = ref(LogLevel[LogLevel.info])
const message = ref('This is a test')
const timerLabel = ref('')
const dirSheetIsOpen = ref(false)

const dirActionSheet = [
  {
    text: 'Text',
    handler: (): void => {
      logger.dir(message.value)
    },
  },
  {
    text: 'Number',
    handler: (): void => {
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      logger.dir(27)
    },
  },
  {
    text: 'Boolean',
    handler: (): void => {
      logger.dir(true)
    },
  },
  {
    text: 'Array',
    handler: (): void => {
      logger.dir(dirActionSheet)
    },
  },
  {
    text: 'Object',
    handler: (): void => {
      logger.dir(dirSheetIsOpen)
    },
  },
  {
    text: 'null',
    handler: (): void => {
      logger.dir(null)
    },
  },
  {
    text: 'Cancel',
    role: 'cancel',
  },
]

watch(loggerLevel, (level) => {
  logger.levelName = level
})

function onLog(): void {
  logger.logWithTagAtLevel(messageLevel.value, logger.tag, message.value)
}

function onTrace(): void {
  logger.trace()
}

function onTagBlur(event: IonInputCustomEvent<FocusEvent>): void {
  if (logger.tag !== event.target.value) {
    logger.tag = String(event.target.value)
  }
}

function onChangeUseTextLevels(
  event: IonCheckboxCustomEvent<{ checked: boolean }>,
): void {
  if (event.detail.checked) {
    logger.labels = {
      debug: 'debug',
      info: 'info',
      warn: 'warn',
      error: 'error',
    }
  } else {
    logger.labels = Logger.kDefaultLevelLabels
  }
}

function onChangeUseSyslog(
  event: IonCheckboxCustomEvent<{ checked: boolean }>,
): void {
  logger.useSyslog = event.detail.checked
}

function onClear(): void {
  logger.clear()
}

function onStartTimer(): void {
  logger.time(timerLabel.value)
}

function onLogTimer(): void {
  logger.timeLog(timerLabel.value)
}

function onEndTimer(): void {
  logger.timeEnd(timerLabel.value)
}
</script>
