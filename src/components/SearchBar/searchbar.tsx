import React, { useState } from 'react'
import Cart from '../Cart/Cart'
import './sbar.css'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import Badge from '@material-ui/core/Badge'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'

type searchProps = {
  keyword: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
export default function SearchBar({ keyword, handleChange }: searchProps) {
  const [cartOpen, setCartOpen] = useState(false)
  return (
    <form className="sbar" action="/action_page.php">
      <input
        type="text"
        name="search"
        placeholder="search something..."
        value={keyword}
        onChange={handleChange}
      />
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart />
      </Drawer>
      <Button onClick={() => setCartOpen(true)}>
        <Badge badgeContent={0} color="error">
          <AddShoppingCartIcon />
        </Badge>
      </Button>
    </form>
  )
}
