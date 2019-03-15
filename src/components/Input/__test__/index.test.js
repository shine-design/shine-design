import React from 'react';
import {render} from 'enzyme';
import Input from '../index';

describe('Input', () => {
    it('renders correctly', () => {
        const wrapper = render(<Input>Follow</Input>);
        expect(wrapper).toMatchSnapshot();
    });
});