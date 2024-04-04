export type TProduct = {
    _id?: string;
    images: string[];
    title: string;
    price: number;
    rating: number;
    category: string;
    des: string;
    flashSale?: boolean;
    flashSaleDate?: string;
};