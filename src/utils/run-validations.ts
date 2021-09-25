export default function runValidations<T>(validations: Array<Function>, state: T ) {
  return validations.reduce((violations, next) => {
    const violation = next(state);
    if (violation) {
      return [...violations, violation]
    }
    return violations;
  }, [])
}