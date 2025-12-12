import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Contact from './Contact';
import * as contactService from '../api/contactService';

// Mock the contactService module
vi.mock('../api/contactService');

// Mock useNavigate
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

// Helper function to render Contact component with Router
const renderContact = () => {
  return render(
    <BrowserRouter>
      <Contact />
    </BrowserRouter>
  );
};

describe('Contact Component', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    vi.clearAllMocks();
  });

  // Test 1: Component renders correctly
  it('renders the contact form with all fields', () => {
    renderContact();
    
    expect(screen.getByText('Send Me a Message')).toBeInTheDocument();
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });

  // Test 2: User can type in form fields
  it('allows users to input data into form fields', () => {
    renderContact();
    
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const emailInput = screen.getByLabelText(/email address/i);
    const phoneInput = screen.getByLabelText(/phone number/i);
    const subjectInput = screen.getByLabelText(/subject/i);
    const messageInput = screen.getByLabelText(/message/i);

    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(phoneInput, { target: { value: '1234567890' } });
    fireEvent.change(subjectInput, { target: { value: 'Test Subject' } });
    fireEvent.change(messageInput, { target: { value: 'Test message' } });

    expect(firstNameInput.value).toBe('John');
    expect(lastNameInput.value).toBe('Doe');
    expect(emailInput.value).toBe('john@example.com');
    expect(phoneInput.value).toBe('1234567890');
    expect(subjectInput.value).toBe('Test Subject');
    expect(messageInput.value).toBe('Test message');
  });

  // Test 3: Required fields have required attribute
  it('marks required fields correctly', () => {
    renderContact();
    
    expect(screen.getByLabelText(/first name/i)).toBeRequired();
    expect(screen.getByLabelText(/last name/i)).toBeRequired();
    expect(screen.getByLabelText(/email address/i)).toBeRequired();
    expect(screen.getByLabelText(/subject/i)).toBeRequired();
    expect(screen.getByLabelText(/message/i)).toBeRequired();
    expect(screen.getByLabelText(/phone number/i)).not.toBeRequired();
  });

  // Test 4: Form submission with valid data
  it('submits form successfully with valid data', async () => {
    // Mock successful API response
    contactService.addContact.mockResolvedValueOnce({ success: true });
    
    // Mock window.alert
    window.alert = vi.fn();
    
    renderContact();
    
    // Fill out the form
    fireEvent.change(screen.getByLabelText(/first name/i), { target: { value: 'Jane' } });
    fireEvent.change(screen.getByLabelText(/last name/i), { target: { value: 'Smith' } });
    fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'jane@example.com' } });
    fireEvent.change(screen.getByLabelText(/subject/i), { target: { value: 'Inquiry' } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Hello, I have a question' } });
    
    // Submit the form
    const submitButton = screen.getByRole('button', { name: /send message/i });
    fireEvent.click(submitButton);
    
    // Wait for async operations
    await waitFor(() => {
      expect(contactService.addContact).toHaveBeenCalledWith({
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane@example.com',
        phone: '',
        subject: 'Inquiry',
        message: 'Hello, I have a question'
      });
    });
    
    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith('Thank you! Your message was sent successfully');
    });
    
    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/');
    });
  });

  // Test 5: Form clears after successful submission
  it('resets form fields after successful submission', async () => {
    contactService.addContact.mockResolvedValueOnce({ success: true });
    window.alert = vi.fn();
    
    renderContact();
    
    const firstNameInput = screen.getByLabelText(/first name/i);
    const emailInput = screen.getByLabelText(/email address/i);
    
    fireEvent.change(firstNameInput, { target: { value: 'Test' } });
    fireEvent.change(screen.getByLabelText(/last name/i), { target: { value: 'User' } });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/subject/i), { target: { value: 'Test' } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Test message' } });
    
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));
    
    await waitFor(() => {
      expect(firstNameInput.value).toBe('');
      expect(emailInput.value).toBe('');
    });
  });

  // Test 6: Handle submission error
  it('displays error message when submission fails', async () => {
    // Mock failed API response
    contactService.addContact.mockRejectedValueOnce(new Error('Network error'));
    window.alert = vi.fn();
    
    renderContact();
    
    // Fill and submit form
    fireEvent.change(screen.getByLabelText(/first name/i), { target: { value: 'Test' } });
    fireEvent.change(screen.getByLabelText(/last name/i), { target: { value: 'User' } });
    fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/subject/i), { target: { value: 'Test' } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Test' } });
    
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));
    
    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith('There was an error sending your message. Please try again later.');
    });
    
    expect(mockNavigate).not.toHaveBeenCalled();
  });

  // Test 7: Contact information is displayed
  it('displays contact information correctly', () => {
    renderContact();
    
    expect(screen.getByText('tawuti@my.centennialcollege.ca')).toBeInTheDocument();
    expect(screen.getByText('647-448-6987')).toBeInTheDocument();
    expect(screen.getByText('Toronto, ON, Canada')).toBeInTheDocument();
  });
});