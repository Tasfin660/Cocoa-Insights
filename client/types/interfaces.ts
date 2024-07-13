interface DataType {
	_id?: string;
	brand: string;
	country?: string;
	brand_link: string;
	name: string;
	image: string;
	rate?: number;
	shop_link: string;
}

interface SideBar {
	chocolatesData?: DataType[];
	name?: string;
	activeBrand: string;
	onActiveBrand: (brand: string) => void;
}

interface ErrorMessage {
	image: string;
	type: string;
	message: string;
	css?: string;
}

export type { DataType, ErrorMessage, SideBar };
