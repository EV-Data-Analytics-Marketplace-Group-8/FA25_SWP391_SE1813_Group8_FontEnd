"use client";
import { useParams } from "next/navigation";

export default function DatasetDetailPage() {
    const { id } = useParams();

    return (
        <div className="p-6 border rounded-lg bg-white shadow">
            <h1 className="text-xl font-semibold">Dataset #{id}</h1>
            <p className="text-gray-600 mt-2">
                Mock detail page for dataset {id}. This will later fetch data from API.
            </p>
        </div>
    );
}
