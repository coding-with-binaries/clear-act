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
  Badge,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalTitle
} from '@clear-act/lib';
import React, { useState } from 'react';

function App() {
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);
  return (
    <>
      <Button onClick={openModal}>This</Button>
      <Button onClick={openModal}>That</Button>
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
      <Modal
        modalOpen={modal}
        onModalClose={closeModal}
        modalTitle={<ModalTitle>I have a nice title</ModalTitle>}
        modalBody={<ModalBody>But not much to say..</ModalBody>}
        modalFooter={
          <ModalFooter>
            <Button primary onClick={closeModal}>
              Ok
            </Button>
          </ModalFooter>
        }
      />
      <>
        <Badge badgeType="info">Info Badge</Badge>
        <Badge badgeType="success">Success Badge</Badge>
        <Badge badgeType="warning">Warning Badge</Badge>
        <Badge badgeType="danger">Danger Badge</Badge>
      </>
    </>
  );
}

export default App;
