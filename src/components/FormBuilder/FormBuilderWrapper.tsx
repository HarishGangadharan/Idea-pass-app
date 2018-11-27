import AllComponents from 'formiojs/components';
import Components from 'formiojs/components/Components';
import * as React from 'react';
Components.setComponents(AllComponents);
import FormBuilder from 'formiojs/FormBuilder';

interface IFormBuilder {
  form: {
    display: string,
    components: []
  },
  options: object,
  onChange: (data: any) => any,
  onSaveComponent: (data: any) => any,
  onUpdateComponent: (data: any) => any,
  onDeleteComponent: (data: any) => any,
  onCancelComponent: (data: any) => any,
  onEditComponent: (data: any) => any,
}

export default class extends React.Component<IFormBuilder> {
  public builder: any;
  public builderReady: Promise<any>;
  public element: React.RefObject<HTMLDivElement>;
  constructor(props: IFormBuilder) {
    super(props);
    this.element = React.createRef();
  }
  public componentDidMount = () => {
    this.initializeBuilder();
  }

  public componentWillUnmount = () => {
    if (this.builder !== undefined) {
      this.builder.instance.destroy(true);
    }
  }

  public componentDidUpdate = (prevProps: IFormBuilder) => {
    const {options, form} = this.props;
    if (form !== prevProps.form) {
      this.initializeBuilder();
    }
    if (options !== prevProps.options) {
      this.initializeBuilder();
    }
  }

  public initializeBuilder = () => {
    const {options, form} = this.props;

    this.builder = new FormBuilder(this.element.current, form, options);
    this.builderReady = this.builder.setDisplay(form.display);

    this.builderReady.then(() => {
      this.builder.instance.on('saveComponent', this.emit('onSaveComponent'));
      this.builder.instance.on('updateComponent', this.emit('onUpdateComponent'));
      this.builder.instance.on('deleteComponent', this.emit('onDeleteComponent'));
      this.builder.instance.on('cancelComponent', this.emit('onCancelComponent'));
      this.builder.instance.on('editComponent', this.emit('onEditComponent'));
      this.builder.instance.on('saveComponent', this.onChange);
      this.builder.instance.on('updateComponent', this.onChange);
      this.builder.instance.on('deleteComponent', this.onChange);
    });
  }

  public render = () => {
    return <div ref={this.element} />;
  }

  public onChange = () => {
    if (this.props.hasOwnProperty('onChange') && typeof this.props.onChange === 'function') {
      this.props.onChange(this.builder.instance.schema);
    }
  }

  public emit = (funcName: string) => {
    return (...args: []) => {
      if (this.props.hasOwnProperty(funcName) && typeof (this.props[funcName]) === 'function') {
        this.props[funcName](...args);
      }
    };
  }
}
