import React from 'react';
import './Score.css'

const Score = ({ score }) => {
    return (
        <div className = 'scoring'>
            <img src={score.image.original} alt="" height = '335px' width = '1005px'/>
            <h2 style = {{transform : "translateY(140%)", marginBottom: '20px', paddingBottom : '5px', color: 'var(--primary'}}>{score.title}</h2>
            <div className="opinions">
                <div className="good">
                    <i class="fas fa-thumbs-up fa-3x" style = {{color : 'rgb(0, 255, 0)', marginBottom : '20px'}}></i>
                    <p>{score.good.replace('|', '. ')}</p>
                </div>
                <div className={ score.score < 4 ?  "scorevalue red" : score.score < 7 ? "scorevalue orange" : "scorevalue green"}>
                    <h4>{score.score}</h4>
                </div>
                <div className="bad">
                    <i style = {{transform : 'rotateY(180deg)', marginBottom : '20px', color : 'red'}} class="fas fa-thumbs-down fa-3x"></i>
                    <p>{score.bad.replace('|', '. ')}</p>
                </div>
            </div>

            <div className="otherDetails">
                <div className="revType">
                    <h3>Review Type</h3>
                    <h5 style ={{textTransform: 'uppercase'}}>{score.review_type}</h5>
                </div>
                <div className="publishing">
                    <h3>Publish date</h3>
                    <h5>{score.publish_date}</h5>
                </div>
                <div className="linkTo">
                    <h3>Link</h3>
                    <h5><a href={score.site_detail_url}>{score.site_detail_url}</a></h5>
                </div>
            </div>
        </div>
    )
}

export default Score
