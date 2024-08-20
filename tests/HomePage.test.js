// src/tests/HomePage.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../HomePage'; 

describe('HomePage', () => {
    beforeEach(() => {
        render(<HomePage />);
    });

    it('renders the logo', () => {
        const logoElement = screen.getByAltText(/Lrnr Logo/i);
        expect(logoElement).toBeInTheDocument();
    });

    it('renders the introductory message', () => {
        const introMessage = screen.getByText(/Your guided path to programming enlightenment/i);
        expect(introMessage).toBeInTheDocument();
    });

    it('renders the BEGIN JOURNEY button', () => {
        const buttonElement = screen.getByText(/BEGIN JOURNEY/i);
        expect(buttonElement).toBeInTheDocument();
    });

    it('renders the features section', () => {
        const featuresHeading = screen.getByText(/Personalized Quizzes/i);
        expect(featuresHeading).toBeInTheDocument();
    });

    it('renders the correct content for each feature', () => {
        const personalizedQuizzesText = screen.getByText(/Greetings, young padawan/i);
        const rewardingText = screen.getByText(/challenging and rewarding/i);
        const personalSMEText = screen.getByText(/personal subject matter expert/i);

        expect(personalizedQuizzesText).toBeInTheDocument();
        expect(rewardingText).toBeInTheDocument();
        expect(personalSMEText).toBeInTheDocument();
    });

    it('renders the feature icons', () => {
        const iconElements = screen.getAllByClassName('fas');
        expect(iconElements.length).toBe(3); 
    });
});
