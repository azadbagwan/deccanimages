import React, { Component } from 'react'
import Title from './Title';
import {FaRegHandScissors, FaPaintBrush, FaShuttleVan,FaTree} from "react-icons/fa";
import { IoIosCamera, IoIosConstruct, IoIosHand, IoIosEye} from "react-icons/io";

export default class ServicesHome extends Component {
    state={
        services:[
            {
             icon:<IoIosCamera/>,
             title:"Model Photography/portfolio",
             info:" some information about the service" 
            },
            {
                icon:<IoIosCamera/>,
                title:"Wedding Photography",
                info:" some information about the service" 
               },
               {
                icon:<IoIosCamera/>,
                title:"product Photography",
                info:" some information about the service" 
               },
               {
                icon:<IoIosCamera/>,
                title:"Others",
                info:" some information about the service" 
               }
        ]
    }
    render() {
        return (
            <section className="services">
               <Title title="Services"></Title>
               <div className="services-center">
                   {this.state.services.map((item, index)=>{
                       return <article key={index} className="service">
                           <span className="service">{item.icon}</span>
                           <h6>{item.title}</h6>
                           <p>{item.info}</p>
                       </article>

                   })}
               </div>
            </section>
        )
    }
}
