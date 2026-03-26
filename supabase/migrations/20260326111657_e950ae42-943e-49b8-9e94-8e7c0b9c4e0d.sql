-- Allow service role to manage products (admin operations go through edge functions or direct client with service role)
-- For now, allow insert/update on products for authenticated service role via permissive policies
-- The admin uses the client directly, so we need policies for that

-- Allow anyone to insert products (admin form - will be secured later with proper auth)
CREATE POLICY "Allow insert products"
  ON public.products FOR INSERT
  WITH CHECK (true);

-- Allow anyone to update products (admin form)
CREATE POLICY "Allow update products"
  ON public.products FOR UPDATE
  USING (true);