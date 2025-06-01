// frontend/src/App.test.js
import { render, screen } from '@testing-library/react';

describe('App', () => {
  afterEach(() => {
    jest.resetModules();
  });

  test('перевірка форми, якщо токен відсутній', () => {
    jest.doMock('../components/useAuthDet', () => () => ({
      token: null,
      setToken: jest.fn(),
      user: null,
    })); // імітуємо відсутність токена

    const App = require('../App').default;
    render(<App />);
    expect(screen.getByText(/вхід/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /увійти/i })).toBeInTheDocument();
  });


});