import { Fragment, useContext } from "react";
import { Product, TableHeading } from "../../unilities/helper";
import "./Style.css";
import { AppContext } from "../../contexts/AppContext";
const Department = () => {
  const { products, loading, error } = useContext(AppContext);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading products</div>;
  }
  return (
    <div>
      <div className="heading">Department List</div>
      <div className="table-heading">
        {TableHeading.map((title, i) => (
          <div key={i}>{title}</div>
        ))}
      </div>
      <div className="table-body">
        {products.map((product: Product, i) => {
          return (
            <Fragment key={product.sku}>
              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <input type="checkbox" style={{ width: "8px" }} />
                <span>{i + 1}</span>
              </div>
              <div>
                <img className="product-image" src={product.image} alt={product.name} />
              </div>
              <div>{product.sku}</div>
              <div>{product.name}</div>
              <div>{product.title}</div>
              <div>{product.description}</div>
              <div>{product.brand}</div>
              <div>{product.costPrice}</div>
              <div>{product.quantity}</div>
              <div>{product.size}</div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Department;
