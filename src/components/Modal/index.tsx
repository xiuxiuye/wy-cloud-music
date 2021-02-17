import React from 'react'
import util from '../../libs/util'
import './index.scss'

interface ModalProps {
  value: boolean;
  children: any;
}

export default function Modal ({ value, children }: ModalProps) {
  if (value) {
    return (<div className="wyy-modal" style={{zIndex: util.getMaxZIndex() + 2000}}>{children}</div>)
  }
  return null
}