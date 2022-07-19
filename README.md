<div class="markdown-body">

# capacitor-logger-demo&nbsp;&nbsp;[![GitHub version](https://badge.fury.io/gh/aparajita%2Fcapacitor-logger-demo.svg)](https://badge.fury.io/gh/aparajita%2Fcapacitor-logger-demo)

This [Ionic](https://ionicframework.com) application provides a demo of all of the capacibilities of the [capacitor-logger](https://github.com/aparajita/capacitor-logger) Capacitor plugin.

## Installation

```shell
git clone https://github.com/aparajita/capacitor-logger-demo.git
cd capacitor-logger-demo
pnpm install  # npm install
pnpm build  # npm run build
```

## Usage

### Web

To launch the demo in a browser:

```shell
pnpm dev  # npm run dev
```

Once the demo is running, open the browser console to view the log output.

### iOS

To launch the demo in Xcode:

```shell
pnpm ios.dev  # npm run ios.dev
```

- Once Xcode opens, select the device or simulator you wish to run the demo on and click Run.
- When the demo app opens, you can view the log output in the Xcode debug log.
- Open `Console.app` and click on the simulator in the left sidebar.
- Click "Start streaming" in the main view.
- Click in the Search field, enter "Logger", and hit Return.

If "Use syslog" is off in the demo, you will see log output only in the Xcode debug log. If "Use syslog" is on, you will see log output in the Xcode debug log and in `Console.app`.

> Note: Debug log messages from a simulator will not appear in `Console.app`.

### Android

To launch the demo in Android Studio:

```shell
pnpm android.dev  # npm run ios.dev
```

- Once Android Studio opens, select the device or simulator you wish to run the demo on and click Run.
- When the demo app opens, open the `Logcat` tab and enter "Logger" in the search field.

</div>
