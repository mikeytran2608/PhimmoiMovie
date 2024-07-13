"use client";
import React, { useEffect, useState } from "react";
import CategoryMovie from "../../src/components/Contents/CategoryMovie/page";

const PhimBo = () => {
    const [data, setData] = useState<any>([]);
    useEffect(() => {
        const getData = async () => {
            const res = await fetch(
                "https://664d906fede9a2b55653eb1a.mockapi.io/movie_api"
            );

            const result = await res.json();

            if (!res.ok) {
                throw new Error("Failed to fetch data");
            }
            const a = Object.values(result);

            setData(a);
        };
        getData();
    }, []);

    return (
        <>
            <CategoryMovie
                title="Phim bộ"
                type={false}
                data={data}
                subtitle="Phim bộ mới cập nhật"
            />
        </>
    );
};

export default PhimBo;
