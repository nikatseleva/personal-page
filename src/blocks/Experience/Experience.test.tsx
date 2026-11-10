import {fireEvent, render, screen} from "@testing-library/react";
import Experience from "./index";

describe('Experience', () => {
    it('expands and collapses job details', () => {
        render(<Experience/>);

        const [toggle] = screen.getAllByRole('button', {name: /show details/});
        expect(toggle).toHaveAttribute('aria-expanded', 'false');

        fireEvent.click(toggle);
        expect(toggle).toHaveAttribute('aria-expanded', 'true');
        expect(toggle).toHaveTextContent('hide details');

        fireEvent.click(toggle);
        expect(toggle).toHaveAttribute('aria-expanded', 'false');
    });

    it('does not render a toggle for jobs without details', () => {
        render(<Experience/>);

        expect(screen.getAllByRole('button', {name: /show details/})).toHaveLength(2);
    });
});
