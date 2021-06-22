import { render, screen } from '@testing-library/react';
import MainContainer from './containers/MainContainer';
// import App from './App';


test('renders learn react link', () => {
  render(<MainContainer/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
