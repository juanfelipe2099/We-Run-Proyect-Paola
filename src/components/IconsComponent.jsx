// eslint-disable-next-line react/prop-types
export const IconsComponent = ({ alt, src, width, height, href }) => {
  return (
    <div className="col-sm">
      <a href={href}>
        <img src={src} alt={alt} width={width} height={height} />
      </a>
    </div>
  );
};

export default IconsComponent;
