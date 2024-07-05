async function getData() {
    const res = await fetch(
        "https://664d906fede9a2b55653eb1a.mockapi.io/movie_api"
    );

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

export default await getData;
