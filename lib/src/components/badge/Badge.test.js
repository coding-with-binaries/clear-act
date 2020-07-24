import { Badge } from './Badge';

import React from 'react';
import renderer from 'react-test-renderer';

test('Renders Basic badge', () => {
  const component = renderer.create(<Badge>Basic Badge</Badge>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders Status badges', () => {
  const component = renderer.create(
    <>
      <Badge badgeType="info">Info Badge</Badge>
      <Badge badgeType="success">Success Badge</Badge>
      <Badge badgeType="warning">Warning Badge</Badge>
      <Badge badgeType="danger">Danger Badge</Badge>
    </>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
