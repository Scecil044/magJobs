export default function FaceBookLogin() {
  const handleClick = async () => {};
  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className="flex items-center justify-center gap-2 w-full py-3 px-4 border border-neutral-500 rounded-xl text-sm shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <img src="/facebook.svg" alt="google" className="w-5 h-5" />
        Continue with Facebook
      </button>
    </>
  );
}
