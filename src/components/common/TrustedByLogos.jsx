const TrustedLogo = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      draggable="false"
      className="h-4 w-auto object-contain opacity-70 transition-opacity duration-300 hover:opacity-100 md:h-5 lg:h-6"
    />
  );
};

export default TrustedLogo