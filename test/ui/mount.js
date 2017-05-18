// @flow
import assert from 'assert';
import React from 'react';
import mount from 'src/ui/mount';

describe('ui/mount', () => {
  it('mount to element', async () => {
    const el = document.createElement('div');
    await mount(el);
    assert(el.innerHTML !== '');
  });
});
