import ImageShow from "./ImageShow";

function ImageList({ images }) {
  console.log(images);

  const renderedImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });

  return <div>{renderedImages}</div>;
}

export default ImageList;
