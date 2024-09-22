import { AfterViewInit, Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
declare let $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  constructor() {}

  tl = gsap.timeline();
  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set('.rotateELe', {   
      // transform: 'rotate3d(0, 0, 1, -4.932deg)',
      rotate: 0,
      transition: 'transform 200ms linear'
    })

    var rotate = gsap
      .timeline({
        scrollTrigger: {
          trigger: '#homeMain',
          pin: false,
          scrub: 0.2,
          start: 'top top',
          markers: false,
          end: '+=1000',
        },
      })
      .to('.rotateELe', {
          // transform: "rotate3d(0, 0, 1, -180.000deg)",
          rotate: -20,
          transition: "transform 200ms linear"
      }, 0)
      .fromTo('.leaf1', {
        filter: 'blur(5px)',
        // transform: 'translateY(100px) scale3d(1.000, 1.000, 1.000) rotate3d(0, 0, 1, -10.000deg)',
        rotate: -10,
        scale: 1,
        translateY: 100,
        transition: 'filter 200ms linear, transform 200ms linear'
      }, {
        filter: 'blur(0px)',
        // transform: 'translateY(-100px) scale3d(1.500,1.500,1.500) rotate3d(0,0,1,-30.000deg)',
        rotate: -30,
        scale: 1.3,
        translateY: -150,
        transition: 'filter 200ms linear, transform 200ms linear'
      }, 0)
      .fromTo('.leaf2', {
        opacity: 1,
        rotation: 0,
      }, {
        opacity: 1,
        rotation: -10,
        duration: 1,
        ease: 'power2.inOut',
      }, 0);

      gsap.set('.bowl_1', {   
        // transform: 'rotate3d(0, 0, 1, -4.932deg)',
        rotate: 0,
        transition: 'transform 200ms linear'
      });

      gsap.set('.bowl_2', {   
        // transform: 'rotate3d(0, 0, 1, -4.932deg)',
        rotate: 20,
          transition: "transform 200ms linear",
      })
  
      var rotate1 = gsap
        .timeline({
          scrollTrigger: {
            trigger: '#orangeItem',
            pin: false,
            scrub: 0.2,
            start: '-200px',
            markers: false,
            end: '+=1000',
          },
        })
        .to('.bowl_1', {
            // transform: "rotate3d(0, 0, 1, -180.000deg)",
            rotate: -20,
            transition: "transform 200ms linear"
        }, 0)
        .to('.bowl_2', {
            rotate: 0,
            transition: "transform 200ms linear"
        }, 0)


    // var rotate = gsap
    //   .timeline({
    //     scrollTrigger: {
    //       trigger: '#home',
    //       pin: true,
    //       scrub: 0.2,
    //       start: 'top top',
    //       markers: true,
    //       end: '+=100%',
    //     },
    //   })
    //   .to('.rotateELe', {
    //     rotation: 90,
    //     duration: 1,
    //     ease: 'none',
    //   }, 0)
    //   .fromTo('.leaf1', {
    //     opacity: 1,
    //     y: 100,
    //   }, {
    //     opacity: 1,
    //     y: -500,
    //     duration: 1,
    //     ease: 'none',
    //   }, 0)
    //   .fromTo('.leaf2', {
    //     opacity: 1,
    //     rotation: 0,
    //   }, {
    //     opacity: 1,
    //     rotation: -10,
    //     duration: 1,
    //     ease: 'power2.inOut',
    //   }, 0);
      

    // this.tl.fromTo(".anim-typewriter", 8, {
    //   width: "0",
    // }, {
    //   width: "20.18em", /* same as CSS .line-1 width */
    //   ease: SteppedEase.config(37)
    // }, 0);
    // // text cursor animation
    // this.tl.fromTo(".anim-typewriter", 0.5, {
    //   "border-right-color": "rgba(255,255,255,0.75)"
    // }, {
    //   "border-right-color": "rgba(255,255,255,0)",
    //   repeat: -1,
    //   ease: SteppedEase.config(37)
    // }, 0);

    // this.tl.fromTo(
    //   '.txt',
    //   { opacity: 0 },
    //   { opacity: 1, duration: 2, delay: 2 }
    // );
    // this.tl.fromTo(
    //   '.zoom',
    //   { opacity: 0, scale: 0 },
    //   { opacity: 1, scale: 1, duration: 1 }
    // );
    // this.tl.fromTo(
    //   '.but',
    //   { opacity: 0, x: -100 },
    //   { opacity: 1, x: 0, duration: 1.5 }
    // );

    $('.imgcaro_1 .img-owl-carousel .owl-carousel').owlCarousel({
      autoplay: true,
      smartSpeed: 1000,
      center: true,
      margin: 24,
      dots: false,
      loop: true,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>',
      ],
      navContainer: '.imgcaro_1 .img-owl-carousel .custom-nav',
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 1,
        },
        992: {
          items: 1,
        },
      },
    });

    $('.imgcaro_2 .img-owl-carousel .owl-carousel').owlCarousel({
      autoplay: true,
      smartSpeed: 1000,
      center: true,
      margin: 24,
      dots: false,
      loop: true,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>',
      ],
      navContainer: '.imgcaro_2 .img-owl-carousel .custom-nav',
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 1,
        },
        992: {
          items: 1,
        },
      },
    });

    $('.owl-carousel').owlCarousel({
      autoplay: true,
      smartSpeed: 1000,
      center: true,
      margin: 24,
      dots: true,
      loop: true,
      nav: false,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 1,
        },
        992: {
          items: 1,
        },
      },
    });
  }

  imgcaro_1 = [
    {
      img: 'assets/image/caro/caro1.png',
    },
    {
      img: 'assets/image/caro/caro2.png',
    },
    {
      img: 'assets/image/caro/caro3.png',
    },
    // {
    //   "img": "assets/image/caro/caro4.png",
    // },
  ];

  imgcaro_2 = [
    {
      img: 'assets/image/caro/caro7.png',
    },
    {
      img: 'assets/image/caro/caro5.png',
    },
    {
      img: 'assets/image/caro/caro6.png',
    },
    {
      img: 'assets/image/caro/caro4.png',
    },
  ];

  caro = [
    {
      head: 'Made in India',
      con: 'Proudly crafted in India, our spices reflect the rich culinary heritage and traditional techniques of Indian spice-making. Each batch is produced with meticulous attention to detail, ensuring that you receive the highest quality and most authentic flavors in every package.',
      img: 'assets/img/caro1.jpg',
    },
    {
      head: 'Freshly Made',
      con: 'At SIF, freshness is paramount. Our spices are ground and blended in small batches to preserve their natural oils and robust flavors. This commitment to freshness ensures that every time you open a jar, you are greeted with the full, vibrant aroma of perfectly balanced spices.',
      img: 'assets/img/caro2.jpg',
    },
    {
      head: 'Arabian Spices',
      con: "Experience the exotic aromas and tastes of the Middle East with our selection of Arabian spices. Our collection includes the warm, earthy flavors of baharat, the zesty notes of za'atar, and other regional favorites. These spices are perfect for adding depth and complexity to a variety of dishes, from classic Middle Eastern stews to modern fusion creations.",
      img: 'assets/img/caro3.jpg',
    },
    {
      head: 'Quality Assurance',
      con: 'We adhere to strict quality control standards to guarantee that our spices are pure, potent, and free from additives. Each spice undergoes rigorous testing to meet our high standards, ensuring that you receive only the best in every product.',
      img: 'assets/img/caro4.jpg',
    },
  ];

  grid=[
    {
      head: 'Dried Herbs',
      img: 'assets/img/grid/gridimg1.png',
    },
    {
      head: 'Whole Spices',
      img: 'assets/img/grid/gridimg2.png',
    },
    {
      head: 'Home & Kitchen',
      img: 'assets/img/grid/gridimg3.png',
    },
    {
      head: 'Fresh Aromatics',
      img: 'assets/img/grid/gridimg4.png',
    },
    {
      head: 'Peppers',
      img: 'assets/img/grid/gridimg5.png',
    },
    {
      head: 'Dried Spices',
      img: 'assets/img/grid/gridimg6.png',
    },
    {
      head: 'Ground Spices',
      img: 'assets/img/grid/gridimg7.png',
    },
    {
      head: 'Extracts',
      img: 'assets/img/grid/gridimg8.png',
    },
  ]

  card = [
    {
      title: 'Crispy chicken',
      img: 'assets/img/list/list_1.jpg',
    },
    {
      title: 'Chicken patty',
      img: 'assets/img/list/list_2.jpg',
    },
    {
      title: 'Beef patty',
      img: 'assets/img/list/list_3.jpeg',
    },
    {
      title: 'Tender chicken pops',
      img: 'assets/img/list/list_4.jpg',
    },
    {
      title: 'Shawarma',
      img: 'assets/img/list/list_5.jpg',
    },
    {
      title: 'Grill',
      img: 'assets/img/list/list_6.jpg',
    },
    {
      title: 'Biryani Masala',
      img: 'assets/img/list/list_7.jpeg',
    },
    {
      title: 'Mandhi Masala',
      img: 'assets/img/list/list_8.jpg',
    },
    {
      title: 'Al Fahm',
      img: 'assets/img/list/list_9.jpg',
    },
    {
      title: 'Broasted Fish',
      img: 'assets/img/list/list_10.jpg',
    },
    {
      title: 'Grill Fish',
      img: 'assets/img/list/list_11.jpg',
    },
    {
      title: 'Grill shrimps',
      img: 'assets/img/list/list_12.jpg',
    },
    {
      title: 'Broasted shrimps',
      img: 'assets/img/list/list_13.jpg',
    },
  ];
}
