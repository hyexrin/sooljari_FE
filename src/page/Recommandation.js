import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import RecommandService from '../service/RecommandService';

export default function Recommandation() {
        useEffect(()=>{
                axios.get('http://localhost:5000/recommand')
                .then(response => console.log(response.data))
        }, [])
        RecommandService.getRecommandation();
  return (
    <div>Recommandation</div>
  )
}
