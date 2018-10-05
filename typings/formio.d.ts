declare module 'formiojs/*';
declare module 'react-formio' {
  
  export interface IFormBuilderProps {
    form: any,
    options?: any,
    onChange?(schema?: any): any,
    onSaveComponent?(schema?: any): any,
    onUpdateComponent?(schema?: any): any,
    onDeleteComponent?(schema?: any): any,
    onCancelComponent?(schema?: any): any,
    onEditComponent?(schema?: any): any
  }
  
  export class Form extends React.Component<IFormProps> {
  }
  
  export interface IFormProps {
    src?: string,
    url?: string,
    form?: object,
    submission?: object,
    options?: {
      readOnly?: boolean,
      noAlerts?: boolean,
      i18n?: object,
      template?: string,
      templates?: any,
    },
    nosubmit?: boolean,
    onPrevPage?(schema?: any): any,
    onNextPage?(schema?: any): any,
    onChange?(schema?: any): any,
    onCustomEvent?(schema?: any): any,
    onSubmit?(schema?: any): any,
    onSubmitDone?(schema?: any): any,
    onFormLoad?(schema?: any): any,
    onError?(schema?: any): any,
    onRender?(schema?: any): any
  }

  export class FormBuilder extends React.Component<IFormBuilderProps> {
  }
}
