//if a component is wrapped by another component it can be accessed by props.children
export const RoleWrapper = ({ children, rolesAllowed, currentRole }) => {
  return rolesAllowed.includes(currentRole) ? children : null
}
