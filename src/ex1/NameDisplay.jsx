export const NameDisplay = (props) => {
  const isNameValid = props.name !== undefined && props.name.length > 0;
  const displayName = isNameValid ? props.name[0].toUpperCase() + props.name.slice(1).toLowerCase() : ''

  return <div>
    <div>Header costam</div>
    {isNameValid ? <div>Name display: {displayName}</div> : <div>Provide valid name</div>}
    {isNameValid && <div>Name display: {displayName}</div>}
    <div>My tasks: ...</div>
  </div>
}