
 export function searchImage(query) {
    const BASE_URL = "https://pixabay.com/api/";
    const params = new URLSearchParams({
        key: "44175517-753270956c641713e32eb091d",
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true",
    });
    const url = `${BASE_URL}?${params}`;
     return fetch(url).then(res => {
         if (!res.ok) {
             throw new Error(res.statusText);  
         }
         return res.json();
     });
}

