import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

describe('Sidebar', () => {
    const mockUser = { email: 'test@example.com' };

    test('Перевіряємо, чи відображаєються пункти меню', () => {
        render(
            <MemoryRouter> // необхідний для використання NavLink
                <Sidebar user={mockUser} />
            </MemoryRouter>
        );
        expect(screen.getByText(/DeFi App/i)).toBeInTheDocument();
        expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
        expect(screen.getByText(/Dex Protocol detailed charts/i)).toBeInTheDocument();
        expect(screen.getByText(/Get Addresss txs/i)).toBeInTheDocument();
    });

    test('перевірка блоку відображення блоку користувача', () => {
        render(
            <MemoryRouter>
                <Sidebar user={mockUser} />
            </MemoryRouter>
        );
        expect(screen.getByText(/test@example.com/i)).toBeInTheDocument();
    });
});