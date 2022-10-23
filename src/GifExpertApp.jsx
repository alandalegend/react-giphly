import { useState } from "react";
import { AddCategory, GifGrid } from "./components/index";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["Rick and morty"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>Búsqueda de Gifs</h1>
      <ol>
        <li>Se usa la api de giphly</li>
        <li>
          Validaciones en campo de búsqueda, debes de poner más de 1 letra
        </li>
        <li>se hace un jsx para el "gifCard"</li>
        <li>Se usan los hooks</li>
        <li>
          se publica (<code>yarn build</code>) y luego{" "}
          <code>netlify deploy --prod</code>{" "}
        </li>
        <br />
      </ol>
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
