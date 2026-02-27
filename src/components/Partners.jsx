// src/components/Partners.jsx
import React, { useRef, useState, useEffect, forwardRef } from 'react';
import './Partners.css';
import i1 from "../assets/images/adnoc.png";
import i2 from "../assets/images/aldar.png";
import i3 from "../assets/images/emkan.png";
import i4 from "../assets/images/hpd.png";
import i5 from "../assets/images/madares.png";
import i6 from "../assets/images/miral.png";
import i7 from "../assets/images/moc.png";
import i8 from "../assets/images/MPA.png";
import i9 from "../assets/images/nacd.png";
import i10 from "../assets/images/pc.png";

/* All original partner/project descriptions and gallery URLs preserved exactly as provided */

const partnerData = [
  {
    name: "ADNOC",
    description: "We provided comprehensive structural engineering and fabrication services for ADNOC's major oil and gas facilities, ensuring compliance with the highest industry standards and safety regulations.",
    logo: i1,
    color: '#0033A0', // Blue
    gallery: [
      'https://afdshd01.adnoc.ae/adn-prd/-/media/adnoc-v2/images/news/2021/12-dec/pr-adnoc-ge2-08122021.ashx',
      'https://afdshd01.adnoc.ae/adn-prd/-/media/adnoc-v2/images/news/2023/pr--adnoc-gas.ashx',
      'https://www.oilandgasmiddleeast.com/cloud/2021/07/28/Shah-Plant-ADNOC-2.jpg'
    ]
  },
  {
    name: "Aldar",
    description: "Our architectural steel solutions were instrumental in the construction of Aldar's landmark projects, delivering innovative designs and precision fabrication for their premium developments.",
    logo: i2,
    color: '#f4d50c', // Yellow
    gallery: [
      'https://visitabudhabi.ae/-/media/project/vad/what-to-see/landmarks/aldar-hq/aldar-hq-main-image-5000x2800.jpg?rev=8fd8c2ed47404a159f8a40e42ec190d6',
      'https://www.binayah.com/wp-content/uploads/2025/10/The-Row-Saadiyat-by-Aldar.webp',
      'https://www.arup.com/globalassets/images/projects/a/aldar-headquarters/aldar-headquarters.jpg'
    ]
  },
  {
    name: "Emkan",
    description: "We delivered custom metal fabrication services for Emkan's commercial projects, providing high-quality structural components and architectural elements.",
    logo: i3,
    color: '#00732f', // Green from UAE flag
    gallery: [
      'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=120243813795827',
      'https://emkanengineering.com/wp-content/uploads/2024/06/Screenshot-2024-06-26-at-8.52.47%E2%80%AFPM-1024x581.png',
      'https://emkanengineering.com/wp-content/uploads/2024/06/Image-2-1024x585.png'
    ]
  },
  {
    name: "HPD",
    description: "Our engineering expertise supported HPD in delivering complex industrial projects with precision-crafted steel structures and reliable fabrication services.",
    logo: i4,
    color: '#808080', // Gray
    gallery: [
      'https://img1.wsimg.com/isteam/ip/f394895b-8fe0-4cfc-b363-bf531b5d4633/HPD%20homepage%20image.png',
      'https://static.zawya.com/view/acePublic/alias/contentid/5087c1f6-faa5-43f8-ad28-27414e5464f7/0/vokemall-jpg.webp?f=3%3A2&q=0.75&w=3840',
      'https://www.veoliawatertech.com/sites/g/files/dvc3601/files/image/2023/11/hpd_herobanner_292x224.png'
    ]
  },
  {
    name: "Madares",
    description: "We contributed to educational infrastructure development by providing structural steel solutions for Madares' school construction projects across the UAE.",
    logo: i5,
    color: '#0000ff', // Blue
    gallery: [
      'https://media.assettype.com/sunstar%2F2024-03%2Fa85fa004-5918-429b-bb38-e508c94de52f%2Fbuilding_1_.jpg?w=480&auto=format%2Ccompress&fit=max',
      'https://mdares.ai/image-proxy.php?path=uploads%2Fschool_images%2F1756193146__2.webp',
      'https://mdares.ai/image-proxy.php?path=uploads%2Fschool_images%2F1756193146__9.webp'
    ]
  },
  {
    name: "Miral",
    description: "Our team delivered specialized steel structures for Miral's entertainment and tourism projects, including theme park installations and resort developments.",
    logo: i6,
    color: '#800080', // Purple
    gallery: [
      'https://www.reuters.com/resizer/v2/R6ILG6IU25P4DPV5OKMHUXZQRU.jpg?auth=a4fb3d2643e36efa7b8e676dbf4baa9c695b5b9d604f8c9695aaad6680bc8e5a&height=1005&width=1920&quality=80&smart=true',
      'https://mma.prnewswire.com/media/2276225/Miral_Yas_Waterworld.jpg?p=twitter',
      'https://disneyparksblog.com/app/uploads/2025/05/Disney-Abu-Dhabi-1.jpg'
    ]
  },
  {
    name: "Ministry of Culture",
    description: "We provided architectural steelwork for cultural institutions and government buildings, combining aesthetic appeal with structural integrity.",
    logo: i7,
    color: '#ffd700', // Gold
    gallery: [
      'https://c8.alamy.com/comp/3A3HTMJ/15-january-2025-abu-dhabi-uae-ministry-of-culture-building-showcasing-modern-architectural-design-3A3HTMJ.jpg',
      'https://moc.gov.ae/wp-content/uploads/2024/12/Modern-Architectural-Heritage-of-the-UAE-Initiative-1.jpg',
      'https://meconstructionnews.com/wp-content/uploads/2017/06/image001_crop_500x300.jpg'
    ]
  },
  {
    name: "MPA",
    description: "Our marine-grade steel fabrication services supported MPA's port infrastructure projects, delivering durable solutions for harsh marine environments.",
    logo: i8,
    color: '#0000ff', // Blue
    gallery: [
      'https://indiaseatradenews.com/wp-content/uploads/2023/11/dp-world-jebel-ali.jpg',
      'https://www.porttechnology.org/wp-content/uploads/2025/06/iStock-2190857943-768x576.jpg',
      'https://cdn.offshorewind.biz/wp-content/uploads/sites/6/2020/09/09112129/Picture-2-1.jpg'
    ]
  },
  {
    name: "NACD",
    description: "We engineered and fabricated structural components for NACD's civil defense facilities, ensuring maximum safety and reliability.",
    logo: i9,
    color: '#ff0000', // Red
    gallery: [
      'https://cdn.emiratitimes.com/wp-content/uploads/2023/08/14160213/Abu-Dhabi-DoE-establishes-Gas-Safety-Committee-for-LPG-system-inspections.jpg',
      'https://cdn.emiratitimes.com/wp-content/uploads/2023/05/14162434/Abu-Dhabi-Department-of-Energy-1.jpg',
      'https://assets.isu.pub/document-structure/221021154418-a87c2b2c8447fea3c9ed116af2b9ca26/v1/d45547247f749b59142ec22ce84b5aa4.jpeg'
    ]
  },
  {
    name: "PC",
    description: "Our comprehensive metal services supported PC's construction projects with precision-cut materials and custom fabrication solutions.",
    logo: i10,
    color: '#ffa500', // Orange
    gallery: [
      'https://economymiddleeast.com/wp-content/uploads/2025/09/uae-construction2-1-1-1.jpg',
      'https://pcgroupinternational.com/wp-content/uploads/2025/02/equipments-rentals-in-uae-1024x764-1.webp',
      'https://cdn.mos.cms.futurecdn.net/LVVLmpTLU53ajyhSbnijdA-1200-80.jpg'
    ]
  }
];

