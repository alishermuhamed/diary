import './field-wrapper.css';

function FieldWrapper(props) {
  return <div className="field-wrapper">
    {
      props.label &&
      <label htmlFor={props.fieldId}>
        {props.label}
      </label>
    }
    {props.children}
  </div>;
}

export default FieldWrapper;
