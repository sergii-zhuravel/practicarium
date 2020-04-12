export default function useValidatedForm(
  fields = {},
  descriptors = [],
  validators = ValidaJS.validators
) {
  const initialErrorsObj = emptyErrorFactory(fields);
  const initialState = stateFactory(fields);
  const [state, setState] = useState(initialState);
  const [validation, setValidation] = useState({
    valid: true,
    errors: initialErrorsObj
  });
  const rulesBy = rulesByNameFactory(descriptors, validators);
  const form = formDataFactory(
    state,
    setState,
    setValidation,
    validation,
    rulesBy
  );

  const getData = () => getDataFromState(state);
  const setData = data => setState(stateFactory(data));
  const validate = () => {
    const newValidations = ValidaJS.validate(
      rulesBy.default,
      getDataFromState(state)
    );
    setValidation({
      ...newValidations,
      errors: { ...initialErrorsObj, ...newValidations.errors }
    });
    return newValidations.valid;
  };

  return [form, validation, validate, getData, setData];
}
