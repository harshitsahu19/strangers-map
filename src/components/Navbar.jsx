import React, { useState } from 'react'
import { ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react'
import strangerMapLogo from '../assets/strangers-map-logo.png'

export function BrandMark() {
  return <img className="brand-logo" src={strangerMapLogo} alt="Stranger Map — Short Trips. Big Stories." />
}

export default function Navbar({ detail = false, onCloseDetails, onPlan, onExplore }) {
  const [open, setOpen] = useState(false)
  const closeAndNavigate = () => {
    setOpen(false)
    if (detail) onCloseDetails?.()
  }
  const links = [
    { label: 'Journeys', href: '#journeys' },
    { label: 'How it works', href: '#how' },
    { label: 'Our kind of travel', href: '#stories' },
  ]

  return <>
    <nav className={`nav-wrap common-nav ${detail ? 'spiti-detail-nav' : 'home-nav'}`}>
      <a href="#top" className="brand" aria-label="Stranger Map home" onClick={event => {
        if (detail) {
          event.preventDefault()
          onCloseDetails?.()
        }
      }}><BrandMark /></a>
      <div className="nav-links">
        {links.map(link => <a key={link.href} href={link.href} onClick={detail ? closeAndNavigate : undefined}>{link.label}</a>)}
      </div>
      <button className="nav-cta" onClick={() => {
        setOpen(false)
        if (detail) onPlan?.()
        else onExplore?.()
      }}>{detail ? 'Plan a trip' : 'Explore Spiti'} <ArrowUpRight size={16} /></button>
      <button className="mobile-menu" onClick={() => setOpen(value => !value)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
        {open ? <X /> : <Menu />}
      </button>
    </nav>
    {open && <div className={`mobile-panel ${detail ? 'mobile-panel-detail' : ''}`}>
      {links.map(link => <a key={link.href} href={link.href} onClick={closeAndNavigate}>{link.label}</a>)}
      <button onClick={() => {
        setOpen(false)
        if (detail) onPlan?.()
        else onExplore?.()
      }}>{detail ? 'Plan a trip' : 'Explore Spiti'} <ArrowRight size={16} /></button>
    </div>}
  </>
}
