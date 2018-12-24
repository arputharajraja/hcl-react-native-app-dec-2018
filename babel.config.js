// babel.config.js


//workaround 
// yarn add --dev babel-jest babel-core@^7.0.0-bridge.0 @babel/core


module.exports = function (api) {
    api.cache(true)
  
    return {
      presets: ['module:metro-react-native-babel-preset']
    }
  }