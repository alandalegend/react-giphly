import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GridItem";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h4 className="">Cargando...</h4>}
      <div className="card-grid">
        {images.map((image) => (
          //   <li key={image.id}>{image.title}</li>
          <GifItem key={image.id} {...image} />
        ))}
      </div>
      {/* </ol> */}
    </>
  );
};
