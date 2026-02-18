export type FilterType = 'country' | 'use' | 'access' | 'category';

export interface FilterOption {
    label: string;
    type: FilterType;
    options: string[];
}
