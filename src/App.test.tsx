import {fireEvent, render, screen} from "@testing-library/react";
import App from "./App";

describe('App', () => {
    beforeEach(() => {
        localStorage.clear();
        document.documentElement.classList.add('dark');
    });

    it('renders every section of the page', () => {
        const {container} = render(<App/>);

        ['home', 'skills', 'experience', 'projects', 'contact'].forEach((id) => {
            expect(container.querySelector(`section#${id}`)).toBeInTheDocument();
        });
        expect(screen.getByRole('heading', {level: 1})).toHaveTextContent('Veronika');
        expect(screen.getByRole('heading', {name: 'DoBoard'})).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: 'Spotfix'})).toBeInTheDocument();
    });

    it('toggles the theme and stores it in localStorage', () => {
        render(<App/>);

        fireEvent.click(screen.getByRole('button', {name: 'Switch to light theme'}));
        expect(document.documentElement).not.toHaveClass('dark');
        expect(localStorage.getItem('theme')).toBe('light');

        fireEvent.click(screen.getByRole('button', {name: 'Switch to dark theme'}));
        expect(document.documentElement).toHaveClass('dark');
        expect(localStorage.getItem('theme')).toBe('dark');
    });
});
