import { BRANDS } from '../data'; // Your flat BRANDS array
import { Brand, ID } from '../types';

/**
 * Returns all Brand objects belonging to a specific Tier 2 Category (e.g., 'whisky')
 */
export const getBrandsByTier2 = (tier2Id: ID): Brand[] => {
  return BRANDS.filter((brand) => brand.tier2Id === tier2Id);
};

/**
 * Returns all Brand objects belonging to a specific Tier 3 Niche (e.g., 'scotch')
 */
export const getBrandsByTier3 = (tier3Id: ID): Brand[] => {
  return BRANDS.filter((brand) => brand.tier3Ids.includes(tier3Id));
};

/**
 * UI HELPER: Generates a formatted string of brand names for a card subtitle.
 * Example Output: "Highland Reserve, Dublin Oak +2 more"
 */
export const getBrandNamesPreview = (
  id: ID, 
  level: 'TIER2' | 'TIER3', 
  limit: number = 3
): string => {
  
  // 1. Select the correct fetcher based on the level
  const brands = level === 'TIER2' 
    ? getBrandsByTier2(id) 
    : getBrandsByTier3(id);

  // 2. Handle empty state
  if (brands.length === 0) return 'No brands currently listed';

  // 3. Extract names
  const names = brands.map((b) => b.name);

  // 4. Format the string
  const visibleNames = names.slice(0, limit).join(', ');
  const remaining = names.length - limit;

  if (remaining > 0) {
    return `${visibleNames}, +${remaining} more`;
  }
  
  return visibleNames;
};