const structuralProjects = [
  {
    name: "Equestrian Art Foundation - Al Jubail Island",
    client: "Al Diyar General Contracting LLC",
    scope: "Design, Fabrication, Supply, Calculation, Delivery & Installation of Steel Structures Including Sandwich Panels and Fire Paint",
    location: "Abu Dhabi, UAE",
    status: "Completed",
    gallery: [
      'https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3525073137354551849',
      'https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3525073137732087764',
      'https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3525073137371345015'
    ]
  },
  {
    name: "ADNEC Residences",
    client: "Al Firas General Contracting Establishment",
    scope: "Design, Fabrication, Supply and Installation of Steel Structures, Steel Structure Pergola: Shade Structure, Steel Duplex Structure Stairs. GRP Cladding Works, Feature Walls",
    location: "Abu Dhabi, UAE",
    status: "Completed",
    gallery: [
      'https://greenvision.ae/storage/lcHm8nFneZiMAyWFE9LHDOImTtPrWr-metacHJvLTIuanBn-.jpg',
      'https://static.wixstatic.com/media/90b001_ad3827ea44284154a2a7389000505a54~mv2.jpg/v1/fill/w_980,h_528,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ADNEC5.jpg',
      'https://www.gaae.com/assets/Uploads/MultipurposePage/MultipurposeGalleryImages/GalleryImages/Abu-Dhabi-architect-ADNEC-complex-a.jpg'
    ]
  },
  {
    name: "KIZAD HQ Offices Area B",
    client: "Abu Dhabi Ports Group",
    scope: "Design, Fabrication, Erection, Supply, Install, Testing and Commissioning of Steel Staircases Including Protective/ Fire Protection Coating, Accessories, Fittings and Fixing.",
    location: "Abu Dhabi, UAE",
    status: "Completed",
    gallery: [
      'https://as-images.imgix.net/843de8c40c0afc12d4728334a767dbb2-image%202.png?w=1600',
      'https://cdn.prod.website-files.com/6538a7ad52c9d823231bd209/6544aad00d367ddd3411e9b0_Screenshot%202023-11-03%20at%2012.09.29%20PM.png',
      'https://res.cloudinary.com/protenders/image/upload/s--ZW6gNAtu--/c_limit,dpr_auto,f_auto,fl_progressive:semi,q_auto:eco,w_auto:100/e97ff534a3f494ecb4d425221e136dcf.png'
    ]
  },
  {
    name: "BISAD Auditorium Building",
    client: "Abu Dhabi University Holding Company",
    scope: "Design, Fabrication, Supply & Installation of Steel Structure, Cladding, Metal Decking, Staircase with Handrail, Decorative Steel Work, Connecting Bridge, Ramp Handrail, Cat Ladder, Gate.",
    location: "Abu Dhabi, UAE",
    status: "Completed",
    gallery: [
      'https://www.nordangliaeducation.com/bis-abu-dhabi/-/media/corporate/school-front-wide-bisad.jpg?rev=f20d093cbbad4997a58eab4649d4aed3&hash=6911C368B27B333CFC83F29DD446B075',
      'https://www.nordangliaeducation.com/bis-abu-dhabi/-/media/aprimo/74803e/bisad_bisad_campus_header.jpg?rev=96c8ae90517243b088a32839e4d98717&hash=D3BA2A2C2FD20E38AEC6EDB67634A21E',
      'https://www.nordangliaeducation.com/bis-abu-dhabi/-/media/bis-abu-dhabi/pdfs-and-docs/facilities-full-school-view-with-grass1.jpg?h=1667&iar=0&w=2500&rev=662829d9c3f9494ebaffb7b2bd46bb7f&hash=2A787AA645960AB38CB99CD07C00F0B6'
    ]
  },
  {
    name: "Abu Dhabi Cycling Club",
    client: "Modon",
    scope: "Design, Fabrication, Supply and Installation of Steel Structural, Cladding and Roof support, Decking Slab, Stair Case, Stair Case Handrail, Glass Handrail, Balcony Seiling and Cladding, Mechanical Room and Canopy Cladding, Cat Ladder, Steel Structure Building for Storage, Club Building Including all types of Roof and Wall Cladding, 1385 SqM Covered Area.",
    location: "Abu Dhabi, UAE",
    status: "Completed",
    gallery: [
      'https://bike.abudhabi/media/1223/abu-dhabi-cycling-club.jpg',
      'https://www.mediaoffice.abudhabi/assets/resized/sm/upload/zx/4i/4d/ms/20231018_ADCC_Link-my-Ride_web-0-690-0-388-crop-aspect.webp?k=ad6e6b9370',
      'https://pbs.twimg.com/media/E5IFQXAWYAEarbv?format=jpg&name=large'
    ]
  },
  {
    name: "Sheikh Khalifa Bin Zayed Al Nahyan Mosque",
    client: "MOPA",
    scope: "Design, Fabrication, Supply and Installation of Structural Steel Domes and Roof support for Mosque, Decking Slab, Handrail, Dome Structure, Steel and Spiral Stair Case, Steel Structure Combo Roof for the mosque including main Minaret Dome with diameter of 12 meter. 4670 SqM Covered Area.",
    location: "Ras Al Khaimah, UAE",
    status: "Completed",
    gallery: [
      'https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=2742983320491851605',
      'https://visitrasalkhaimah.com/wp-content/uploads/2019/07/1.jpg',
      'https://visitrasalkhaimah.com/wp-content/uploads/2019/07/2-1.jpg'
    ]
  },
  {
    name: "MOPA Admin Building",
    client: "MOPA",
    scope: "Design, Build, Steel Skeleton around the Curtain Wall of existing Building to take facia of Stone GRC Cladding. Fabrication, Supply and Installation of Steel Structure for external Cladding, 4230 SqM Covered Area.",
    location: "Abu Dhabi, UAE",
    status: "Completed",
    gallery: [
      'https://res.cloudinary.com/protenders/image/upload/c_limit,d_missing,dpr_3.0,f_auto,fl_progressive:semi,q_auto:eco,w_500/c097cb152b986f483e05600868de4431.jpg',
      'https://res.cloudinary.com/protenders/image/upload/c_limit,d_missing,dpr_3.0,f_auto,fl_progressive:semi,q_auto:eco,w_500/ndhuywkhvztoa2kcpzt3.jpg',
      'https://www.mecemirates.com/wp-content/uploads/2013/07/16__.jpg'
    ]
  },
  {
    name: "Yacht Club - Al Jubail Island",
    client: "Abu Dhabi International Contracting & General Maintenance Company",
    scope: "Design, Supply & Erection of Steel Structure Works",
    location: "Abu Dhabi, UAE",
    status: "Completed",
    gallery: [
      'https://jubailisland.ae/wp-content/uploads/2023/03/Marsa-Al-Jubail-1.jpg',
      'https://jubailisland.ae/wp-content/uploads/2024/04/YachtClub-Bada-Al-Jubail-Jubail-Island-scaled.jpg',
      'https://adicc-uae.com/wp-content/uploads/2024/02/21080100_JUBAIL_V08-BOARDWALK_20230404-copy-scaled.jpg'
    ]
  }
];

