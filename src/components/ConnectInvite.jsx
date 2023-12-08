export default function ConnectInvite({Email}) {
    return(
        <div className="text-black text-center text-3xl self-center max-w-[466px] mt-32 max-md:max-w-full max-md:mt-10">
            Sounds interesting,
            <a href={`mailto:${Email}`} className="underline">reach out</a>
            and lets connect!
        </div>
    );
}