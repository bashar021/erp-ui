import React from 'react'
import Header from "../components/Header"
import Navbar from "../components/navbar"
import "../components/styles/Profile.css"
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
function Profile() {
  return (
    <div>
<<<<<<< HEAD
{/* //     <Header/>
//     <Todaycircular/>
//     <Navbar/>
//     <section class="h-100 gradient-custom-2">
//   <div class="container py-5 h-100">
//     <div class="row d-flex justify-content-center align-items-center h-100">
//       <div class="col col-lg-9 col-xl-7">
//         <div class="card">
//           <div class="rounded-top text-white d-flex flex-row" style="background-color: #000; height:200px;">
//             <div class="ms-4 mt-5 d-flex flex-column" style="width: 150px;">
//               <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
//                 alt="Generic placeholder image" class="img-fluid img-thumbnail mt-4 mb-2"
//                 style="width: 150px; z-index: 1"/>
//               <button type="button" class="btn btn-outline-dark" data-mdb-ripple-color="dark"
//                 style="z-index: 1;">
//                 Edit profile
//               </button>
//             </div>
//             <div class="ms-3" style="margin-top: 130px;">
//               <h5>Andy Horwitz</h5>
//               <p>New York</p>
//             </div>
//           </div>
//           <div class="p-4 text-black" style="background-color: #f8f9fa;">
//             <div class="d-flex justify-content-end text-center py-1">
//               <div>
//                 <p class="mb-1 h5">253</p>
//                 <p class="small text-muted mb-0">Photos</p>
//               </div>
//               <div class="px-3">
//                 <p class="mb-1 h5">1026</p>
//                 <p class="small text-muted mb-0">Followers</p>
//               </div>
//               <div>
//                 <p class="mb-1 h5">478</p>
//                 <p class="small text-muted mb-0">Following</p>
//               </div>
//             </div>
//           </div>
//           <div class="card-body p-4 text-black">
//             <div class="mb-5">
//               <p class="lead fw-normal mb-1">About</p>
//               <div class="p-4" style="background-color: #f8f9fa;">
//                 <p class="font-italic mb-1">Web Developer</p>
//                 <p class="font-italic mb-1">Lives in New York</p>
//                 <p class="font-italic mb-0">Photographer</p>
//               </div>
//             </div>
//             <div class="d-flex justify-content-between align-items-center mb-4">
//               <p class="lead fw-normal mb-0">Recent photos</p>
//               <p class="mb-0"><a href="#!" class="text-muted">Show all</a></p>
//             </div>
//             <div class="row g-2">
//               <div class="col mb-2">
//                 <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
//                   alt="image 1" class="w-100 rounded-3"/>
//               </div>
//               <div class="col mb-2">
//                 <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
//                   alt="image 1" class="w-100 rounded-3"/>
//               </div>
//             </div>
//             <div class="row g-2">
//               <div class="col">
//                 <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
//                   alt="image 1" class="w-100 rounded-3"/>
//               </div>
//               <div class="col">
//                 <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
//                   alt="image 1" class="w-100 rounded-3"/>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section> */}
    </div>
  )
}
=======
    <Header/>
    <Navbar/>
    <div className="vh-100" style={{ backgroundColor: '#9de2ff' }}>
      <MDBContainer>
        <MDBRow className="justify-content-center">
          <MDBCol md="9" lg="7" xl="5" className="mt-5">
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody className="p-4">
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <MDBCardImage
                      style={{ width: '180px', borderRadius: '10px' }}
                      src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp'
                      alt='Generic placeholder image'
                      fluid />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <MDBCardTitle>Danny McLoan</MDBCardTitle>
                    <MDBCardText>Senior Journalist</MDBCardText>
>>>>>>> b27c4b08c0d6b94fd83fde1f50923000059e9600

                    <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                      style={{ backgroundColor: '#efefef' }}>
                      <div>
                        <p className="small text-muted mb-1">Articles</p>
                        <p className="mb-0">41</p>
                      </div>
                      <div className="px-3">
                        <p className="small text-muted mb-1">Followers</p>
                        <p className="mb-0">976</p>
                      </div>
                      <div>
                        <p className="small text-muted mb-1">Rating</p>
                        <p className="mb-0">8.5</p>
                      </div>
                    </div>
                    <div className="d-flex pt-1">
                      <MDBBtn outline className="me-1 flex-grow-1">Chat</MDBBtn>
                      <MDBBtn className="flex-grow-1">Follow</MDBBtn>
                    </div>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
    </div>
)}export default Profile
