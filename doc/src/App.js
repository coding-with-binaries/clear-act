import '@clr/icons';
import '@clr/icons/shapes/all-shapes';
import '@webcomponents/custom-elements';
import { Button, Alerts, Alert, AlertItem } from '@clreact/lib';
import React from 'react';

function App() {
  return (
    <>
      <Button onClick={console.log}>This</Button>
      <Button onClick={console.log}>That</Button>
      <Alerts>
        <Alert alertState="info">
          <AlertItem>Info Alert</AlertItem>
        </Alert>
        <Alert alertState="warning">
          <AlertItem>Warning Alert</AlertItem>
        </Alert>
        <Alert alertState="danger">
          <AlertItem>Danger Alert</AlertItem>
        </Alert>
      </Alerts>
    </>
  );
}

export default App;
