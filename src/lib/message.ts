export const parseToolInvocationResult = (data: any) => {
  const text = data?.toolInvocation?.result?.content?.[0]?.text;

  if (!text) {
    if (typeof data === "object") {
      // @todo: Find correct fix for this
      return data?.toolInvocation?.result;
    }

    return;
  }

  if (typeof text === "object") {
    return text;
  }

  const props = JSON.parse(text);

  if (!props) {
    return;
  }

  return text;
};
