export const ConditionalWrapper = ({ isWrapped, wrapper, children }) =>
  isWrapped ? wrapper(children) : children;
