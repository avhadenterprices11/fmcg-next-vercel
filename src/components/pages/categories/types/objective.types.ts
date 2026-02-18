export type ObjectiveId = 'all' | 'source' | 'bulk' | 'market' | 'cocktails';

export interface ObjectiveData {
    id: ObjectiveId;
    label: string;
    icon: string; // string name for dynamic lookup
}
