import AllComponents from 'formiojs/components';
import Components from 'formiojs/components/Components';
import * as React from 'react';
Components.setComponents(AllComponents);
import Form from 'formiojs/Form';

interface IFormProps {
  src?: string,
  url?: string,
  form: object,
  submission?: object,
  options?: {
    readOnly?: boolean,
    noAlerts?: boolean,
    i18n?: object,
    template?: string,
    templates?: any
  },
  onPrevPage?: (object?: any) => any,
  onNextPage?: (object?: any) => any,
  onChange?: (object?: any) => any,
  onCustomEvent?: (object?: any) => any,
  onSubmit?: (object?: any) => any,
  onSubmitDone?: (object?: any) => any,
  onFormLoad?: (object?: any) => any,
  onError?: (object?: any) => any,
  onRender?: (object?: any) => any,
  assignRef?: (object?: any) => any
}

export default class extends React.Component<IFormProps, any> {
  public formio: any;
  public element: React.RefObject<HTMLDivElement>;
  private createPromise: Promise<any>;

  constructor(props: IFormProps) {
    super(props);
    this.element = React.createRef();
  }


  public componentDidMount = () => {
    const { options, src, url, form } = this.props;

    if (src) {
      this.createPromise = new Form(this.element.current, src, options).render().then((formio: any) => {
        this.formio = formio;
        this.formio.src = src;
      });
    }
    if (form) {
      this.createPromise = new Form(this.element.current, form, options).render().then((formio: any) => {
        this.formio = formio;
        this.formio.form = form;
        if (this.props.assignRef) {
          this.props.assignRef(this.formio);
        }
        if (url) {
          this.formio.url = url;
        }
      });
    }

    this.initializeFormio();
  }

  public componentWillUnmount = () => {
    if (this.formio !== undefined) {
      this.formio.destroy(true);
    }
  }

  public initializeFormio = () => {
    if (this.createPromise) {
      this.createPromise.then(() => {
        if (this.props.submission) {
          this.formio.submission = this.props.submission;
        }
        // this.formio.hideComponents([]); (From Components.js)
        this.formio.on('prevPage', this.emit('onPrevPage'));
        this.formio.on('nextPage', this.emit('onNextPage'));
        this.formio.on('change', this.emit('onChange'));
        this.formio.on('customEvent', this.emit('onCustomEvent'));
        this.formio.on('formLoad', this.emit('onFormLoad'));
        this.formio.on('submit', this.emit('onSubmit'));
        this.formio.on('submitDone', this.emit('onSubmitDone'));
        this.formio.on('error', this.emit('onError'));
        this.formio.on('render', this.emit('onRender'));
      });
    }
  }

  public render = () => {
    return <div ref={this.element} />;
  }

  public emit = (funcName: any) => {
    return (...args: []) => {
      if (this.props.hasOwnProperty(funcName) && typeof (this.props[funcName]) === 'function') {
        this.props[funcName](...args);
      }
    };
  }
}
