import DetailMovie from "@/components/ItemComponent/DetailMovie";
async function getData(params: string) {
    const res = await fetch(
        `https://664d906fede9a2b55653eb1a.mockapi.io/movie_api/${params}`
    );

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

async function getListData() {
    const res = await fetch(
        `https://664d906fede9a2b55653eb1a.mockapi.io/movie_api`
    );

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

export default async function PageSlug({
    params,
}: {
    params: { slug: string };
}) {
    const data = await getData(params.slug);
    const listData = await getListData();

    return (
        <>
            <DetailMovie data={data} listData={listData} />
        </>
    );
}
