import React from 'react';
import { Alerts, Alert, AlertItem } from './Alert';
import renderer from 'react-test-renderer';

test('Renders basic alert', () => {
  const component = renderer.create(
    <Alert>
      <AlertItem>Basic Alert</AlertItem>
    </Alert>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders info alert', () => {
  const component = renderer.create(
    <Alert alertState="info">
      <AlertItem>Info Alert</AlertItem>
    </Alert>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders success alert', () => {
  const component = renderer.create(
    <Alert alertState="success">
      <AlertItem>Success Alert</AlertItem>
    </Alert>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders warning alert', () => {
  const component = renderer.create(
    <Alert alertState="warning">
      <AlertItem>Warning Alert</AlertItem>
    </Alert>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders danger alert', () => {
  const component = renderer.create(
    <Alert alertState="danger">
      <AlertItem>Danger Alert</AlertItem>
    </Alert>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders non-dismissable alert', () => {
  const component = renderer.create(
    <Alert alertClosable={false}>
      <AlertItem>Non Dismissable Alert</AlertItem>
    </Alert>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders closed alert', () => {
  const component = renderer.create(
    <Alert alertClosed={true}>
      <AlertItem>Closed Alert</AlertItem>
    </Alert>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders small info alert', () => {
  const component = renderer.create(
    <Alert alertState="info" small>
      <AlertItem>Small Info Alert</AlertItem>
    </Alert>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders small success alert', () => {
  const component = renderer.create(
    <Alert alertState="success" small>
      <AlertItem>Small Success Alert</AlertItem>
    </Alert>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders small warning alert', () => {
  const component = renderer.create(
    <Alert alertState="warning" small>
      <AlertItem>Small Warning Alert</AlertItem>
    </Alert>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders small danger alert', () => {
  const component = renderer.create(
    <Alert alertState="danger" small>
      <AlertItem>Small Danger Alert</AlertItem>
    </Alert>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders alert with custom icon', () => {
  const component = renderer.create(
    <Alert alertState="info">
      <AlertItem iconShape="star">Alert with custom icon</AlertItem>
    </Alert>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders alert with multiple items', () => {
  const component = renderer.create(
    <Alert alertState="success">
      <AlertItem iconShape="rupee">Alert For Rupees Credited</AlertItem>
      <AlertItem iconShape="savings">Alert For Savings Achievement</AlertItem>
    </Alert>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders app-level info alert', () => {
  const component = renderer.create(
    <Alert alertState="info" alertAppLevel>
      <AlertItem>App Level Info Alert</AlertItem>
    </Alert>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders app-level success alert', () => {
  const component = renderer.create(
    <Alert alertState="success" alertAppLevel>
      <AlertItem>App Level Success Alert</AlertItem>
    </Alert>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders app-level warning alert', () => {
  const component = renderer.create(
    <Alert alertState="warning" alertAppLevel>
      <AlertItem>App Level Warning Alert</AlertItem>
    </Alert>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders app-level danger alert', () => {
  const component = renderer.create(
    <Alert alertState="danger" alertAppLevel>
      <AlertItem>App Level Danger Alert</AlertItem>
    </Alert>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders multiple paged app-level alerts', () => {
  const component = renderer.create(
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
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
