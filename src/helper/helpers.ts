export function containsZeroAndSign(str: string) {
  return (
    str.slice(-2) === "+0" ||
    str.slice(-2) === "-0" ||
    str.slice(-2) === "*0" ||
    str.slice(-2) === "/0"
  );
}

export function containsDecimalOrOperationSign(
  button: string,
  type: "isEqual" | "isNotEqual"
) {
  if (type === "isEqual")
    return (
      button === "," ||
      button === "." ||
      button === "+" ||
      button === "-" ||
      button === "*" ||
      button === "/"
    );

  if (type === "isNotEqual")
    return (
      button !== "," &&
      button !== "." &&
      button !== "+" &&
      button !== "-" &&
      button !== "*" &&
      button !== "/"
    );
}
