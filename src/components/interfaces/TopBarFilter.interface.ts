export interface TopBarFilterProps {
    searchText: string;
    onSearchTextChange: (text: string) => void;
    onFilterPress: () => void;
    onClearSearch: () => void;
    minPrice: string;
    onMinPriceChange: (value: string) => void;
    maxPrice: string;
    onMaxPriceChange: (value: string) => void;
}