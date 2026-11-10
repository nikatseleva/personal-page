import {fireEvent, render, screen, within} from "@testing-library/react";
import Header from "./index";

describe('Header', () => {
    it('opens the mobile menu and closes it after navigation', () => {
        render(<Header/>);

        fireEvent.click(screen.getByRole('button', {name: 'Open menu'}));
        expect(screen.getByRole('button', {name: 'Close menu'})).toHaveAttribute('aria-expanded', 'true');

        const lists = screen.getAllByRole('list');
        fireEvent.click(within(lists[1]).getByText('projects'));

        expect(screen.getByRole('button', {name: 'Open menu'})).toHaveAttribute('aria-expanded', 'false');
        expect(within(screen.getByRole('list')).getByText('projects')).toHaveAttribute('aria-current', 'location');
    });

    it('marks the clicked desktop link as active', () => {
        render(<Header/>);

        const link = within(screen.getByRole('list')).getByText('experience');
        fireEvent.click(link);
        expect(link).toHaveAttribute('aria-current', 'location');
    });
});
