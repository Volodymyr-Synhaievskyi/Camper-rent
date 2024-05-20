export const TextareaField = ({ placeholder, fieldName }) => {
  return (
    <textarea className="inputField" placeholder={placeholder} name={fieldName} rows={3}></textarea>
  );
};
