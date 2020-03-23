export function matches(state) {
  return state.matches;
}

export const matchesInDivision = state => division => {
  return state.matches.filter(matches => matches.division === division);
};
