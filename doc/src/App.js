import '@webcomponents/custom-elements';
import '@clr/icons';
import '@clr/icons/shapes/all-shapes';

import {
  Accordion,
  AccordionContent,
  AccordionDescription,
  AccordionPanel,
  AccordionTitle,
  Alert,
  AlertItem,
  Alerts,
  Button
} from '@clear-act/lib';

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
      <Accordion accordionMultiPanel>
        <AccordionPanel
          accordionTitle={<AccordionTitle>Item 1</AccordionTitle>}
          accordionContent={<AccordionContent>Content 1</AccordionContent>}
          accordionDescription={
            <AccordionDescription>Description 1</AccordionDescription>
          }
        />
        <AccordionPanel
          accordionTitle={<AccordionTitle>Item 2</AccordionTitle>}
          accordionContent={<AccordionContent>Content 2</AccordionContent>}
        />
      </Accordion>
    </>
  );
}

export default App;
