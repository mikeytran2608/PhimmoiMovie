import axios from "axios";

// Using the example query "demon", and looking at the 2nd page of results.
const url = "https://api.consumet.org/anime/9anime/demon?page=2";
const data = async () => {
    try {
        const { data } = await axios.get(url, { params: { page: 2 } });
        return data;
    } catch (err) {
        throw new Error(err.message);
    }
};

console.log(data);
