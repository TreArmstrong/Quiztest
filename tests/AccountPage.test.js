// src/tests/AccountPage.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import AccountPage from '../AccountPage'; 

describe('AccountPage', () => {
    beforeEach(() => {
        render(<AccountPage />);
    });

    it('renders the Account heading', () => {
        const headingElement = screen.getByText(/Account/i);
        expect(headingElement).toBeInTheDocument();
    });

    it('renders the Streak section with correct text', () => {
        const streakHeading = screen.getByText(/Streak/i);
        const streakMessage = screen.getByText(/You have a streak of 5 days!/i);
        expect(streakHeading).toBeInTheDocument();
        expect(streakMessage).toBeInTheDocument();
    });

    it('renders the Platinum Quizzes section with correct quizzes', () => {
        const platinumHeading = screen.getByText(/Platinum Quizzes/i);
        expect(platinumHeading).toBeInTheDocument();
        expect(screen.getByText(/golang - Intermediate/i)).toBeInTheDocument();
        expect(screen.getByText(/JavaScript - beginner/i)).toBeInTheDocument();
        expect(screen.getByText(/AWS - beginner/i)).toBeInTheDocument();
    });

    it('renders the lrnr Level section with correct level and XP', () => {
        const levelHeading = screen.getByText(/lrnr Level: 2/i);
        const xpMessage = screen.getByText(/150\/200 xp/i);
        expect(levelHeading).toBeInTheDocument();
        expect(xpMessage).toBeInTheDocument();
    });
});
