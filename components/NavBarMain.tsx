//rfc คีย์ลัดเพื่อสร้างคอมโพเนนต์
import React from 'react'
import Link from 'next/link'

export default function NavBarMain() {
  return (
    <div style={{display: 'flex', justifyContent: 'center', gap: '10px', padding: '10px', backgroundColor: '#374151', color: 'white'}}>
      <Link href="/" style={{color: 'white'}}>Home</Link> |
      <Link href="/about" style={{color: 'white'}}>About</Link> |
      <Link href="/contact" style={{color: 'white'}}>Contact</Link> |
      <Link href="/product" style={{color: 'white'}}>Product</Link>
    </div>
  )
}
