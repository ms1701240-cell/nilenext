'use client';
import { useFormStatus } from "react-dom";

export function ButtonForm() {
  const { pending } = useFormStatus();
return (
    <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
      type="submit"
      disabled={pending}
    >
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}