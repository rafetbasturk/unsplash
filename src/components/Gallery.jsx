import { useGlobalContext } from "../context";
import { useFetchImages } from "../reactQueryCustomHook";

const Gallery = () => {
  const { isLoading, isError, data } = useFetchImages();
  if (isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    )
  };
  if (isError) {
    return (
      <section className="image-container">
        <h4>There was an error.</h4>
      </section>
    )
  };
  if (data.length < 1) {
    return (
      <section className="image-container">
        <h4>No results found.</h4>
      </section>
    )
  };
  return (
    <section className="image-container">
      {data.map(image => {
        const { id, alt_description } = image
        const url = image?.urls?.regular
        return (
          <img src={url} key={id} alt={alt_description} className="img" />
        )
      })
      }
    </section>
  )
}
export default Gallery