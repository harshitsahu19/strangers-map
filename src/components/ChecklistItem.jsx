import React from 'react'
import { Check } from 'lucide-react'

export default function Checklist({ items = [], className = '' }) {
  return <ul className={`icon-checklist ${className}`}>
    {items.map((item, index) => <li key={`${index}-${item}`}>
      <span className="check-icon" aria-hidden="true"><Check size={13} strokeWidth={2.6} /></span>
      <span>{item}</span>
    </li>)}
  </ul>
}
