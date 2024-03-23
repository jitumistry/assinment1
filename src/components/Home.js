import React from 'react';
import { useState } from 'react';

const Home = () => {
    const [multiple, setMultiple] = useState(null);

    const [hover, setHover] = useState(null);

    const changeHandler = (i) => {
        setMultiple(i === multiple ? null : i)
    }

    const navigateHandler = (address) => {
        window.open(address)
    }

    const hoverHandler = (h) => {
        setHover(h)
    }

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-3'>
                        <ul>
                            <li className='blue' onClick={() => changeHandler(1)}>Research</li>
                            <li className='skyblue' onClick={() => changeHandler(2)}>Planning</li>
                            <li className='orange' onClick={() => changeHandler(3)}>Desiging</li>
                            <li className='pink' onClick={() => changeHandler(4)}>Manufacturing</li>
                            <li className='purple' onClick={() => changeHandler(5)}>Marketing</li>
                        </ul>
                    </div>
                    <div className='col-3'>
                        {(multiple === 1 || multiple === 6 || multiple === 7) && <ul>
                            <li className='blue' onClick={() => changeHandler(6)} onMouseEnter={() => hoverHandler(16)} onMouseLeave={() => setHover(null)} >External
                                {
                                    hover === 16 && <div className='cardshow'>
                                        <p>Total review: 0</p>
                                        <p>Positive review: 102</p>
                                        <p>Negative review: 3</p>
                                        <p>Comment: 4</p>
                                    </div>
                                }
                            </li>
                            <li className='blue' onClick={() => navigateHandler('/Internal')} onMouseEnter={() => hoverHandler(15)} onMouseLeave={() => setHover(null)} >Internal
                                {
                                    hover === 15 && <div className='cardshow'>
                                        <p>Total review: 79</p>
                                        <p>Positive review: 5</p>
                                        <p>Negative review: 4</p>
                                        <p>Comment: 3</p>
                                    </div>
                                }
                            </li>
                        </ul>}
                        {
                            multiple === 2 &&
                            <ul>
                                <li className='skyblue' onClick={() => navigateHandler('/PRD')} onMouseEnter={() => hoverHandler(14)} onMouseLeave={() => setHover(null)} >PRD
                                    {
                                        hover === 14 && <div className='cardshow'>
                                            <p>Total review: 9</p>
                                            <p>Positive review: 9</p>
                                            <p>Negative review: 9</p>
                                            <p>Comment: 9</p>
                                        </div>
                                    }
                                </li>
                                <li className='skyblue' onClick={() => navigateHandler('/Specs')} onMouseEnter={() => hoverHandler(13)} onMouseLeave={() => setHover(null)} >Specs
                                    {
                                        hover === 13 && <div className='cardshow'>
                                            <p>Total review: 7</p>
                                            <p>Positive review: 7</p>
                                            <p>Negative review: 7</p>
                                            <p>Comment: 7</p>
                                        </div>
                                    }
                                </li>
                            </ul>
                        }{
                            multiple === 3 &&
                            <ul>
                                <li className='orange' onClick={() => navigateHandler('/Hardware')} onMouseEnter={() => hoverHandler(12)} onMouseLeave={() => setHover(null)}  >Hardware
                                    {
                                        hover === 12 && <div className='cardshow'>
                                            <p>Total review: 4</p>
                                            <p>Positive review: 4</p>
                                            <p>Negative review: 4</p>
                                            <p>Comment: 4</p>
                                        </div>
                                    }
                                </li>
                                <li className='orange' onClick={() => navigateHandler('/Software')} onMouseEnter={() => hoverHandler(11)} onMouseLeave={() => setHover(null)}  >Software
                                    {
                                        hover === 11 && <div className='cardshow'>
                                            <p>Total review: 4</p>
                                            <p>Positive review: 3</p>
                                            <p>Negative review: 0</p>
                                            <p>Comment: 1</p>
                                        </div>
                                    }
                                </li>
                            </ul>
                        }{
                            multiple === 4 &&
                            <ul>
                                <li className='pink' onClick={() => navigateHandler('/Material')} onMouseEnter={() => hoverHandler(10)} onMouseLeave={() => setHover(null)}  >Material
                                    {
                                        hover === 10 && <div className='cardshow'>
                                            <p>Total review: 750</p>
                                            <p>Positive review: 78</p>
                                            <p>Negative review: 7</p>
                                            <p>Comment: 8</p>
                                        </div>
                                    }
                                </li>
                                <li className='pink' onClick={() => navigateHandler('/Production')} onMouseEnter={() => hoverHandler(9)} onMouseLeave={() => setHover(null)}  >Production
                                    {
                                        hover === 9 && <div className='cardshow'>
                                            <p>Total review: 750</p>
                                            <p>Positive review: 0</p>
                                            <p>Negative review: 750</p>
                                            <p>Comment: 0</p>
                                        </div>
                                    }
                                </li>
                            </ul>
                        }{
                            multiple === 5 &&
                            <ul>
                                <li className='purple' onClick={() => navigateHandler('/Online')} onMouseEnter={() => hoverHandler(8)} onMouseLeave={() => setHover(null)}  >Online
                                    {
                                        hover === 8 && <div className='cardshow'>
                                            <p>Total review: 145</p>
                                            <p>Positive review: 4545</p>
                                            <p>Negative review: 40</p>
                                            <p>Comment: 4</p>
                                        </div>
                                    }
                                </li>
                                <li className='purple' onClick={() => navigateHandler('/Dealearship')} onMouseEnter={() => hoverHandler(7)} onMouseLeave={() => setHover(null)}  >Dealearship
                                    {
                                        hover === 7 && <div className='cardshow'>
                                            <p>Total review: 124</p>
                                            <p>Positive review: 455</p>
                                            <p>Negative review: 14</p>
                                            <p>Comment: 8</p>
                                        </div>
                                    }
                                </li>
                            </ul>
                        }
                    </div>
                    <div className='col-3'>
                        {(multiple === 6 || multiple === 7) && <ul>
                            <li className='blue' onMouseEnter={() => hoverHandler(5)} onMouseLeave={() => setHover(null)} onClick={() => changeHandler(7)}>B2C
                                {
                                    hover === 5 && <div className='cardshow'>
                                        <p>Total review: 0</p>
                                        <p>Positive review: 0</p>
                                        <p>Negative review: 0</p>
                                        <p>Comment: 0</p>
                                    </div>
                                }
                            </li>
                            <li className='blue' onMouseEnter={() => hoverHandler(6)} onMouseLeave={() => setHover(null)} onClick={() => navigateHandler('/B2C')}>B2C
                                {
                                    hover === 6 && <div className='cardshow'>
                                        <p>Total review: 750</p>
                                        <p>Positive review: 750</p>
                                        <p>Negative review: 750</p>
                                        <p>Comment: 750</p>
                                    </div>
                                }
                            </li>
                        </ul>}
                    </div>
                    <div className='col-3'>
                        {multiple === 7 &&
                            <ul>
                                <li className='blue' onMouseEnter={() => hoverHandler(1)} onMouseLeave={() => setHover(null)} onClick={() => navigateHandler('/ResearchOnline')}>Online
                                    {
                                        hover === 1 && <div className='cardshow'>
                                            <p>Total review: 20</p>
                                            <p>Positive review: 20</p>
                                            <p>Negative review: 20</p>
                                            <p>Comment: 20</p>
                                        </div>
                                    }</li>
                                <li className='blue' onMouseEnter={() => hoverHandler(2)} onMouseLeave={() => setHover(null)} onClick={() => navigateHandler('/Interview')}>Interview
                                    {
                                        hover === 2 && <div className='cardshow'>
                                            <p>Total review: 50</p>
                                            <p>Positive review: 50</p>
                                            <p>Negative review: 50</p>
                                            <p>Comment: 50</p>
                                        </div>
                                    }</li>
                                <li className='blue' onMouseEnter={() => hoverHandler(3)} onMouseLeave={() => setHover(null)} onClick={() => navigateHandler('/PublicData')}>Public Data
                                    {
                                        hover === 3 && <div className='cardshow'>
                                            <p>Total review: 510</p>
                                            <p>Positive review: 510</p>
                                            <p>Negative review: 150</p>
                                            <p>Comment: 510</p>
                                        </div>
                                    }
                                </li>
                                <li className='blue' onMouseEnter={() => hoverHandler(4)} onMouseLeave={() => setHover(null)} onClick={() => navigateHandler('/Health')}>Health
                                    {
                                        hover === 4 && <div className='cardshow'>
                                            <p>Total review: 750</p>
                                            <p>Positive review: 750</p>
                                            <p>Negative review: 750</p>
                                            <p>Comment: 750</p>
                                        </div>
                                    }
                                </li>
                            </ul>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home