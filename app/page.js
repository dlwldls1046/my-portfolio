import { useNavigation } from 'next/navigation'
import React from 'react'
import { FaGithub, FaInstagram } from 'react-icons/fa'

const page = () => {
  return (
    <div>
      <header>
        <h1>Welcome to My Portfolio</h1>
      </header>
      <div className="section-wrapper">
        <section>
          <strong class="week-description">
            <h2>About Me</h2>
          </strong>
          <p>
            안녕하세요. 저는 중부대학교에서 정보보호학을 전공 중인 김시우입니다.
          </p>
          <p>현재 next.js, HTML, CSS, JavaScript 를 배우고 있습니다.</p>
        </section>
      </div>
      <div className="section-wrapper">
        <section>
          <strong class="week-description">
            <h2>Projects</h2>
          </strong>
          <ul>
            <li>
              <strong>
                <h3>쇼핑몰 사이트 제작(F.N.S):</h3>
              </strong>
              <p>스터디에서 제작 중인 쇼핑몰 프로그램.</p>
              <p>HTML, CSS, JavaScript 등의 기본 언어 사용.</p>
              <p>
                23.10.07) 로그인, 장바구니, 찜 기능 메인 홈페이지의 기능
                구현까지 완료
              </p>
              <a href="https://github.com/8woo4/Shopping">*GitHub 바로가기*</a>
            </li>
            <li>
              <strong>
                <h3>홍이김송윤:</h3>
              </strong>
              <p>Next.js 기반의 프로그램. 관리자 서버를 활용한 승인 사이트</p>
              <p>(웹서버보안프로그래밍 팀 과제-제작 예정)</p>
              <p>-참여팀원-</p>
              <p>
                92212958 윤다혜 92212776 김시우 92212879 송지현 92213029 이지인
                92213158 홍준희
              </p>
              <a href=""></a>
            </li>
          </ul>
        </section>
      </div>
      <div className="section-wrapper">
        <section>
          <strong>
            <h2 class="week-description">개인공부</h2>
          </strong>

          <p class="week-description">1주차</p>
          <p class="week-description">
            <a href="https://www.notion.so/1st-8cde5585399641099c9d3971478b4fe9?pvs=4">
              html 기본 태그, 속성 학습, W3School 예제, 실습코드
            </a>
          </p>

          <p class="week-description">2주차</p>
          <p class="week-description">
            <a href="https://www.notion.so/2nd-8f854f3417c14154b71e800dc61eba2c?pvs=4">
              Javascript 태그, 속성 학습. 실습코드 작성
            </a>
          </p>
          <p class="week-description">3주차</p>
          <p class="week-description">
            <a href="https://www.notion.so/3rd-1268300a66a840b2a636ff1c90d9d115?pvs=4">
              CSS 태그, 속성 학습. 실습코드 작성
            </a>
          </p>
          <p class="week-description">4주차</p>
          <p class="week-description">
            <a href="https://www.notion.so/4th-7d89a39d050f4cf8a5642050bb11fab6?pvs=4">
              런타임환경, DB 조사
            </a>
          </p>
          <p class="week-description">추가 예정</p>
        </section>
      </div>
      <div></div>
      <section>
        <strong>
          <h2>Contact</h2>
        </strong>
        <p>Email: openup0102@naver.com </p>
        <p>Other Platforms :</p>
        <div>
          <a
            href="https://github.com/8woo4"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href="https://www.instagram.com/8woo4/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <FaInstagram /> Instagram
          </a>
        </div>
      </section>
    </div>
  )
}

export default page
