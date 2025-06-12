export function formatPhoneNumber(value) {
  // Remove all non-digit characters
  let cleaned = value.replace(/[^\d]/g, '');

  // Remove leading 1 if present (since we'll add +1)
  if (cleaned.startsWith('1')) {
    cleaned = cleaned.slice(1);
  }

  // Format as +1 XXX XXX XXXX
  let formatted = '+1';
  if (cleaned.length > 0) {
    formatted += ' ' + cleaned.slice(0, 3);
  }
  if (cleaned.length >= 4) {
    formatted += ' ' + cleaned.slice(3, 6);
  }
  if (cleaned.length >= 7) {
    formatted += ' ' + cleaned.slice(6, 10);
  }
  return formatted.trim();
} 