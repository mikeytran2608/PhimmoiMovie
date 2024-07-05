"use client";
import React, { useEffect, useState } from "react";
import CategoryMovie from "../../src/components/Contents/CategoryMovie/page";

const PhimLe = () => {
    const [data, setData] = useState<any>([]);
    useEffect(() => {
        const getData = async () => {
            const res = await fetch(
                "https://664d906fede9a2b55653eb1a.mockapi.io/list-movie-right"
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

    const dataTheLoai = data.filter((event: any) => event.series === "phim-le");

    return (
        <>
            <CategoryMovie
                title="Phim lẻ"
                type={false}
                data={dataTheLoai}
                subtitle="Phim lẻ mới cập nhật"
            />
        </>
    );
};

export default PhimLe;
