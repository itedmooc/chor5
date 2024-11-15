import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    {/* <!-- Navigation--> */}
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div class="container px-0 px-lg-12" id="top">
                {/* <img class="img-fluid" src="assets/img/logo-mooc.png" alt="..." /> */}
                <a class="navbar-brand" href="#top"><img class="img-nav" src="logo-mooc.ico" alt="..."></img></a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><Link class="nav-link" to="/">หน้าแรก</Link></li>
                        <li class="nav-item"><a class="nav-link" href="#project">วัตถุประสงค์</a></li>
                        <li class="nav-item"><a class="nav-link" href="#step">ขั้นตอนการทำ</a></li>
                        <li class="nav-item"><a class="nav-link" href="#calendar">กำหนดการบันทึก</a></li>
                        <li class="nav-item"><a class="nav-link" href="#contact">ติดต่อสอบถาม</a></li>
                        {/* <li class="nav-item"><Link class="nav-link" to="StepProcess">ขั้นตอนการทำงาน</Link></li> */}
                        <li class="nav-item"><a class="nav-link bround" href="https://forms.gle/sitH91WHRMiN1z4n7" target="noopener">ส่งหัวข้อรายวิชา</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        {/* <!-- Masthead--> */}
        <header class="masthead">
            <div class="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                <div class="d-flex justify-content-center">
                    <div class="text-center">
                        <h1 class="mx-auto my-0 text-uppercase">T-VET</h1>
                        <h2 class="text-white mx-auto mt-2 mb-5">การประชุมวิชาการเทคโนโลยีนวัตกรรม 
                            <br></br>และอาชีวศึกษาระดับชาติ "ครั้งที่ 4"
                            <br></br>4th National Conference Technology and Vocational Education & Training
                            </h2>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header
