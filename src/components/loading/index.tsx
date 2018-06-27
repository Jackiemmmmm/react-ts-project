import * as React from 'react';
// import styles from './styles.css';

interface InterfaceLoading {
  error?: boolean;
  errorCallBack?: any;
}

const Loading = ({ error = false, errorCallBack }: InterfaceLoading) => (
  <div>
    {error
      ? (
        <a onClick={errorCallBack}>
          {error}
        </a>
      )
      : 'Loading...'}
  </div>
);

export default Loading;
