import * as React from 'react';

class NoMatch extends React.PureComponent<{ history: any }, { time: number }> {
  public timeout?: any;
  public renderTimeout?: any;
  constructor(props: any) {
    super(props);
    this.state = {
      time: 3,
    };
    this.timeout = null;
    this.renderTimeout = null;
  }

  public componentWillMount() {
    const { history } = this.props;
    for (let i = 1; i < 4; i += 1) {
      this.renderTimeout = setTimeout(() => {
        const { time } = this.state;
        this.setState({ time: time - 1 });
      }, i * 1000);
    }
    this.timeout = setTimeout(() => {
      history.replace('/');
    }, 3000);
  }

  public componentWillUnmount() {
    clearTimeout(this.timeout);
    clearTimeout(this.renderTimeout);
  }

  public render() {
    const { time } = this.state;
    return (
      <div>
        404
        <br />
        {`${time}s later will go back`}
      </div>
    );
  }
}

export default NoMatch;
