import React from 'react'
import RecommendService from '../service/RecommendService';

const Recommendation = () => {
        RecommendService.getRecommendation();
}

export default Recommendation;

