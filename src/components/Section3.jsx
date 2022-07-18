import React from 'react'

function Section3() {
  return (
    <section id="section3">
        <article className="sec3_inner container">
            <h2>웃는 남자 출연배우</h2>
            <div className="actor_wrap">
                <div className="actor1">
                    <div className="img1"></div>
                    <div className="text">
                        <strong>박효신</strong>
                        <a href="/">자세히보기</a>
                    </div>
                </div>
                <div className="actor2">
                    <div className="img2"></div>
                    <div className="text">
                        <strong>박은태</strong>
                        <a href="/">자세히보기</a>
                    </div>
                </div>
                <div className="actor3">
                    <div className="img3"></div>
                    <div className="text">
                        <strong>박강현</strong>
                        <a href="/">자세히보기</a>
                    </div>
                </div>
            </div>
            <div className="more"><a href="/">배우 더 보기</a></div>
        </article>
    </section>
  )
}

export default Section3