
import axios from 'axios'; 

export async function searchImage(query, page) {

    const BASE_URL = "https://pixabay.com/api/";

    const params = new URLSearchParams({
        key: "44175517-753270956c641713e32eb091d",
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true",
        page: page,
        per_page: 15,
    });

    const url = `${BASE_URL}?${params}`;

    const result = await axios(url);
    return result.data;
};

