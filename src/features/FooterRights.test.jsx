import { render, screen } from '@testing-library/react';
import MatchMediaMock from 'jest-matchmedia-mock';

import FooterRights from './FooterRights'

let matchMedia;

describe('Footer rights component', () => {
    beforeAll(() => {
      matchMedia = new MatchMediaMock();
    });
   
    afterEach(() => {
      matchMedia.clear();
    });

    it('Footer rights renders', () => {
      render(<FooterRights />);
    })

    it('Footer rights snapshot', () => {
        const policy = render(<FooterRights />);
        expect(policy).toMatchSnapshot();
    })
})