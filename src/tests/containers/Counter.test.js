import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';

import Counter from 'containers/Counter';

test('Checks winsCounter, winningPlayer and winDifference', () => {
  const names = { player1: 'Martin', player2: 'David' };

  const { getAllByText, getByText } = render(<Counter names={names} />);
  const player1Counter = getAllByText('0')[0];
  const addWinButton = getAllByText('Add Win!')[0];

  fireEvent.click(addWinButton);

  const winnerName = getByText('Current Winner: Martin');
  const winDifference = getByText('Win difference: 1');

  expect(player1Counter).toHaveTextContent('1');
  expect(winnerName).toBeInTheDocument();
  expect(winDifference).toBeInTheDocument();
});
