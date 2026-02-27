import moizImg from '../assets/images/Moiz.png';
import murtazaImg from '../assets/images/Murtaza.png'; // Capitalized M based on About.jsx
import mudrekaImg from '../assets/images/Mudreka.png'; // Capitalized M
import irfanImg from '../assets/images/Irfan.png'; // Capitalized I
import waheedImg from '../assets/images/muhammad1.png'; 
import nadeemImg from '../assets/images/Muhammad.png'; // Based on About.jsx (nadeemImg was 'Muhammad.png')

export const teamData = [
  {
    id: 'moiz-abbas',
    name: 'Moiz Abbas',
    role: 'CEO',
    image: moizImg,
    stats: {
      exp: 30,
      clients: 200,
      projects: 20,
      landmark: 20
    }
  },
  {
    id: 'murtaza-ali',
    name: 'Murtaza Ali',
    role: 'Finance Manager',
    image: murtazaImg,
     stats: {
      exp: 15,
      clients: 100,
      projects: 50,
      landmark: 10
    }
  },
  {
    id: 'mudreka-abdul-hussain',
    name: 'Mudreka Abdul Hussain',
    role: 'Operational Manager',
    image: mudrekaImg,
     stats: {
      exp: 20,
      clients: 150,
      projects: 40,
      landmark: 15
    }
  },
  {
    id: 'irfan-ahmad',
    name: 'Irfan Ahmad',
    role: 'Executive Manager',
    image: irfanImg,
     stats: {
      exp: 18,
      clients: 120,
      projects: 35,
      landmark: 12
    }
  },
  {
    id: 'muhammad-waheed',
    name: 'Muhammad Waheed',
    role: 'Site Manager',
    image: waheedImg,
     stats: {
      exp: 12,
      clients: 80,
      projects: 100,
      landmark: 8
    }
  },
  {
    id: 'mohammad-nadeem',
    name: 'Mohammad Nadeem',
    role: 'Technical Manager',
    image: nadeemImg,
     stats: {
      exp: 25,
      clients: 180,
      projects: 60,
      landmark: 18
    }
  }
];
