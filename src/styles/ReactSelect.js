export const customStyles = {
  placeholder: () => ({
    color: '#999999',
    fontFamily: 'Roboto, sans-serif',
    fontSize: '0.875rem',
    fontWeight: 'normal',
  }),
  input: base => ({
    ...base,
  }),
  singleValue: () => ({
    color: '#999999',
  }),
  container: base => ({
    ...base,
    height: 48,
    marginBottom: 20,
    marginTop: 10,
    fontFamily: 'Roboto, sans-serif',
    fontSize: '0.875rem',
    color: '#999999',
  }),
  control: base => ({
    ...base,
    border: '1px solid #ddd',
    boxShadow: 'none',
  }),
  option: base => ({
    ...base,
    paddingLeft: '0.75rem',
  }),
};
