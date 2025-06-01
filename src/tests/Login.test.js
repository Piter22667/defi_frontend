import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from '../components/Login';

describe('Login', () => {
    const mockSetToken = jest.fn(); //імітація функції setToken з useAuthDet

    beforeEach(() => {
        jest.clearAllMocks();
    }); // очищаємо моки перед кожним тестом

    test('перевірка відображеннян форму входу', () => {
        render(
            <MemoryRouter>
                <Login setToken={mockSetToken} />
            </MemoryRouter>
        );
        expect(screen.getByText(/Вхід/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Пароль/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Увійти/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Реєстрація/i })).toBeInTheDocument();
    });

    test(' кнопка входу неактивна, якщо порожні поля вводу', () => {
        render(
            <MemoryRouter>
                <Login setToken={mockSetToken} />
            </MemoryRouter>
        );
        expect(screen.getByRole('button', { name: /Увійти/i })).toBeDisabled();
    });

    test('успішна відправка форми', async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve({ token: 'mock-token' }),
            })
        ); // імітація відповіді сервера з успішним входом з отриманням токена

        render(
            <MemoryRouter>
                <Login setToken={mockSetToken} />
            </MemoryRouter>
        );

        fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'test@mail.com' } });
        fireEvent.change(screen.getByLabelText(/Пароль/i), { target: { value: 'test' } });
        fireEvent.click(screen.getByRole('button', { name: /Увійти/i }));
        // імітація заповнення полів вводу з натискання кнопки входу

        await waitFor(() => {
            expect(mockSetToken).toHaveBeenCalledWith('mock-token');
        });
    });

    test('помилка при вводі невірних даних', async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                ok: false,
            })
        ); // імітація відповіді сервера з помилкою при вході

        render(
            <MemoryRouter>
                <Login setToken={mockSetToken} />
            </MemoryRouter>
        );

        fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'test@mail.com' } });
        fireEvent.change(screen.getByLabelText(/Пароль/i), { target: { value: 'test' } });
        fireEvent.click(screen.getByRole('button', { name: /Увійти/i }));

        await waitFor(() => {
            expect(screen.getByText(/Невірний логін або пароль/i)).toBeInTheDocument();
        });
    });
});