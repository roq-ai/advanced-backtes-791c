interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: [],
  tenantRoles: ['Administrator', 'Data Analyst'],
  tenantName: 'Organization',
  applicationName: 'Advanced Backtester',
  addOns: ['chat', 'notifications', 'file'],
};
