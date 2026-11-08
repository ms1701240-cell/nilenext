/// <reference types="@testing-library/jest-dom" />
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import CreatePostForm from '@/components/form';

describe('CreatePostForm Integration Tests', () => {
  it('displays field errors when server validation fails', async () => {
    const user = userEvent.setup();

    render(<CreatePostForm />);

    const titleInput = screen.getByRole('textbox', { name: /عنوان البوست|title/i });
    const submitBtn = screen.getByRole('button', { name: /submit|publish/i });

    await user.type(titleInput, 'Hi');
    await user.click(submitBtn);

    
    const errorMessage = await screen.findByText(/at least 3 characters|خطأ/i);
expect(errorMessage).not.toBeNull();
  });
});