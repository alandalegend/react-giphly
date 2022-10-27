// import { fireEvent, render, screen } from "@testing-library/react";

import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GridItem";

describe("Pruebas en <GifItem />", () => {
  const title = "2";
  const url = "http://dalegend.net/foto.jpg";

  test("debe de hhacer match con el snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    //Creo mi snapshot
    expect(container).toMatchSnapshot();
  });

  test("Debe de mostrar la imagen con el URL y el ALT indicado", () => {
    render(<GifItem title={title} url={url} />);
    // screen.debug();
    // expect(screen.getByRole('img').src).toBe(url);

    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("Debe de el titulo en el componente", () => {
    render(<GifItem title={title} url={url} />);
    // screen.debug();
     expect(screen.getByText(title)).toBeTruthy;

    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });
});
