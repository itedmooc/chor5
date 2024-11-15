import React from 'react'

function Contact() {
  return (
    <>
      {/* <!-- Contact--> */}
        <section class="contact-section bg-gray" id="contact">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5">
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fas fa-map-marked-alt mb-2"></i>
                                <h4 class="text-uppercase m-0">ติดต่อ</h4>
                                <hr class="my-4 mx-auto" />
                                <div class="small text-black-50">สถาบันการอาชีวศึกษาภาคเหนือ 3 เลขที่ 410 ถนน พิษณุโลก-บึงพระ ตำนล บึงพระ อำเภอเมืองพิษณุโลก จังหวัดพิษณุโลก 65000</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fas fa-envelope mb-2"></i>
                                <h4 class="text-uppercase m-0">QR Code ส่งบทความ</h4>
                                <hr class="my-4 mx-auto" />
                                <img
                                    class="img-fluid"
                                    src="assets/img/19201080.png"
                                    alt="..."
                                />
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fas fa-mobile-alt mb-2"></i>
                                <h4 class="text-uppercase m-0">โทรศัพท์</h4>
                                <hr class="my-4 mx-auto" />
                                <div class="small text-black-50">055-337-611</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div class="social d-flex justify-content-center">
                    <a class="mx-2" href="#!"><i class="fab fa-twitter"></i></a>
                    <a class="mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
                    <a class="mx-2" href="#!"><i class="fab fa-github"></i></a>
                </div> */}
            </div>
        </section>
    </>
  )
}

export default Contact