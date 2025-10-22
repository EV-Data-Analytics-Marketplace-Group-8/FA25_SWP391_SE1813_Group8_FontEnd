export interface Dataset {
    id: string;
    title: string;
    category?: string; // thêm dấu ? ở đây
    price: number;
    providerId?: string;
    description?: string;
    downloadCount?: number;
}
