import { createBrowserHistory } from 'history';
import * as React from 'react';
import { hot } from 'react-hot-loader';
import {
  Route, Router, Switch,
} from 'react-router-dom';

import NoMatch from './containers/no-match';

import Loading from './components/loading';



class AsyncComponent extends React.Component<{ getComponent?: any }, { Component?: any }> {
  public Component = null;

  constructor(props: any) {
    super(props);
    this.state = { Component: null };
  }

  public componentWillMount() {
    const { Component } = this.state;
    if (!Component) {
      this._rerenderComponent();
    }
  }

  public componentWillReceiveProps() {
    if (module.hot) {
      setImmediate(() => this._rerenderComponent());
    }
  }

  public render() {
    const { Component } = this.state;
    if (Component) {
      return <Component {...this.props} />;
    }
    return <Loading />;
  }

  private _rerenderComponent() {
    const { getComponent } = this.props;
    return getComponent().then((Component: object) => {
      this.setState({ Component });
    }, () => {
      this.setState({ Component: NoMatch });
    });
  }

}

const asyncComponent = (getComponent: object) => (props: object) => (
  <AsyncComponent getComponent={getComponent} {...props} />
);

const history = createBrowserHistory();

const Home = asyncComponent(() => import(/* webpackChunkName: "Home" */'./containers/home').then(module => module.default));

const App = () => (
  <Router history={history}>
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route component={NoMatch} />
    </Switch>
  </Router>
)

export default hot(module)(App);
