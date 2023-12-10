export default function ConnectInvite({ Email }) {
  return (
    <div className="text-black text-center text-3xl self-center max-w-[466px] mt-32 max-md:max-w-full max-md:mt-10">
      <span className="">Sounds interesting, </span>
      <span className="font-bold">
        <a href={`mailto:${Email}`} className="underline">
          reach out
        </a>
      </span>
      <span className="font-bold"> </span>
      <span className="">and lets connect!</span>
    </div>
  );
}