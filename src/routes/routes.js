import react from 'react';
import { Route, IndexRoute } from 'react-router';

export default (
  <Route path='/' component={}>
    <IndexRoute component={HomeScreen}/>
    <Route path='login'>
      <IndexRoute component={LoginScreen}/>
      <Route path='new' component={SignUpScreen}/>
    </Route>
    <Route path='e/:URLToken'>
      <IndexRoute component={EpisodeScreen}/>
    </Route>
    <Route path='search' component={SearchScreen}>
    <Route path='_'>
      <Route path='womp' component={ErrorScreen}/>
    </Route>
  </Route>
)
