import {
  Accordion,
  AccordionContent,
  AccordionDescription,
  AccordionPanel,
  AccordionTitle
} from './Accordion';

import React from 'react';
import renderer from 'react-test-renderer';

test('Renders basic accordion', () => {
  const component = renderer.create(
    <Accordion>
      <AccordionPanel
        accordionTitle={
          <AccordionTitle>Basic Accordion Title 1</AccordionTitle>
        }
        accordionContent={
          <AccordionContent>Basic Accordion Content 1</AccordionContent>
        }
      />
      <AccordionPanel
        accordionTitle={
          <AccordionTitle>Basic Accordion Title 2</AccordionTitle>
        }
        accordionContent={
          <AccordionContent>Basic Accordion Content 2</AccordionContent>
        }
      />
    </Accordion>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders accordion with description', () => {
  const component = renderer.create(
    <Accordion>
      <AccordionPanel
        accordionTitle={<AccordionTitle>Accordion Title 1</AccordionTitle>}
        accordionContent={
          <AccordionContent>Accordion Content 1</AccordionContent>
        }
        accordionDescription={
          <AccordionDescription>Accordion Description 1</AccordionDescription>
        }
      />
      <AccordionPanel
        accordionTitle={<AccordionTitle>Accordion Title 2</AccordionTitle>}
        accordionContent={
          <AccordionContent>Accordion Content 2</AccordionContent>
        }
        accordionDescription={
          <AccordionDescription>Accordion Description 2</AccordionDescription>
        }
      />
    </Accordion>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders multi-panel accordion', () => {
  const component = renderer.create(
    <Accordion accordionMultiPanel>
      <AccordionPanel
        accordionTitle={
          <AccordionTitle>Multi Panel Accordion Title 1</AccordionTitle>
        }
        accordionContent={
          <AccordionContent>Multi Panel Accordion Content 1</AccordionContent>
        }
      />
      <AccordionPanel
        accordionTitle={
          <AccordionTitle>Multi Panel Accordion Title 2</AccordionTitle>
        }
        accordionContent={
          <AccordionContent>Multi Panel Accordion Content 2</AccordionContent>
        }
      />
    </Accordion>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
