import { render, screen } from '@testing-library/react';
import  userEvent from "@testing-library/user-event";
import Greeting from './Greeting';

describe('Greeting component', () => {
	test('renders hello world!', () => {
		render(<Greeting />);
		const p = screen.getByText(/hello world/i);
		expect(p).toBeInTheDocument();
	});
    
	test('renders Hello World!', () => {
		render(<Greeting />);
		const helloWorld = screen.getByText('Hello World!');
		expect(helloWorld).toBeInTheDocument();
	});

	test('renders Hello World', () => {
		render(<Greeting />);
		const helloWorld = screen.getByText('Hello World', { exact: false });
		expect(helloWorld).toBeInTheDocument();
	});

	test("renders text good to see you if the button was not clicked", () => {
		render(<Greeting />);
		const itsGoodToSeeYou = screen.getByText("it's good to see you!", {
			exact: false,
		});
		expect(itsGoodToSeeYou).toBeInTheDocument();
	});

	test("does not renders text good to see you if the button was was clicked", () => {
		render(<Greeting />);
        const btn = screen.getByRole('button')
        userEvent.click(btn)
		const itsGoodToSeeYou = screen.queryByText("it's good to see you!", {
			exact: false,
		});
		expect(itsGoodToSeeYou).not.toBeInTheDocument()
	});

	test('renders changed text after btn was click', () => {
		render(<Greeting />);
        const btn = screen.getByRole('button')
        userEvent.click(btn)
		const changed = screen.getByText('changed', { exact: false });
		expect(changed).toBeInTheDocument();
	});
});
