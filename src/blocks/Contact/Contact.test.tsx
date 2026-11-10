import {act, fireEvent, render, screen} from "@testing-library/react";
import Contact from "./index";

describe('Contact', () => {
    it('copies the email to the clipboard', async () => {
        const writeText = jest.fn().mockResolvedValue(undefined);
        Object.defineProperty(navigator, 'clipboard', {value: {writeText}, configurable: true});

        render(<Contact/>);

        await act(async () => {
            fireEvent.click(screen.getByRole('button', {name: 'Copy email'}));
        });

        expect(writeText).toHaveBeenCalledWith('nika.tseleva@gmail.com');
        expect(screen.getByRole('status')).toHaveTextContent('copied!');
    });
});
