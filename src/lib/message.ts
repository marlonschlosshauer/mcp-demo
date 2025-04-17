export const parseToolInvocationResult = (result: any) => {
  const text = result?.toolInvocation?.result?.content?.[0]?.text;

  if (!text) {
    return;
  }

  const props = JSON.parse(text);

  if (!props) {
    return;
  }

  return text;
};
