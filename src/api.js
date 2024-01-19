export const BASE_URL = 'http://localhost:3002';

export const getSearchId = async () => {
  try {
    const response = await fetch(`${BASE_URL}/search`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.searchId;
  } catch (error) {
    console.error('Помилка при отриманні searchId:', error);
    throw error;
  }
};

export const getTickets = async (searchId) => {
  try {
    const response = await fetch(`${BASE_URL}/tickets?searchId=${searchId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.tickets;
  } catch (error) {
    console.error('Помилка при отриманні квитків:', error);
    throw error;
  }
};
