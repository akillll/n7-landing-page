const TrustedLogo = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      draggable="false"
      className="h-5 w-auto object-contain opacity-70 transition-opacity duration-300 hover:opacity-100 sm:h-5"
    />
  );
};

export default TrustedLogo