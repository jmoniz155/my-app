import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';
import IssueItem from '../../../../../00-practice-app/src/components/IssueItem';
// TODO: Import the IssueItem component her
let container = null;

beforeEach(() => {
  // Setup a DOM element as the target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // Cleanup on exiting to prevent this test from altering the results of future tests
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('IssueItem', () => {
  const issue = {
    url: 'https://api.github.com/repos/microsoft/vscode/issues/68',
    html_url: 'https://github.com/microsoft/vscode/issues/68',
    id: 117635943,
    node_id: 'MDU6SXNzdWUxMTc2MzU5NDM=',
    number: 68,
    title: 'Git: Support git history in VSCode',
  };

  it('should contain the expected text', () => {
    act(() => {
      // TODO: Add a render code block that checks to see if the component
      // renders properly
      // - HINT: The render method needs a target "container"
      // - HINT: Provide an `issue` prop and use the `issue` object in this test
      //   as the value.
      render();
    });
    expect(container.textContent).toBe('Git: Support git history in VSCode');
  });

  // TODO: render the IssueItem component and format the rendered HTML with the
  // pretty package before saving it as an snapshot.
  // - HINT: How can the snapshot test in SearchBar be used as a reference for
  //   writing this test?
  it('should match snapshot', () => {});
});