const architecturalProjects = [
  {
    name: "Modular Houses Villa-Pergola",
    client: "TRE ESSE Construction & Maintenance Services L.L.C",
    scope: "Design, Engineering, Fabrication, Supply & Installation of Structural Steel Works For Pergola Structure, as per Value Engineering, Including Anchor Bolts and Aluminum Infils made out of Hollow Sections.",
    challenges: "Completing 7 Pergola's Design, Fabrication and Installation is such a big challenge just in 15 days , But with Widely Experienced Manpower, We was able to complete on time.",
    location: "Abu Dhabi, UAE",
    status: "Completed",
    gallery: [
      'https://rectangleinterior.com/wp-content/uploads/2024/04/Private-Luxury-Villa-MBR-City-11-1024x681.webp',
      'https://palmiyeemirates.ae/wp-content/uploads/2024/05/DSC08847.jpg',
      'https://radyinterior.ae/wp-content/uploads/2025/08/Shade-and-Cooling-Solutions-1024x761.jpeg'
    ]
  },
  {
    name: "Yas South, Integrated Destination Resort",
    client: "Link Investments",
    scope: "Corten Steel Decorative and Structural Art Works. Ramp, Column Cladding, Pier, Glass Partition Support, Upper Main Portal, Upper Plaza Shade Structure, Car Lift Lobby, Hotel Corridor, Handrail, Mashrabya, Shade Structure.",
    challenges: "This was the essence for this Project especially when Material is Corten Steel. The Tall Gates its Self was not easy to install, But with Widely Experienced Manpower, We was able to complete on time.",
    location: "Abu Dhabi, UAE",
    status: "Completed",
    gallery: [
      'https://archello.s3.eu-central-1.amazonaws.com/images/2019/10/21/Yas-South-3-Pascall-Watson-4-3.1571653276.2245.jpg',
      'http://emergy.global/wp-content/uploads/2020/11/08-Yas-South-Mosque.jpg',
      'https://amc-protection.com/wp-content/uploads/2022/02/YAS-SOUTH-INTEGRATED-DESTINATION-RESORT-HILTON-FAMILY-HOTEL-400x284.jpg'
    ]
  },
  {
    name: "Al Dar Headquarters",
    client: "Al Dar",
    scope: "Subcontractors for Façade Contractor, All Special Brackets as well as Cladding Works. Fabrication, Supply and Installation of Structural Steel Bracketry for Curtain Walling.",
    challenges: "Ball Bracing Brackets, Which was new to us as well as with severe will to achieve we Performed Relatively well on this job.",
    location: "Abu Dhabi, UAE",
    status: "Completed",
    gallery: [
      'https://upload.wikimedia.org/wikipedia/en/0/00/Aldar_Headquarters_Building.jpg',
      'https://www.arup.com/globalassets/images/projects/a/aldar-headquarters/aldar-headquarters.jpg',
      'https://www.fm-middleeast.com/cloud/2021/08/02/Aldar-Headquarters-1.jpg'
    ]
  },
  {
    name: "Sheik Zayed Mosque Decorative Metal Works",
    client: "MOPA",
    scope: "Design, Build Panoramic lift and all Glaves, Railings and Mashrabya with CNC cut and size extraordinary. Engineering, Fabrication, Supply & Installation of decorative Metal Works, Handrail, Glass Handrail, Lift Structure, Metal Arch, Metal Fence, Auditorium Structure, Steel Structure Bollard, Steel Structure Pipe Bump Rail, Overhead Crane.",
    challenges: "Mopa is being our one of the most destined as well as distinguished client, we provided our services for non-structural steel such as Curved Glass Railing, Panoramic lifts, extra size Mashrabya which gave our name also new dimension.",
    location: "Abu Dhabi, UAE",
    status: "Completed",
    gallery: [
      'https://www.quanex.com/wp-content/uploads/2023/04/IGS_Commercial_Project_SheikZayedGrandMosque-8.jpg',
      'https://thearabweekly.com/sites/default/files/styles/article_image_800x450_/public/2021-02/2021-02-23_16-12-00_184899.jpg?itok=2-k7qJLR',
      'https://thumbs.dreamstime.com/b/decorative-element-sheikh-zayed-grand-mosque-abu-dhabi-united-arab-emirates-november-decorative-element-sheikh-zayed-156510312.jpg'
    ]
  },
  {
    name: "Pedestrian Link Bridge",
    client: "M4 Contracting",
    scope: "Design Engineering, Drawings, Fabrication, Supply, Installation of Structural Steel Works, Installation Of Complete Epoxy/Fire Rated Structure, Fire proofing, Aluminum Profile, Roofing System Works",
    location: "Abu Dhabi, UAE",
    status: "Completed",
    gallery: [
      'https://dissingweitling.com/assets/upload/_landscape2400/DissingWeitling_adnec-pedestrian-bridge_exterior.jpg',
      'https://c8.alamy.com/comp/2FNPPWB/central-bus-station-pedestrian-bridge-over-sultan-bin-zayed-the-first-street-in-abu-dhabi-uae-2FNPPWB.jpg',
      'https://media.assettype.com/gulfnews/import/2015/3/7/1_16a0831515c.1468173_308664404_16a0831515c_large.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true'
    ]
  },
  {
    name: "KBZA School Football Field",
    client: "ARCO Electromechanical LLC",
    scope: "Design Engineering, Fabrication, Supply, Installation of Structural Steel Works",
    location: "Dubai, UAE",
    status: "Completed",
    gallery: [
      'https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3345863481105550070',
      'https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3314855296122587215',
      'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=3886746238228596'
    ]
  },
  {
    name: "Amsaf Mall",
    client: "Amsaf Investment (L.L.C).",
    scope: "Design, Fabrication, Supply, Delivery, Installation of Steel Structure, Testing and remedying any Defects thereto of Roof Pergolas (Including Primary and Secondary Steel with Primer, ACP Cladding & Aerofoil Fins) Works.",
    location: "Abu Dhabi, UAE",
    status: "In Progress",
    gallery: [
      'https://www.propertyfinder.ae/blog/wp-content/uploads/2025/06/01-3.webp',
      'https://www.propertyfinder.ae/blog/wp-content/uploads/2025/06/4-30.webp',
      'https://www.propertyfinder.ae/blog/wp-content/uploads/2025/06/1-9-1.webp'
    ]
  },
  {
    name: "Warner Bros. Hotel",
    client: "Miral",
    scope: "Design Engineering, Fabrication, Installation of Steel Structure, Decking Slab, Standing Seam & Cladding, Podium, Corridor, Ball Room, Arcade, Retail Entrance, Pool Bar Canopy, Retail Dec Slab and Sky Light, WB Logo Structure, Service Apartment, Spiral Stair Case, Pergola 1-2-3, Mashrabya, Sliding and Swing Gate.",
    location: "Abu Dhabi, UAE",
    status: "Completed",
    gallery: [
      'https://media-cdn.tripadvisor.com/media/photo-s/27/57/d5/7a/exterior.jpg',
      'https://assets.hiltonstatic.com/hilton-asset-cache/image/upload/c_fill,w_4724,h_3149,q_90,f_auto/c_fill,w_1920,h_1279,q_90,f_auto/Imagery/Property%20Photography/Curio%20Collection/A/AUHWBQQ/AUHWBQQ_The%20Matinee%20View.jpg',
      'https://i.ytimg.com/vi/SNt8E-7oF3E/maxresdefault.jpg'
    ]
  },
  {
    name: "Mayan Tower",
    client: "Al Dar",
    scope: "Design, Fabrication, Supply and Installation of Structural Steel support for Louvers and Feature Beam Columns, Structural Steel Farming System and Steel Structure for MEC-AC stands.",
    location: "Abu Dhabi, UAE",
    status: "Completed",
    gallery: [
      'https://metropolitan.realestate/wp-content/uploads/2021/03/Mayan-01-1024x591.jpg',
      'https://psinv.net/assets/uploads/images/622d8f07-4350-4bab-9943-e331855cf5b7/general-images1-n-a--0x0.jpg',
      'https://abu-dhabi.realestate/wp-content/uploads/2021/10/mayan-768x514.jpg'
    ]
  },
  {
    name: "Khalifa Mall",
    client: "LULU",
    scope: "Design, Fabrication, Supply and Installation of Structural Steel support for Roof .",
    location: "Abu Dhabi, UAE",
    status: "Completed",
    gallery: [
      'https://www.timeoutabudhabi.com/cloud/timeoutabudhabi/2021/09/11/YWVoDQwo-01_Forsan_Central_Mall.jpg',
      'http://architizer-prod.imgix.net/media/1471958168294Khalifa_City_04_Main_Entrance.jpg?w=1680&q=60&auto=format,compress&cs=strip',
      'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=102284711370469'
    ]
  },
  {
    name: "Emirates National School Khawaneej 1&2",
    client: "Emirates National School",
    scope: "Fabrication, Supply and Installation of Structural Steel For Roof and Standing Seam.",
    location: "Dubai, UAE",
    status: "Completed",
    gallery: [
      'https://www.ens.sch.ae/static/media/dubai_camp.e46deaaa50ce92cc80df.jpg',
      'https://www.khda.gov.ae/SchoolImage/502174L.jpg',
      'https://media-whichmedia.s3.ap-southeast-1.amazonaws.com/media/large/9/5/95ea17c06d76.jpg'
    ]
  },
  {
    name: "Marine Research Center",
    client: "MOPA",
    scope: "Design, Fabrication, Supply & Installation of Structural Steel Building for Different Facilities.",
    location: "Umm Al Quwain, UAE",
    status: "Completed",
    gallery: [
      'https://ldk.gr/images/projects/591/main.jpg',
      'https://metenders.com/project_cms/uploads/project/Sheikh%20Khalifa%20Bin%20Zayed%20Centre%20Preoject.jpg',
      'https://c8.alamy.com/comp/BNW77X/umm-al-quwain-marine-research-centre-united-arab-emirates-BNW77X.jpg'
    ]
  },
  {
    name: "Presidential Palace",
    client: "MOPA",
    scope: "Design, Fabrication, Supply and Installation of Steel support Structure for Chandelier Brackets including Load Testing with Chandelier weights ranging from 30kgs to 16500 kgs.",
    location: "Abu Dhabi, UAE",
    status: "Completed",
    gallery: [
      'https://static.myconnect.ae/-/media/yasconnect/project/ppad/schoolprogram/qaw-card-image.jpg',
      'https://upload.wikimedia.org/wikipedia/en/thumb/7/7c/Qasr_Al_Watan_in_March_2022_02.jpg/1200px-Qasr_Al_Watan_in_March_2022_02.jpg',
      'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/12/73/3a/55.jpg'
    ]
  },
  {
    name: "MOPA Admin Building",
    client: "MOPA",
    scope: "Design, Build Panoramic lift and all Glaves, Railings and Mashrabya with CNC cut and size extraordinary. Engineering, Fabrication, Supply & Installation of decorative Metal Works, Handrail, Glass Handrail, Lift Structure, Metal Arch, Metal Fence, Auditorium Structure, Steel Structure Bollard, Steel Structure Pipe Bump Rail, Overhead Crane.",
    location: "Abu Dhabi, UAE",
    status: "Completed",
    gallery: [
      'https://res.cloudinary.com/protenders/image/upload/c_limit,d_missing,dpr_3.0,f_auto,fl_progressive:semi,q_auto:eco,w_500/c097cb152b986f483e05600868de4431.jpg',
      'https://res.cloudinary.com/protenders/image/upload/c_limit,d_missing,dpr_3.0,f_auto,fl_progressive:semi,q_auto:eco,w_500/ndhuywkhvztoa2kcpzt3.jpg',
      'https://www.mecemirates.com/wp-content/uploads/2013/07/16__.jpg'
    ]
  },
  {
    name: "Repton Senior School",
    client: "Al Dar",
    scope: "Design, Fabrication, Supply & Installation of Structural Steel For Teaching & Sports Block.",
    location: "Abu Dhabi, UAE",
    status: "Completed",
    gallery: [
      'https://bsbgroup.com/application/files/cache/thumbnails/ee2261f5febbb502649430ad3cdfc7dd.jpg',
      'https://bsbgroup.com/application/files/7515/7613/4838/Repton-Senior-School-11-2000x1335.jpg',
      'https://media-whichmedia.s3.ap-southeast-1.amazonaws.com/media/large/6/c/6c0cfe881c6b.jpeg'
    ]
  },
  {
    name: "Water Front Project",
    client: "Link Investments",
    scope: "Design, Engineering, Fabrication, Supply abd Installation of Steel Structure and Staircases, Floating Resturent Structure and Standing Seam, Gym Roof Structure and Staircase, Townhouse Staircase Structure with Wooden Steps and Glass Handrail, Roof Arch Truss Structure and ACP Cladding, Roof GRC Structure and GRC Cladding on elevation 1 & 3 and External Canopy Structure with Decking Slab.",
    location: "Abu Dhabi, UAE",
    status: "Completed",
    gallery: [
      'https://images.squarespace-cdn.com/content/v1/616c31383a6fd661d13b21df/1643171374243-M1JTAEAG8SEJCG7JR9HZ/Sheet+03.jpg',
      'https://www.commercialinteriordesign.com/cloud/2021/07/07/Al-Qana-Abu-Dhabi-MZ-Architects-(3).jpg.jpg',
      'https://www.cbnme.com/wp-content/uploads/2025/07/Al-Maryah-Waterfront-Render-1_Compressed-scaled-1024x682.jpg'
    ]
  },
  {
    name: "Sheikh Zayed Grand Mosque",
    client: "MOPA",
    scope: "Design, Build Panoramic lift and all Glaves, Railings and Mashrabya with CNC cut and size extraordinary. Engineering, Fabrication, Supply & Installation of decorative Metal Works, Handrail, Glass Handrail, Lift Structure, Metal Arch, Metal Fence, Auditorium Structure, Steel Structure Bollard, Steel Structure Pipe Bump Rail, Overhead Crane.",
    location: "Abu Dhabi, UAE",
    status: "Completed",
    gallery: [
      'https://www.quanex.com/wp-content/uploads/2023/04/IGS_Commercial_Project_SheikZayedGrandMosque-8.jpg',
      'https://thearabweekly.com/sites/default/files/styles/article_image_800x450_/public/2021-02/2021-02-23_16-12-00_184899.jpg?itok=2-k7qJLR',
      'https://thumbs.dreamstime.com/b/decorative-element-sheikh-zayed-grand-mosque-abu-dhabi-united-arab-emirates-november-decorative-element-sheikh-zayed-156510312.jpg'
    ]
  },
  {
    name: "Al Dar Headquarters",
    client: "Al Dar",
    scope: "Subcontractors for Façade Contractor, All Special Brackets as well as Cladding Works. Fabrication, Supply and Installation of Structural Steel Bracketry for Curtain Walling.",
    location: "Abu Dhabi, UAE",
    status: "Completed",
    gallery: [
      'https://upload.wikimedia.org/wikipedia/en/0/00/Aldar_Headquarters_Building.jpg',
      'https://www.arup.com/globalassets/images/projects/a/aldar-headquarters/aldar-headquarters.jpg',
      'https://www.fm-middleeast.com/cloud/2021/08/02/Aldar-Headquarters-1.jpg'
    ]
  },
  {
    name: "New York University Abu Dhabi, UAE",
    scope: "Miscellaneous Curtain Wall Glazing Installation Jobs",
    location: "Abu Dhabi, UAE",
    status: "Completed",
    gallery: [
      'https://nyuad.nyu.edu/content/dam/nyuad/about/nyuad-at-a-glance/campus/general-campus-gallery/20170417-nyuad-campus-78.jpg.transform/gallery-big/image.jpg',
      'https://nyuad.nyu.edu/content/nyuad/en/home/about/_jcr_content/mainparsys/columncontol_3410753/columnpar6_1/image/image.img.jpg',
      'https://nyuad.nyu.edu/content/nyuad/en/home/about/the-nyuad-campus/_jcr_content/mainparsys/columncontol_386792073/columnpar3_2/phototext/image.img.jpg'
    ]
  },
  {
    name: "Financial Center Abu Dhabi, UAE",
    scope: "Miscellaneous Curtain Wall Glazing Installation Jobs",
    location: "Abu Dhabi, UAE",
    status: "Completed",
    gallery: [
      'https://static1.gensler.com/uploads/image/63594/project_abu-dhabi-financial-centre_01.jpg',
      'http://swanseasurveys.com/wp-content/uploads/2016/09/ADFC.png',
      'https://static1.gensler.com/uploads/hero_element/5202/thumb_desktop/thumbs/project_abu-dhabi-financial-centre_05_1024x576.jpg'
    ]
  },
  {
    name: "Al Muneera (Raha Beach)",
    scope: "Miscellaneous Curtain Wall Glazing Installation Jobs",
    location: "Abu Dhabi, UAE",
    status: "Completed",
    gallery: [
      'https://visitabudhabi.ae/-/media/project/vad/galleryimages/where-to-go/al-raha-beach-plazas/main-image-almuneera03.jpg?rev=ca48d4f133f64820a32d80f10d644e72',
      'https://a2zsolutions.ae/wp-content/uploads/2023/01/f63fa4409ce9ed81b7f8507468fabb58c870676a.jpg',
      'https://i.ytimg.com/vi/TeEGhPsq2bw/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDehU-x2ctT0Q7R96MB3wYeKy3Bkg'
    ]
  },
  {
    name: "Adnec Tower",
    scope: "Miscellaneous Curtain Wall Glazing Installation Jobs",
    location: "Abu Dhabi, UAE",
    status: "Completed",
    gallery: [
      'https://www.smwllc.com/wp-content/uploads/2016/06/ADNEC-Capital-Gate-Dubai-Mixed-Use-AC-AV-ITI-ITS-825x550.jpg',
      'https://rmjm.com/wp-content/uploads/2017/06/02.-Capital_Gate.jpg',
      'https://rmjm.com/wp-content/uploads/2017/06/Capital_Gate_New5-1.jpg'
    ]
  }
];

