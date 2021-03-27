export function get() {
  return {
    body: {
      MODE: import.meta.env.MODE,
      VARIABLE_ONE: import.meta.env.VITE_PUBLIC_VARIABLE_ONE,
    },
  };
}
