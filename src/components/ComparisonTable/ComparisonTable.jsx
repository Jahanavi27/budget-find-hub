import "./ComparisonTable.css";

function ComparisonTable({
  currentProduct,
  compareProduct,
}) {

  if (!compareProduct) return null;

  return (
    <div className="comparison-section">

      <h2>
        Compare Similar Products
      </h2>

      <table className="comparison-table">

        <thead>
          <tr>
            <th>Feature</th>

            <th>
              {currentProduct.name}
            </th>

            <th>
              {compareProduct.name}
            </th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>Price</td>

            <td>
              {currentProduct.price}
            </td>

            <td>
              {compareProduct.price}
            </td>
          </tr>

          <tr>
            <td>Rating</td>

            <td>
              ⭐ {currentProduct.rating}
            </td>

            <td>
              ⭐ {compareProduct.rating}
              {Number(compareProduct.rating) >
                Number(currentProduct.rating) &&
                " 🏆"}
            </td>
          </tr>

          {(currentProduct.specifications?.fanCount ||
            compareProduct.specifications?.fanCount) && (
            <tr>
              <td>Fans</td>

              <td>
                {currentProduct.specifications?.fanCount}
              </td>

              <td>
                {compareProduct.specifications?.fanCount}
              </td>
            </tr>
          )}

          {(currentProduct.specifications?.laptopsize ||
            compareProduct.specifications?.laptopsize) && (
            <tr>
              <td>Laptop Size</td>

              <td>
                {currentProduct.specifications?.laptopsize}
              </td>

              <td>
                {compareProduct.specifications?.laptopsize}
              </td>
            </tr>
          )}

          {(currentProduct.specifications?.usbPorts ||
            compareProduct.specifications?.usbPorts) && (
            <tr>
              <td>USB Ports</td>

              <td>
                {currentProduct.specifications?.usbPorts}
              </td>

              <td>
                {compareProduct.specifications?.usbPorts}
              </td>
            </tr>
          )}

          {(currentProduct.specifications?.rgb ||
            compareProduct.specifications?.rgb) && (
            <tr>
              <td>RGB Lighting</td>

              <td>
                {currentProduct.specifications?.rgb}
              </td>

              <td>
                {compareProduct.specifications?.rgb}
              </td>
            </tr>
          )}

          {(currentProduct.recommendedFor?.[0] ||
            compareProduct.recommendedFor?.[0]) && (
            <tr>
              <td>Best For</td>

              <td>
                {currentProduct.recommendedFor?.[0]}
              </td>

              <td>
                {compareProduct.recommendedFor?.[0]}
              </td>
            </tr>
          )}

          <tr>
            <td>Verdict</td>

            <td>
              💰 Best Budget Pick
            </td>

            <td>
              🏆 Best Overall
            </td>
          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default ComparisonTable;