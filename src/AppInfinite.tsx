import { useEffect, useState } from "react";

function stubCallApi() {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 0);
  });
}

export function AppInfinite({
  callAPI = stubCallApi,
}: {
  callAPI?: () => Promise<void>;
}) {
  const [value, setValue] = useState<number[]>([]);

  useEffect(() => {
    async function go() {
      await callAPI();
      setValue([1, 2, 3]);
    }

    go();
  }, [callAPI]);

  return (
    <>
      <h1>Hi Infinite loop</h1>
      <pre>{JSON.stringify(value, null, 2)}</pre>

      {value.length && <h1>Ready</h1>}
    </>
  );
}
