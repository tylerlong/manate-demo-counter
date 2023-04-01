import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { manage } from 'manate';
import { auto } from 'manate/react';
// import { Component } from 'manate/react';
import { Button } from 'antd-mobile';

class Store {
  public count = 10;
  public increase() {
    this.count += 1;
  }
  public decrease() {
    this.count -= 1;
  }
}
const store = manage(new Store());

// functional component
const App = (props: { store: Store }) => {
  const render = () => {
    const store = props.store;
    return (
      <>
        <Button color="primary" fill="outline" onClick={() => store.decrease()}>
          -
        </Button>
        {store.count}
        <Button color="primary" fill="outline" onClick={() => store.increase()}>
          +
        </Button>
      </>
    );
  };
  return auto(render, props);
};

// // class component
// class App extends Component<{ store: Store }> {
//   public render() {
//     const store = this.props.store;
//     return (
//       <>
//         <Button color="primary" fill="outline" onClick={() => store.decrease()}>
//           -
//         </Button>
//         {store.count}
//         <Button color="primary" fill="outline" onClick={() => store.increase()}>
//           +
//         </Button>
//       </>
//     );
//   }
// }

const container = document.createElement('div');
document.body.appendChild(container);
const root = createRoot(container);
root.render(
  <StrictMode>
    <App store={store} />
  </StrictMode>,
);
