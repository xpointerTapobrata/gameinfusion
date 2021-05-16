import React,{ useState, useEffect } from 'react';
import './Fifa.css';

const Csgo = () => {
    const pandaAPI = 'iEsKIJT3A_sU-tXGSOhZyRTDsGZcRRrkKAxFgUfrL2DPFv48WHA'
    const ac = new AbortController();
    const signal = ac.signal;

    const [standing, setstanding] = useState([])

    const getStanding = async () => {
        let res = await fetch(`https://api.pandascore.co/tournaments/5789/standings?token=${pandaAPI}`, {signal : signal});
        let standingdata = await res.json();
        setstanding(standingdata);
        console.log(standingdata);
    }

    useEffect(() => {
        getStanding()
        return () => {
            ac.abort()
        }
    }, [])

    return (
        <div className='fifa'>
            <div className={standing.length < 1 ? "message showMessage" : "message" }>Fetching Data... Please Wait</div>
            <div className={standing.length < 1 ? "parameters" : "parameters showParam"}>
                <h3>RANK</h3>
                <h3>TEAM NAMES</h3>
                <h3>MATCHES</h3>
                <h3>WINS</h3>
                <h3>TIES</h3>
                <h3>LOSSES</h3>
            </div>

            {
                standing.map((r,ind) => {
                    if(ind< 10){
                        return (
                            <div className="datas">
                                <p>#{r.rank}</p>
                                <p>{r.team.name}</p>
                                <p>{r.total}</p>
                                <p>{r.wins}</p>
                                <p>{r.ties}</p>
                                <p>{r.losses}</p>
                        </div>
                        )
                    }
                })
            }
        </div>
    )
}

export default Csgo
