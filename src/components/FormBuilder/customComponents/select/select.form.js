import baseEditForm from 'formiojs/components/base/Base.form';

import SelectEditData from './editForm/select.edit.data';
import SelectEditValidation from './editForm/select.edit.validation';

export default function(...extend) {
  return baseEditForm([
    {
      key: 'data',
      components: SelectEditData
    },
    {
      key: 'validation',
      components: SelectEditValidation
    }
  ], ...extend);
}
