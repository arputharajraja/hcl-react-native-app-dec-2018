# Caution

- Before running link commands, commit the source code.
- check for gradle and MainActivity.java and MainApplicaiton.java file
- 
# Repeat commands

Cmd 1

c:\extractedfolder\productnativeapp> npm install

c:\extractedfolder\productnativeapp> npm start 

Cmd 2
c:\extractedfolder\productnativeapp> react-native run-android


# commands



npm install -g react-native-cli


 react-native init ProductNativeApp


To clone this repo, 


git clone https://github.com/nodesense/hcl-react-native-app-dec-2018 ProductNativeApp


 cd ProductNativeApp


## Install Redux

yarn add redux react-redux redux-thunk

## Install React Navigation


yarn add react-navigation

## Install Navigation, Link to iOS and Android project

yarn add react-native-gesture-handler

react-native link react-native-gesture-handler

## Install Icons, Link to iOS and Android project

yarn add react-native-vector-icons

react-native link react-native-vector-icons

npm install


## Install File System, Link to iOS and Android project

```
npm install react-native-fs --save

react-native link react-native-fs
```





## Install React Native Camera

```
npm install react-native-camera --save

react-native link react-native-camera 
```



For Android

```

  <uses-permission android:name="android.permission.CAMERA" />

 <uses-permission android:name="android.permission.RECORD_AUDIO"/>
  <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
  <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />

```

for iosm, add to plist info

```
<key>NSCameraUsageDescription</key>
<string>Your message to user when the camera is accessed for the first time</string>

<!-- Include this only if you are planning to use the camera roll -->
<key>NSPhotoLibraryUsageDescription</key>
<string>Your message to user when the photo library is accessed for the first time</string>

<!-- Include this only if you are planning to use the microphone for video recording -->
<key>NSMicrophoneUsageDescription</key>
<string>Your message to user when the microphone is accessed for the first time</string>

```

# Permission

https://www.npmjs.com/package/react-native-permissions

```
npm install --save react-native-permissions

react-native link react-native-permissions

```


## Geo Location

Android manifest

```xml
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />


```


for ios

```xml
<key>NSLocationWhenInUseUsageDescription</key>
<string>We need your location to track you</string>
```


## Debug

http://localhost:8081/debugger-ui/



start this in different command prompt, runs the bundler with clean cache



npm start


react-native run-android

react-native run-ios



Other links

https://gist.github.com/gopalakrishnan-subramani/621c419490caaf8a4aaeadc2d222d85a


## TEST

Refer https://github.com/facebook/react-native/issues/21241

