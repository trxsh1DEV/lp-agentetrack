"use client";
export default function ButtonBack() {
  return (
    <button
      onClick={() => history.back()}
      className="mb-4 text-blue-500 hover:underline"
    >
      Voltar
    </button>
  );
}
