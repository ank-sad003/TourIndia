import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
import weatherImg from '../file/image/weather.png'
import guideImg from '../file/image/guide.png'
import customizationImg from '../file/image/customization.png'

const servicesData = [
   {
      imgUrl: weatherImg,
      title: `Weather`,
      desc: `Study the weather before your visit.`,
   },
   {
      imgUrl: guideImg,
      title: `Best Tour Guide`,
      desc: `This is the best tour guide you'll ever find.`,
   },
   {
      imgUrl: customizationImg,
      title: 'Customization',
      desc: `Customise your trip just as you want`,
   },
]

const ServiceList = () => {
   return <>
      {
         servicesData.map((item, index) => (
            <Col lg='3' md='6' sm='12' className='mb-2' key={index}>
               <ServiceCard item={item} />
            </Col>))
      }
   </>

}

export default ServiceList