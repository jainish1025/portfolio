import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <section className="qualification sectoin">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div
                        className={
                            toggleState === 1
                                ? "qualification__button qualification__active button--flex"
                                : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>

                    <div
                        className={
                            toggleState === 2
                                ? "qualification__button qualification__active button--flex"
                                : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(2)}

                    >
                        <i className="uil uil-briefcase qualification__icon"></i>Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div
                        className={
                            toggleState === 1
                                ? "qualification__content qualification__content-active"
                                : "qualification__content"
                        }
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Designer</h3>
                                <span className="qualification__subtitle">
                                    SilverOak - Institute
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2022 - present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        {/*  */}
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">App UI Designer</h3>
                                <span className="qualification__subtitle">
                                    SilverOak - Institute
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2020 - 2021
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Developer</h3>
                                <span className="qualification__subtitle">
                                    SilverOak - Institute
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2021 - 2022
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        {/*  */}
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">UX Expert</h3>
                                <span className="qualification__subtitle">
                                    SilverOak - Institute
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2021 - 2022
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2 */}

                    <div className={
                        toggleState === 2
                            ? "qualification__content qualification__content-active"
                            : "qualification__content"
                    }>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Product Designer</h3>
                                <span className="qualification__subtitle">Microsoft - Ind</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2022 - present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        {/*  */}
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">UX Designer</h3>
                                <span className="qualification__subtitle">Apple - Ind</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2020 - 2021
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Designer </h3>
                                <span className="qualification__subtitle">Figma - Ind</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>2021 - 2022
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualification;
