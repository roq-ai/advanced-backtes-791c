const mapping: Record<string, string> = {
  'historical-data': 'historical_data',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
