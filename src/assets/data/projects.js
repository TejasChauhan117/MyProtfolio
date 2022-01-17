import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import auconnect from '../images/AUConnect.png';
import Flologo from '../images/FloLogo.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Flo',
    desc:
      'It is an online music streaming application that provides Lossless Studio Quality Sound in just a click. Techstack:Java, Swing, MySQL',
    img: Flologo,
    link: 'https://github.com/TejasChauhan117/Flo',
  },
  {
    id: uuidv4(),
    name: 'AUConnect',
    desc:
      'The idea is to create a networking platform to bring the students of AU together, help them know each other better and able to share resources , announcement and opportunity. Techstack : Flask , MongoDB , HTML , CSS , JavaScript',
    img: auconnect,
    link: 'http://au-connect.herokuapp.com/',
  },
  {
    id: uuidv4(),
    name: 'Online Maze Generator',
    desc:
      'The project implements a depth-first search algorithm and creates a random maze for any dimensions that the user provides. Techstack : Python, Tkinter ',
    img: GreenCtgImg,
    link: 'https://github.com/TejasChauhan117/Maze-Generator',
  },
  {
    id: uuidv4(),
    name: 'LaughieApp',
    desc:
      'The idea is to create andriod App that can intervention for laughter exercises. Techstack: Andriod',
    img: UTrackerImg,
    link: 'https://github.com/TejasChauhan117/LaughieApp',
  },
  {
    id: uuidv4(),
    name: 'Depression detection on Twitter Data',
    desc:
      'This project mainly focuses on sentiment analysis of  Twitter data,  which is helpful to analyze the information in the tweets where the opinions are highly unstructured and heterogeneous. Techstack:Python , Jupyter Notebook',
    img: ProjectImg,
    link:
      'https://github.com/TejasChauhan117/CSE523-Machine-Learning-Hardly-Humans',
  },
];

export default projects;
