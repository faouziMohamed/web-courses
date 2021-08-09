export function IncludeIf({ condition, children }) {
  return condition && <>{children}</>;
}