const projects = [
  ...structuralProjects,
  ...architecturalProjects
];

const Gallery = ({ images }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!images || images.length === 0) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images]);

  return (
    <div className="ps-gallery" aria-live="polite">
      <img src={images[current]} alt="gallery" className="ps-gallery-img" loading="lazy" />
    </div>
  );
};

const PartnerCard = ({ partner, onClick }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const { left, top, width, height } = card.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 20;
    const y = (e.clientY - top - height / 2) / 20;
    card.style.transform = `perspective(900px) rotateY(${x}deg) rotateX(${-y}deg) scale(1.03)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg) scale(1)';
  };

  return (
    <button
      type="button"
      className="ps-card"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ ['--color']: partner.color }}
      aria-label={`Go to ${partner.name} section`}
    >
      <div className="ps-card-inner">
        <img src={partner.logo} alt={`${partner.name} logo`} className="ps-card-logo" loading="lazy" />
        <h3 className="ps-card-title">{partner.name}</h3>
      </div>
    </button>
  );
};

const PartnerSection = forwardRef(({ partner }, ref) => {
  return (
    <section
      id={partner.name.toLowerCase().replace(/\s/g, '-')}
      ref={ref}
      className="ps-section"
      aria-labelledby={`partner-${partner.name}`}
      tabIndex={-1}
    >
      <div className="ps-section-inner">
        <h2 id={`partner-${partner.name}`} className="ps-section-title">{partner.name}</h2>
        <div className="ps-section-body">
          <p className="ps-section-desc">{partner.description}</p>
          <Gallery images={partner.gallery} />
        </div>
      </div>
    </section>
  );
});

const ProjectCard = ({ project }) => {
  return (
    <article className="ps-project-card" aria-label={project.name}>
      <div className="ps-project-inner">
        <h3 className="ps-project-title">{project.name}</h3>
        {project.client && <p><strong>Client:</strong> {project.client}</p>}
        {project.scope && <p><strong>Scope of Work:</strong> {project.scope}</p>}
        {project.challenges && <p><strong>Challenges:</strong> {project.challenges}</p>}
        {project.location && <p><strong>Location:</strong> {project.location}</p>}
        {project.status && <p><strong>Status:</strong> {project.status}</p>}
        {project.gallery && <Gallery images={project.gallery} />}
      </div>
    </article>
  );
};

export default function Partners() {
  const partnerRefs = useRef([]);
  partnerRefs.current = [];

  const setRef = (index) => (el) => {
    partnerRefs.current[index] = el;
  };

  const handleClick = (index) => {
    const el = partnerRefs.current[index];
    if (!el) return;
    const header = document.querySelector('.site-header');
    const offset = header ? header.offsetHeight + 12 : 0;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
    el.focus({ preventScroll: true });
  };

  return (
    <div className="ps-root">
      {/* Partner icons are part of this page content — NOT in the site header */}
      <header className="ps-top" aria-hidden="false">
        <div className="ps-grid" role="navigation" aria-label="Partners quick navigation">
          {partnerData.map((partner, index) => (
            <PartnerCard key={partner.name} partner={partner} onClick={() => handleClick(index)} />
          ))}
        </div>
      </header>

      <main className="ps-main">
        <div className="ps-partners-grid-container">
          {partnerData.map((partner, index) => (
            <PartnerSection key={partner.name} partner={partner} ref={setRef(index)} />
          ))}
        </div>

        <section className="ps-structural" aria-labelledby="ps-structural-heading">
          <h1 id="ps-structural-heading" className="ps-h1">Industrial Projects</h1>
          <p className="ps-intro">
            Vogue Steel provides comprehensive industrial engineering solutions, specializing in structural steel fabrication for large-scale plants, warehouses, and manufacturing facilities. Our expertise extends to Oil & Gas, Metro, Bridges, and Water Desalination sectors.
          </p>

          <h2 className="ps-sub">Scope of Work</h2>
          <ul className="ps-list">
            <li>Structural Steel Fabrication & Erection</li>
            <li>Industrial Piping & Process Plant Erection</li>
            <li>Roofing & Wall Cladding Systems</li>
            <li>Workshop, Warehouse & Shed Structures</li>
            <li>Acoustic & Weatherproof Canopies</li>
            <li>Heavy Metal Fabrication (Mild Steel & Stainless Steel)</li>
          </ul>

          <h2 className="ps-sub">Material</h2>
          <ul className="ps-list">
            <li>Mild Steel</li>
            <li>Stainless Steel</li>
            <li>Specialized Industrial Alloys</li>
          </ul>

          <h2 className="ps-sub">Industrial & Structural Portfolio</h2>
          <p className="ps-intro">
            From our first small project in Abu Dhabi in 1996, we have engineered some of the most prestigious marvels in UAE & GCC. From Al-Dar HQ, Abu Dhabi to Burj Khalifa, Dubai, we have been the partners of choice in numerous projects for Architectural Design, Engineering and Fabrication.
          </p>

          <div className="ps-projects-grid">
            {structuralProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </section>

        <section className="ps-architectural" aria-labelledby="ps-architectural-heading">
          <h1 id="ps-architectural-heading" className="ps-h1">Architectural Projects</h1>
          <p className="ps-intro">
            We enliven concepts and brands into elegant structures. Our architectural division specializes in prestigious landmarks, decorative metal works, and complex facade systems including cladding and mashrabiya.
          </p>

          <h2 className="ps-sub">Scope of Work</h2>
          <ul className="ps-list">
            <li>Architectural Design & Fabrication</li>
            <li>Cladding & Mashrabiya Installation (Internal/External)</li>
            <li>Decorative Fencing, Gates & Grills</li>
            <li>Pergola Structures & Shade Systems</li>
            <li>Stainless Steel, Aluminum & Glass Works</li>
            <li>Decorative Metal Works for Mosques & Palaces</li>
          </ul>

          <h2 className="ps-sub">Material</h2>
          <ul className="ps-list">
            <li>Mild Steel & Stainless Steel</li>
            <li>Aluminum & Glass</li>
            <li>Bronze, Brass & Specialized Metals</li>
          </ul>

          <h2 className="ps-sub">Architectural Portfolio</h2>
          <p className="ps-intro">
            Delivering aesthetic excellence and structural integrity for landmark projects across the UAE.
          </p>

          <div className="ps-projects-grid">
            {architecturalProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </section>

        <section className="ps-all-projects" aria-labelledby="ps-projects-heading">
          <h1 id="ps-projects-heading" className="ps-h1">Projects</h1>
          <div className="ps-projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}