
// var ReactNative = require('react-native')
// var {
//   AppRegistry
// } = ReactNative
import React,       { Component }        from 'react'
import ReactNative, { AppRegistry }      from 'react-native'
import              { Router, Scene }    from 'react-native-router-flux'

import RootScene                  from './js/scenes/RootScene'
import GoogleImagesSearchScene    from './js/scenes/network/GoogleImagesSearchScene'
import MapViewScene               from './js/scenes/UI/MapViewScene'
import MovieScene                 from './js/movie/main_screen'

export default class ReactNativeExperiments extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="rootScene" component={RootScene} title="RootScene Title" initial={true} />
          <Scene key="movieScene" component={MovieScene} title="MovieScene Title" />
          <Scene key="GoogleImagesSearchScene" component={GoogleImagesSearchScene} title="Images Search" />
          <Scene key="MapViewScene" component={MapViewScene} title="Map View" />
        </Scene>
      </Router>
    )
  }
}
AppRegistry.registerComponent('ReactNativeExperiments', () => ReactNativeExperiments)
