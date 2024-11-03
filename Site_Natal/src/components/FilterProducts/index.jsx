/* eslint-disable no-unused-vars */
import styles from "./FilterProducts.module.css";
import productsDBInicial from "../../json/produtosDB.json";
import { useEffect, useState } from "react";
import { useFilteredProductsContext } from "../../contexts/FilteredProducts";

function FilterProducts() {
  const { setFilteredProducts } = useFilteredProductsContext();
  const categories = [
    "Decoração de Natal",
    "Decoração de Natal Externa",
    "Roupas de Natal",
    "Decoração de Natal Interna",
    "Roupas de Casa",
    "Aromatizantes de Natal",
    "Decoração de Árvore",
    "Presentes",
    "Utensílios de Natal",
    "Decoração de Mesa",
    "Embalagens",
    "Aromatizantes",
  ];
  const maxValue = Math.max(
    ...productsDBInicial.map((produto) => parseFloat(produto.preco))
  );
  const minValue = Math.min(
    ...productsDBInicial.map((produto) => parseFloat(produto.preco))
  );

  const [checkboxStates, setCheckboxStates] = useState(
    categories.reduce((acc, _, index) => {
      acc[index] = true;
      return acc;
    }, {})
  );
  const [value, setValue] = useState(79.99);

  const handleValue = (event) => {
    setValue(event.target.value);
  };

  const handleCheckboxChange = (index) => {
    setCheckboxStates((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  useEffect(() => {
    const selectedCategories = categories.filter(
      (_, index) => checkboxStates[index]
    );

    const updatedProducts = productsDBInicial.filter(
      (produto) =>
        selectedCategories.includes(produto.categoria) &&
        parseFloat(produto.preco) <= value
    );
    setFilteredProducts(updatedProducts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkboxStates, value, setFilteredProducts]);



  return (
    <section className={styles.FilterProducts}>
      <div className={styles.filterCategory}>
        <h2>Categorias: </h2>
        <div className={styles.optionsToChose}>
          {categories.map((e, index) => {
            return (
              <div key={index}>
                <input
                  type="checkbox"
                  id={`checkbox${index}`}
                  checked={checkboxStates[index]}
                  onChange={() => handleCheckboxChange(index)}
                />
                <label htmlFor={`checkbox${index}`}>{e}</label>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.filterCategory}>
        <h2>Preço: </h2>
        <div className={styles.optionsToChose}>
          <div>
            R${minValue}
            <input
              type="range"
              min={minValue}
              max={maxValue}
              value={value}
              onChange={handleValue}
            />
            R${value}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FilterProducts;
