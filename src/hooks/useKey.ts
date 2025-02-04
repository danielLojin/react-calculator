import { useEffect } from "react";

export function useKey(
  key: string | string[],
  action: (button?: string) => void
) {
  useEffect(() => {
    function callback(e: KeyboardEvent) {
      if (Array.isArray(key)) {
        if (key.includes(e.code.toLowerCase())) action(e.key);
      } else {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }
    }

    document.addEventListener("keydown", callback);

    return () => document.removeEventListener("keydown", callback);
  }, [key, action]);
}
