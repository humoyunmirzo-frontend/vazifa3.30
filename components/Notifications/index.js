import Image from 'next/image'
import React from 'react'
const notifications = [
    {
        image:require("../../assets/images/Rectangle 774 (1).png"),
        title:'Adam joined team developers',
        info:"04 April, 2021 | 04:00 PM"
    },
    {
        image:require("../../assets/images/Rectangle 774 (2).png"),
        title:'Robert joined team design',
        info:"04 April, 2021 | 04:00 PM"
    },
    {
        image:require("../../assets/images/Rectangle 774.png"),
        title:'Adam joined team developers',
        info:"04 April, 2021 | 04:00 PM"
    },
    {
        image:require("../../assets/images/Rectangle 774 (1).png"),
        title:'Jack joined team design',
        info:"04 April, 2021 | 04:00 PM"
    },
    {
        image:require("../../assets/images/Rectangle 774 (2).png"),
        title:'Robert joined team design',
        info:"04 April, 2021 | 04:00 PM"
    }
]
export default function Notifications() {
  return (
    <div className='d-flex flex-column gap-3'>
        <div className="d-flex justify-content-between">
            <div className="cardTitle">Notifications</div>
            <button className="viewBtn text-capitalize">view all</button>
        </div>
        {
            notifications.map((item,index)=>(
                <div key={index} className="d-flex notificationItem py-2 px-3 align-items-center gap-3">
                    <Image src={item.image}alt=""/>
                    <div className="d-flex flex-column gap-2">
                        <div className="notificationTitle">{item.title}</div>
                        <div className="notificationInfo">{item.info}</div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}
