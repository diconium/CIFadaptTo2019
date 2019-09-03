import React from 'react';

export const ProductComponent = ({
  id
}) => {
  const [product, setProduct] = React.useState({})

  React.useEffect(() => {
    fetch(`https://diconium.adobeioruntime.net/api/v1/web/adaptTo2019/getProductById?id=${id}`)
      .then(response => response.json())
      .then(product => {
        setProduct(product)
      })
  }, [id])

  return <div> <h1>Hello adaptTo 2019</h1> <div>{product.name}</div> <p>{product.description}</p> </div>
}
