// pages/index.js
import React, { useState } from 'react'
import { FaGithub, FaInstagram } from 'react-icons/fa'

const Home = () => {
  const [projectInfo, setProjectInfo] = useState('')

  const showProjectInfo = (info) => {
    setProjectInfo(info)
  }

  return (
    <div>
      <header>
        <h1>PORTFOLIO</h1>
      </header>
      <div className="section-wrapper">
        <section className="about-me-section">
          <h2>About Me</h2>
          <p>
            중부대학교 정보보호학과
          </p>
          <p>인투에듀 코칭 강사</p>
        </section>
      </div>
      <div className="section-wrapper">
        <section className="projects-section">
          <h2>Projects</h2>
          <ul>
            <li
              className="project-item"
              onMouseOver={() => showProjectInfo('쇼핑몰 사이트 제작(F.N.S)')}
            >
              <strong>
                <h3>2023</h3>
              </strong>
              <p>- 쇼핑몰 프로그램 제작</p>
              <p>- 교육 코칭 강사 자격증 취득</p>
              <p>- 언어 기초 공부, 사이트 제작
              </p>
              <a href="https://github.com/dlwldls1046">*GitHub 바로가기*</a>
            </li>
            <li
              className="project-item"
              onMouseOver={() =>
                showProjectInfo('팀원들의 성씨를 따와 재치 있게 하나로 연결')
              }
            >
              <strong>
                <h3>TEAM PROJECT</h3>
              </strong>
              <p>Next.js 기반의 프로그램. 관리자 서버를 활용한 승인 사이트</p>
              <p>Team name: 홍이김송윤</p>
              <p>
                92212958 윤다혜 92212776 김시우 92212879 송지현 92213029 이지인
                92213158 홍준희
              </p>
              <a href=""></a>
            </li>
          </ul>
        </section>
      </div>
      <div className="project-info">{projectInfo}</div>
      <section className="contact-section">
        <h2>Contact</h2>
        <p>Email: dlwldls1046@naver.com </p>
        <p>Platforms</p>
        <div>
          <a
            href="https://github.com/dlwldls1046"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> GitHub
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home
