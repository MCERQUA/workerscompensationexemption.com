// The 50 U.S. states — single source of truth for the coverage map and state list.
// `col`/`row` place each state on an 11x8 tile-grid cartogram (each state gets an
// equal-sized tile in roughly its geographic position), so small states stay just as
// clickable as large ones. Grid is 0-indexed from the top-left.

export type USState = {
  name: string;
  abbr: string;
  slug: string;
  col: number;
  row: number;
};

export const US_STATES: USState[] = [
  { name: "Alabama", abbr: "AL", slug: "alabama", col: 6, row: 6 },
  { name: "Alaska", abbr: "AK", slug: "alaska", col: 0, row: 0 },
  { name: "Arizona", abbr: "AZ", slug: "arizona", col: 1, row: 5 },
  { name: "Arkansas", abbr: "AR", slug: "arkansas", col: 4, row: 5 },
  { name: "California", abbr: "CA", slug: "california", col: 0, row: 4 },
  { name: "Colorado", abbr: "CO", slug: "colorado", col: 2, row: 4 },
  { name: "Connecticut", abbr: "CT", slug: "connecticut", col: 9, row: 3 },
  { name: "Delaware", abbr: "DE", slug: "delaware", col: 9, row: 4 },
  { name: "Florida", abbr: "FL", slug: "florida", col: 8, row: 7 },
  { name: "Georgia", abbr: "GA", slug: "georgia", col: 7, row: 6 },
  { name: "Hawaii", abbr: "HI", slug: "hawaii", col: 0, row: 7 },
  { name: "Idaho", abbr: "ID", slug: "idaho", col: 1, row: 2 },
  { name: "Illinois", abbr: "IL", slug: "illinois", col: 5, row: 2 },
  { name: "Indiana", abbr: "IN", slug: "indiana", col: 5, row: 3 },
  { name: "Iowa", abbr: "IA", slug: "iowa", col: 4, row: 3 },
  { name: "Kansas", abbr: "KS", slug: "kansas", col: 3, row: 5 },
  { name: "Kentucky", abbr: "KY", slug: "kentucky", col: 5, row: 4 },
  { name: "Louisiana", abbr: "LA", slug: "louisiana", col: 4, row: 6 },
  { name: "Maine", abbr: "ME", slug: "maine", col: 10, row: 0 },
  { name: "Maryland", abbr: "MD", slug: "maryland", col: 8, row: 4 },
  { name: "Massachusetts", abbr: "MA", slug: "massachusetts", col: 10, row: 2 },
  { name: "Michigan", abbr: "MI", slug: "michigan", col: 7, row: 2 },
  { name: "Minnesota", abbr: "MN", slug: "minnesota", col: 4, row: 2 },
  { name: "Mississippi", abbr: "MS", slug: "mississippi", col: 5, row: 6 },
  { name: "Missouri", abbr: "MO", slug: "missouri", col: 4, row: 4 },
  { name: "Montana", abbr: "MT", slug: "montana", col: 2, row: 2 },
  { name: "Nebraska", abbr: "NE", slug: "nebraska", col: 3, row: 4 },
  { name: "Nevada", abbr: "NV", slug: "nevada", col: 1, row: 3 },
  { name: "New Hampshire", abbr: "NH", slug: "new-hampshire", col: 10, row: 1 },
  { name: "New Jersey", abbr: "NJ", slug: "new-jersey", col: 8, row: 3 },
  { name: "New Mexico", abbr: "NM", slug: "new-mexico", col: 2, row: 5 },
  { name: "New York", abbr: "NY", slug: "new-york", col: 8, row: 2 },
  { name: "North Carolina", abbr: "NC", slug: "north-carolina", col: 6, row: 5 },
  { name: "North Dakota", abbr: "ND", slug: "north-dakota", col: 3, row: 2 },
  { name: "Ohio", abbr: "OH", slug: "ohio", col: 6, row: 3 },
  { name: "Oklahoma", abbr: "OK", slug: "oklahoma", col: 3, row: 6 },
  { name: "Oregon", abbr: "OR", slug: "oregon", col: 0, row: 3 },
  { name: "Pennsylvania", abbr: "PA", slug: "pennsylvania", col: 7, row: 3 },
  { name: "Rhode Island", abbr: "RI", slug: "rhode-island", col: 9, row: 2 },
  { name: "South Carolina", abbr: "SC", slug: "south-carolina", col: 7, row: 5 },
  { name: "South Dakota", abbr: "SD", slug: "south-dakota", col: 3, row: 3 },
  { name: "Tennessee", abbr: "TN", slug: "tennessee", col: 5, row: 5 },
  { name: "Texas", abbr: "TX", slug: "texas", col: 3, row: 7 },
  { name: "Utah", abbr: "UT", slug: "utah", col: 1, row: 4 },
  { name: "Vermont", abbr: "VT", slug: "vermont", col: 9, row: 1 },
  { name: "Virginia", abbr: "VA", slug: "virginia", col: 7, row: 4 },
  { name: "Washington", abbr: "WA", slug: "washington", col: 0, row: 2 },
  { name: "West Virginia", abbr: "WV", slug: "west-virginia", col: 6, row: 4 },
  { name: "Wisconsin", abbr: "WI", slug: "wisconsin", col: 6, row: 2 },
  { name: "Wyoming", abbr: "WY", slug: "wyoming", col: 2, row: 3 },
];

export const STATE_GRID_COLS = 11;
export const STATE_GRID_ROWS = 8;

export function getStateBySlug(slug: string): USState | undefined {
  return US_STATES.find((s) => s.slug === slug);
}
