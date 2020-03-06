import React from 'react';
import { Button } from './Button';
import renderer from 'react-test-renderer';

test('Renders basic button', () => {
  const component = renderer.create(<Button>Submit</Button>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders primary button', () => {
  const component = renderer.create(<Button primary>Submit</Button>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders solid success button', () => {
  const component = renderer.create(<Button btnState="success">Submit</Button>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders solid danger button', () => {
  const component = renderer.create(<Button btnState="danger">Submit</Button>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders solid warning button', () => {
  const component = renderer.create(<Button btnState="warning">Submit</Button>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders info button', () => {
  const component = renderer.create(<Button btnState="info">Submit</Button>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders outline success button', () => {
  const component = renderer.create(
    <Button btnState="success" btnStyle="outline">
      Submit
    </Button>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders outline danger button', () => {
  const component = renderer.create(
    <Button btnState="danger" btnStyle="outline">
      Submit
    </Button>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders outline warning button', () => {
  const component = renderer.create(
    <Button btnState="warning" btnStyle="outline">
      Submit
    </Button>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders info outline button', () => {
  const component = renderer.create(
    <Button btnState="info" btnStyle="outline">
      Submit
    </Button>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders small button', () => {
  const component = renderer.create(<Button small>Submit</Button>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders inverse button', () => {
  const component = renderer.create(<Button inverse>Submit</Button>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders disabled button', () => {
  const component = renderer.create(<Button disabled>Submit</Button>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders flat button', () => {
  const component = renderer.create(<Button btnStyle="flat">Submit</Button>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
