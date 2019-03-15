import React from 'react';
import {render} from 'enzyme';
import Button from '../index';

describe('Button', () => {
    it('renders correctly', () => {
        const wrapper = render(<Button>Follow</Button>);
        expect(wrapper).toMatchSnapshot();
    });
});