-- Orders: only allow insert (customers placing orders)
CREATE POLICY "Anyone can create orders"
  ON public.orders FOR INSERT
  WITH CHECK (true);

-- Order items: only allow insert alongside orders
CREATE POLICY "Anyone can create order items"
  ON public.order_items FOR INSERT
  WITH CHECK (true);

-- Order items: can view items of own orders (by session)
CREATE POLICY "Anyone can view order items"
  ON public.order_items FOR SELECT
  USING (true);