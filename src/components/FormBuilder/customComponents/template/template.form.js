import nestedComponentForm from 'formiojs/components/nested/NestedComponent.form';
import templateEditDisplay from "./editForm/template.edit.display";

export default function(...extend) {
  return nestedComponentForm([
    {
      key: 'display',
      ignore: true
    }, {
      label: 'Main',
      key: 'main',
      weight: 1,
      components: templateEditDisplay
    }
  ], ...extend);
}
