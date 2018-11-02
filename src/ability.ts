import { AbilityBuilder } from '@casl/ability';

export default AbilityBuilder.define((can: any) => {
  can(['read'], 'config');
  can(['read'], 'admin');
  can(['read'], 'organization');
});
