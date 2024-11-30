const API_KEY = '27098519-4ca44ecc916e4addacc368c49';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchImages(query, page = 1, perPage = 40) {
    const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`;
    
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch images');
            }
            return response.json();
        });
}