export default function Image({ src, alt }) {
    return(
        <img
            loading="lazy"
            src={src}
            className="aspect-[2.03] object-contain object-center w-full overflow-hidden self-center max-w-[1175px] mt-48 max-md:max-w-full max-md:mt-10"
            alt={alt}
        />
    );
}