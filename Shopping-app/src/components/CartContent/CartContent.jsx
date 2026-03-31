import { cartProduct } from "../../assets/asset";
import "./CartContent.css";

export default function CartContent() {
  return (
    <div>
      <div id="cart" className="section-p1">
        <table width="100%">
          <thead>
            <tr>
              <td>Remove</td>
              <td>Image</td>
              <td>Product</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Subtotal</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="#">
                  <i class="bx bx-x-circle"></i>
                </a>
              </td>
              <td>
                <img src={cartProduct.p1} />
              </td>
              <td>Cartoon Astronaut T-Shirts</td>
              <td>$118.19</td>
              <td>
                <input type="number" value="1" />
              </td>
              <td>$118.19</td>
            </tr>
            <tr>
              <td>
                <a href="#">
                  <i class="bx bx-x-circle"></i>
                </a>
              </td>
              <td>
                <img src={cartProduct.p2} alt="" />
              </td>
              <td>Cartoon Astronaut T-Shirts</td>
              <td>$118.19</td>
              <td>
                <input type="number" value="1" />
              </td>
              <td>$118.19</td>
            </tr>
            <tr>
              <td>
                <a href="#">
                  <i class="bx bx-x-circle"></i>
                </a>
              </td>
              <td>
                <img src={cartProduct.p3} alt="" />
              </td>
              <td>Cartoon Astronaut T-Shirts</td>
              <td>$118.19</td>
              <td>
                <input type="number" value="1" />
              </td>
              <td>$118.19</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div id="cart-add" className="section-p1">
        <div id="coupon">
          <h3>Apply Coupon</h3>
          <div>
            <input type="text" placeholder="Enter Your Coupon" />
            <button class="normal">Apply</button>
          </div>
        </div>

        <div id="subtotal">
          <h3>Cart Totals</h3>
          <table>
            <tr>
              <td>Cart Subtotal</td>
              <td>$ 335</td>
            </tr>
            <tr>
              <td>Shipping</td>
              <td>Free</td>
            </tr>
            <tr>
              <td>
                <strong>Total</strong>
              </td>
              <td>
                <strong>$ 335</strong>
              </td>
            </tr>
          </table>
          <button class="normal">Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
}
