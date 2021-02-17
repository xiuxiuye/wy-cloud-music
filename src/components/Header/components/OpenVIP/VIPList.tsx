import React, { useState, useEffect } from 'react'

interface VIPListProps {
  type: number;
  onChange: Function;
}

export default function VIPList ({ type, onChange }: VIPListProps) {
  const [vipList, setVipList] = useState(new Array(0))
  useEffect(() => {
    const list1 = [
      {
        id: 1,
        price: 4.5,
        oldPrice: 13,
        cycle: '月',
        type: 1, // 0： 不自动续费，1：自动续费
        month: null
      },
      {
        id: 2,
        price: 99,
        oldPrice: 138,
        cycle: '年',
        type: 1,
        month: null
      },
      {
        id: 3,
        price: 26.8,
        oldPrice: 39,
        cycle: '季',
        type: 1,
        month: null
      },
      {
        id: 4,
        price: 158,
        oldPrice: null,
        cycle: null,
        type: 0,
        month: 12
      },
      {
        id: 5,
        price: 88,
        oldPrice: null,
        cycle: null,
        type: 0,
        month: 6
      },
      {
        id: 6,
        price: 45,
        oldPrice: null,
        cycle: null,
        type: 0,
        month: 3
      }
    ]
    const list2 = [
      {
        id: 7,
        price: 8,
        oldPrice: null,
        cycle: '月',
        type: 1, // 0： 不自动续费，1：自动续费
        month: null
      },
      {
        id: 8,
        price: 88,
        oldPrice: null,
        cycle: null,
        type: 0,
        month: 12
      },
      {
        id: 9,
        price: 45,
        oldPrice: null,
        cycle: null,
        type: 0,
        month: 6
      },
      {
        id: 10,
        price: 8,
        oldPrice: null,
        cycle: null,
        type: 0,
        month: 1
      }
    ]
    const list = type ? list2 : list1
    setVipList(list)
    onChange(list[0])
  }, [type, onChange])
  return (
    <div className="wyy-open-vip-content-list">
      {vipList.map(el => 
        <div className="wyy-open-vip-content-list-item" key={el.id} onClick={() => onChange(el)}>
          <div>
            <span>{el.price}</span>
            <span>元{el.type ? `/${el.cycle}` : ''}</span>
            <span>{el.oldPrice}</span>
          </div>
          <div>{el.type ? `到期自动续费${el.price}元` : `${(el.price / el.month).toFixed(2)}元/月`}</div>
          <div>{el.type ? `连续包${el.cycle}` : `${el.month}个月`}</div>
          {el.type ? <div className="wyy-open-vip-content-list-item-label">新客首月{el.price}元</div> : null}
        </div>
      )}
    </div>
  )
}
