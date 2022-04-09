export const sendResponse = (
  bodyInit?: any,
  maybeInit?: Response | ResponseInit | undefined,
) => {
  return new Response(
    JSON.stringify(bodyInit),
    {
      ...maybeInit,
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
    },
  );
};
