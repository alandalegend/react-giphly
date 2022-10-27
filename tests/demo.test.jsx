
import { getGifs } from "../src/helpers/getGifs";
import { GridItem } from "../src/components/GridItem";
import { render } from "@testing-library/react";

describe("GifItem_Test", () => {
  test("Titulo es obligatorio", async () => {
    // const testGif = {
    //     title: 'ABC123',
    //     url: 'El_Papi1502',
    //     id: 0
    // };
    // const busqueda = await getGifs(test);
    // // console.log(busqueda);
    // expect(testGif).toStrictEqual(busqueda);
  });

  // test('Titulo es obligatorio', async () => {
  //     const titulo = "Hola";
  //     const busqueda = await getGifs(titulo);

  //     render(<GridItem value={titulo} />);

  //     expect(titulo).toMatchSnapshot();
  // })
});
