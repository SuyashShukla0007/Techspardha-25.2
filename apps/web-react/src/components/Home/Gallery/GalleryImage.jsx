function GalleryImage({ src, alt }) {
  return (
    <div className="w-full h-full overflow-hidden rounded-xl">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
export default GalleryImage;
