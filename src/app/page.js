import Footer from './components/Footer.js';
import Input from './components/Input.js';
import Navbar from './components/Navbar.js';
import Link from 'next/link.js';
export default function Home() {

  const rocketSvg = (<svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

    <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
    
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
    
    <g id="SVGRepo_iconCarrier"> <path d="M22 5.36519L22.75 5.36519V5.36519H22ZM9.45453 13.3029L9.98374 12.7714L9.45453 13.3029ZM9.45453 8.54376L9.98374 9.07521L9.45453 8.54376ZM15.4286 14.4926L14.8994 13.9612L15.4286 14.4926ZM10.6493 14.4926L10.1201 15.0241L10.6493 14.4926ZM20.5153 9.42733L21.0445 9.95878L20.5153 9.42733ZM22 5.85801L21.25 5.85801V5.85801H22ZM14.5412 3.47846L14.012 2.94701V2.94701L14.5412 3.47846ZM12.3733 12.6445C12.6669 12.3523 12.6679 11.8774 12.3756 11.5839C12.0833 11.2904 11.6084 11.2894 11.3149 11.5816L12.3733 12.6445ZM7.7089 10.282L8.23891 9.75138L8.23811 9.75058L7.7089 10.282ZM11.4377 6.79421C11.7861 7.0182 12.2502 6.91731 12.4741 6.56888C12.6981 6.22045 12.5972 5.75641 12.2488 5.53243L11.4377 6.79421ZM11.2958 5.81143L10.8903 6.44232V6.44232L11.2958 5.81143ZM9.06028 4.66572L9.1698 3.92376L9.06028 4.66572ZM4.79601 7.2338L5.32521 7.76526L4.79601 7.2338ZM7.5054 4.86419L7.79253 5.55705L7.5054 4.86419ZM5.35106 8.45274L5.62705 7.75537L5.62705 7.75537L5.35106 8.45274ZM5.45826 8.49558L5.17285 9.18916L5.45826 8.49558ZM6.87307 9.44972L7.40228 8.91827L6.87307 9.44972ZM6.79112 9.36866L6.26917 9.90724L6.79112 9.36866ZM5.02164 8.32237L4.74565 9.01974L4.74565 9.01974L5.02164 8.32237ZM13.7351 16.3374L13.2051 16.8681C13.2167 16.8797 13.2286 16.8909 13.241 16.9017L13.7351 16.3374ZM18.4484 11.706C18.2231 11.3584 17.7587 11.2593 17.4111 11.4846C17.0635 11.71 16.9644 12.1744 17.1897 12.5219L18.4484 11.706ZM18.1724 12.6591L17.5431 13.0671V13.0671L18.1724 12.6591ZM19.323 14.8852L20.0648 14.7748L19.323 14.8852ZM16.7441 19.1315L17.2733 19.663L17.2733 19.663L16.7441 19.1315ZM19.1237 16.4335L19.8157 16.7228L19.1237 16.4335ZM15.6917 19.0091L16.3883 18.7311L15.6917 19.0091ZM15.2792 18.0603L14.6218 18.4214L15.2792 18.0603ZM14.19 16.7358L14.7192 16.2043L14.7021 16.1874L14.6841 16.1716L14.19 16.7358ZM14.9015 17.4887L15.4916 17.0257L14.9015 17.4887ZM16.6709 19.2043L16.1417 18.6729L16.1417 18.6729L16.6709 19.2043ZM13.4904 16.0931L13.2315 15.3892L13.4904 16.0931ZM7.86223 10.4352L8.55796 10.7153L7.86223 10.4352ZM6.07821 13.4172C6.37128 13.1244 6.37157 12.6496 6.07886 12.3565C5.78614 12.0634 5.31127 12.0631 5.0182 12.3559L6.07821 13.4172ZM3.85646 14.5762L3.32646 14.0455L3.85646 14.5762ZM2.31852 13.0401L1.78851 12.5095H1.78851L2.31852 13.0401ZM3.00232 13.4172C3.29539 13.1244 3.29568 12.6496 3.00297 12.3565C2.71025 12.0634 2.23538 12.0631 1.94231 12.3559L3.00232 13.4172ZM11.6057 18.9868C11.8988 18.694 11.8991 18.2192 11.6063 17.9261C11.3136 17.633 10.8388 17.6327 10.5457 17.9255L11.6057 18.9868ZM9.38395 20.1458L9.91396 20.6764L9.38395 20.1458ZM10.9219 21.6819L11.4519 22.2125L10.9219 21.6819ZM11.6057 22.0589C11.8988 21.7662 11.8991 21.2913 11.6063 20.9983C11.3136 20.7052 10.8388 20.7049 10.5457 20.9976L11.6057 22.0589ZM10.6328 17.1858C10.9257 16.8929 10.9257 16.418 10.6328 16.1251C10.3399 15.8322 9.86499 15.8322 9.5721 16.1251L10.6328 17.1858ZM7.46967 18.2275C7.17678 18.5204 7.17678 18.9953 7.46967 19.2882C7.76256 19.5811 8.23744 19.5811 8.53033 19.2882L7.46967 18.2275ZM7.85705 14.4134C8.14994 14.1205 8.14994 13.6457 7.85705 13.3528C7.56415 13.0599 7.08928 13.0599 6.79639 13.3528L7.85705 14.4134ZM4.67948 15.4697C4.38659 15.7626 4.38659 16.2374 4.67948 16.5303C4.97238 16.8232 5.44725 16.8232 5.74014 16.5303L4.67948 15.4697ZM7.46042 17.5815C7.75656 17.2919 7.76184 16.8171 7.47223 16.5209C7.18261 16.2248 6.70777 16.2195 6.41163 16.5091L7.46042 17.5815ZM4.70206 18.1811C4.40592 18.4707 4.40064 18.9455 4.69026 19.2417C4.97987 19.5378 5.45472 19.5431 5.75085 19.2535L4.70206 18.1811ZM19.9861 8.89589L14.8994 13.9612L15.9578 15.0241L21.0445 9.95878L19.9861 8.89589ZM11.1785 13.9612L9.98374 12.7714L8.92532 13.8343L10.1201 15.0241L11.1785 13.9612ZM9.98374 9.07521L15.0705 4.00991L14.012 2.94701L8.92532 8.01231L9.98374 9.07521ZM18.1257 2.75H18.6206V1.25H18.1257V2.75ZM21.25 5.36519L21.25 5.85801L22.75 5.85802L22.75 5.36519L21.25 5.36519ZM18.6206 2.75C19.4382 2.75 19.9763 2.75158 20.3751 2.80497C20.7527 2.85552 20.8911 2.93987 20.9759 3.02427L22.0343 1.96137C21.6242 1.55295 21.1169 1.3909 20.5742 1.31824C20.0527 1.24842 19.396 1.25 18.6206 1.25V2.75ZM22.75 5.36519C22.75 4.5933 22.7516 3.93861 22.6814 3.41858C22.6082 2.87664 22.4449 2.37023 22.0343 1.96137L20.9759 3.02427C21.0602 3.10823 21.1443 3.24483 21.1949 3.61928C21.2484 4.01563 21.25 4.55072 21.25 5.36519H22.75ZM9.98374 12.7714C9.40545 12.1956 9.02638 11.8158 8.78258 11.4976C8.55194 11.1966 8.51482 11.0409 8.51482 10.9233H7.01482C7.01482 11.5027 7.25931 11.9759 7.5919 12.4099C7.91134 12.8269 8.37712 13.2884 8.92532 13.8343L9.98374 12.7714ZM10.1201 15.0241C10.6684 15.57 11.1318 16.0338 11.5504 16.3518C11.9864 16.683 12.46 16.9252 13.0389 16.9252V15.4252C12.9179 15.4252 12.76 15.387 12.4578 15.1574C12.1382 14.9145 11.7568 14.537 11.1785 13.9612L10.1201 15.0241ZM21.0445 9.95878C21.7335 9.27266 22.2359 8.79124 22.4995 8.15734L21.1146 7.58125C20.9924 7.87498 20.7622 8.12304 19.9861 8.89589L21.0445 9.95878ZM21.25 5.85801C21.25 6.95105 21.2366 7.28785 21.1146 7.58125L22.4995 8.15734C22.7634 7.5231 22.75 6.82826 22.75 5.85801H21.25ZM15.0705 4.00991C15.8462 3.23743 16.0958 3.00759 16.3919 2.88546L15.8199 1.49878C15.1844 1.76089 14.7014 2.26053 14.012 2.94701L15.0705 4.00991ZM18.1257 1.25C17.1507 1.25 16.455 1.23682 15.8199 1.49878L16.3919 2.88546C16.6883 2.76318 17.0287 2.75 18.1257 2.75V1.25ZM10.5811 14.4292L12.3733 12.6445L11.3149 11.5816L9.52272 13.3663L10.5811 14.4292ZM12.2488 5.53243L11.7014 5.18054L10.8903 6.44232L11.4377 6.79421L12.2488 5.53243ZM11.7014 5.18054C11.162 4.83381 10.722 4.55033 10.3423 4.346C9.95325 4.1366 9.5826 3.98469 9.1698 3.92376L8.95076 5.40768C9.12633 5.4336 9.3244 5.50159 9.63147 5.66685C9.94796 5.83719 10.3315 6.08314 10.8903 6.44232L11.7014 5.18054ZM5.32521 7.76526C5.81546 7.27709 6.33926 6.7557 6.80953 6.32722C7.04446 6.11316 7.25709 5.93055 7.43837 5.791C7.63125 5.64251 7.74625 5.57623 7.79253 5.55705L7.21827 4.17133C6.98217 4.26917 6.73915 4.43628 6.52336 4.60241C6.29596 4.77746 6.04927 4.99066 5.79928 5.21844C5.29969 5.67364 4.75117 6.22004 4.26681 6.70235L5.32521 7.76526ZM9.1698 3.92376C8.51283 3.82679 7.83797 3.91452 7.21827 4.17133L7.79253 5.55705C8.16887 5.40109 8.56998 5.35148 8.95076 5.40768L9.1698 3.92376ZM4.74565 9.01974L5.07507 9.15012L5.62705 7.75537L5.29763 7.625L4.74565 9.01974ZM6.34386 9.98117L7.17969 10.8135L8.23811 9.75058L7.40228 8.91827L6.34386 9.98117ZM5.07507 9.15011C5.13067 9.17212 5.15212 9.18062 5.17285 9.18916L5.74367 7.80201C5.7114 7.78873 5.67905 7.77595 5.62705 7.75537L5.07507 9.15011ZM7.40228 8.91827C7.3627 8.87886 7.3381 8.85434 7.31306 8.83008L6.26917 9.90724C6.28523 9.92281 6.30157 9.93906 6.34386 9.98117L7.40228 8.91827ZM5.17285 9.18916C5.58096 9.3571 5.95301 9.60085 6.26917 9.90724L7.31306 8.83008C6.86009 8.3911 6.32744 8.04224 5.74367 7.80201L5.17285 9.18916ZM4.26681 6.70235C3.54286 7.42323 3.79897 8.64508 4.74565 9.01974L5.29764 7.625C5.35177 7.64642 5.37001 7.72065 5.32521 7.76526L4.26681 6.70235ZM17.1897 12.5219L17.5431 13.0671L18.8018 12.2511L18.4484 11.706L17.1897 12.5219ZM16.2148 18.6001L16.1417 18.6729L17.2001 19.7358L17.2733 19.663L16.2148 18.6001ZM17.5431 13.0671C17.9039 13.6235 18.1507 14.0053 18.3217 14.3203C18.4875 14.6258 18.5554 14.8222 18.5812 14.9956L20.0648 14.7748C20.0034 14.3623 19.8504 13.9924 19.64 13.6047C19.4347 13.2265 19.1499 12.7881 18.8018 12.2511L17.5431 13.0671ZM17.2733 19.663C17.7576 19.1807 18.3063 18.6344 18.7635 18.1369C18.9922 17.888 19.2064 17.6423 19.3822 17.4158C19.549 17.201 19.7171 16.9586 19.8157 16.7228L18.4317 16.1443C18.4128 16.1897 18.3465 16.3038 18.1974 16.4959C18.0573 16.6764 17.8739 16.8881 17.6589 17.122C17.2287 17.5903 16.7051 18.1119 16.2148 18.6001L17.2733 19.663ZM18.5812 14.9956C18.6374 15.373 18.5878 15.7708 18.4317 16.1443L19.8157 16.7228C20.0741 16.1045 20.1625 15.4308 20.0648 14.7748L18.5812 14.9956ZM14.6841 16.1716L14.2292 15.7732L13.241 16.9017L13.6959 17.3L14.6841 16.1716ZM16.3883 18.7311C16.2023 18.2653 16.0877 17.9745 15.9366 17.6993L14.6218 18.4214C14.7185 18.5975 14.7962 18.7888 14.9951 19.2871L16.3883 18.7311ZM13.6608 17.2672C14.0415 17.6464 14.1873 17.7933 14.3115 17.9517L15.4916 17.0257C15.2978 16.7787 15.0752 16.5588 14.7192 16.2043L13.6608 17.2672ZM15.9366 17.6993C15.8068 17.4631 15.658 17.2378 15.4916 17.0257L14.3115 17.9517C14.4276 18.0996 14.5313 18.2567 14.6218 18.4214L15.9366 17.6993ZM17.289 8.01231C16.9217 8.378 16.325 8.378 15.9578 8.01231L14.8994 9.07521C15.8519 10.0237 17.3949 10.0237 18.3474 9.07521L17.289 8.01231ZM15.9578 8.01231C15.5923 7.64836 15.5923 7.05961 15.9578 6.69566L14.8994 5.63276C13.9451 6.583 13.9451 8.12497 14.8994 9.07521L15.9578 8.01231ZM15.9578 6.69566C16.325 6.32997 16.9217 6.32997 17.289 6.69566L18.3474 5.63276C17.3949 4.68427 15.8519 4.68427 14.8994 5.63276L15.9578 6.69566ZM17.289 6.69566C17.6545 7.05961 17.6545 7.64836 17.289 8.01231L18.3474 9.07521C19.3016 8.12497 19.3016 6.583 18.3474 5.63276L17.289 6.69566ZM16.1417 18.6729C16.182 18.6327 16.236 18.6238 16.2734 18.6312C16.311 18.6388 16.3639 18.6699 16.3883 18.7311L14.9951 19.2871C15.356 20.1912 16.5258 20.4073 17.2002 19.7358L16.1417 18.6729ZM14.8994 13.9612C14.4536 14.4051 14.1217 14.735 13.8373 14.9802C13.5518 15.2266 13.3677 15.3391 13.2315 15.3892L13.7494 16.797C14.1379 16.654 14.4842 16.4032 14.8171 16.1161C15.1512 15.8279 15.526 15.4541 15.9578 15.0241L14.8994 13.9612ZM13.2315 15.3892C13.1612 15.415 13.1008 15.4252 13.0389 15.4252V16.9252C13.2864 16.9252 13.5219 16.8806 13.7494 16.797L13.2315 15.3892ZM14.2651 15.8068L14.0204 15.5624L12.9604 16.6237L13.2051 16.8681L14.2651 15.8068ZM8.92532 8.01231C8.5038 8.43205 8.13645 8.79732 7.85067 9.12306C7.56625 9.44725 7.31649 9.78252 7.1665 10.1551L8.55796 10.7153C8.6135 10.5773 8.73189 10.3931 8.97823 10.1123C9.22322 9.83306 9.54925 9.50786 9.98374 9.07521L8.92532 8.01231ZM7.1665 10.1551C7.06824 10.3991 7.01482 10.6534 7.01482 10.9233H8.51482C8.51482 10.8585 8.52633 10.7938 8.55796 10.7153L7.1665 10.1551ZM7.17889 10.8127L7.33222 10.9658L8.39224 9.90452L8.23891 9.75138L7.17889 10.8127ZM5.0182 12.3559L3.32646 14.0455L4.38647 15.1068L6.07821 13.4172L5.0182 12.3559ZM2.84853 13.5708L3.00232 13.4172L1.94231 12.3559L1.78851 12.5095L2.84853 13.5708ZM2.84853 14.0455C2.71716 13.9143 2.71716 13.702 2.84853 13.5708L1.78851 12.5095C1.0705 13.2266 1.0705 14.3897 1.78851 15.1068L2.84853 14.0455ZM3.32646 14.0455C3.19458 14.1772 2.9804 14.1772 2.84853 14.0455L1.78851 15.1068C2.50602 15.8235 3.66896 15.8235 4.38647 15.1068L3.32646 14.0455ZM10.5457 17.9255L8.85394 19.6151L9.91396 20.6764L11.6057 18.9868L10.5457 17.9255ZM11.4519 22.2125L11.6057 22.0589L10.5457 20.9976L10.3919 21.1512L11.4519 22.2125ZM8.85394 22.2125C9.57145 22.9292 10.7344 22.9292 11.4519 22.2125L10.3919 21.1512C10.26 21.2829 10.0458 21.2829 9.91396 21.1512L8.85394 22.2125ZM8.85394 19.6151C8.13593 20.3323 8.13593 21.4954 8.85394 22.2125L9.91396 21.1512C9.78259 21.02 9.78259 20.8077 9.91396 20.6764L8.85394 19.6151ZM9.5721 16.1251L7.46967 18.2275L8.53033 19.2882L10.6328 17.1858L9.5721 16.1251ZM6.79639 13.3528L4.67948 15.4697L5.74014 16.5303L7.85705 14.4134L6.79639 13.3528ZM6.41163 16.5091L4.70206 18.1811L5.75085 19.2535L7.46042 17.5815L6.41163 16.5091Z" fill="#1C274C"/> </g>
    
    </svg>)

  return (
    <>
      <Navbar />
      <section className='landing-main-section'>
        <h1>Your Ultimate Goto <br></br> UI Library</h1>
        <div><Input /></div>
        <Link href="/explore" id='landing-link'><button id='element-button'> {rocketSvg} Browse All Elements</button></Link>        
      </section>
      <Footer />      
    </>
  );
}
